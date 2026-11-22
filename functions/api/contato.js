/*
 * POST /api/contato — Cloudflare Pages Function do formulário de contato.
 *
 * Camadas de proteção (na ordem em que são checadas):
 *  1. Só aceita POST com JSON, vindo do próprio site (header Origin).
 *  2. Limite de tamanho do corpo da requisição.
 *  3. Limite de envios por IP (KV "CONTATO_RATE_LIMIT", se configurado; senão em memória).
 *  4. Honeypot: campo invisível que só robôs preenchem.
 *  5. Tempo mínimo de preenchimento.
 *  6. Cloudflare Turnstile (captcha invisível/gerenciado), verificado no servidor.
 *  7. Validação e limpeza de todos os campos (mesmas regras do navegador).
 *  8. E-mail enviado só como texto puro, com o visitante em reply-to (nunca no "from").
 *
 * Variáveis de ambiente: veja .env.example e a seção "Formulário de contato" do README.
 */

import { LIMITES, TEMPO_MAXIMO_MS, TEMPO_MINIMO_MS, normalizar, validar } from '../../src/shared/contato.js';

const MAX_BYTES = 10 * 1024;
const LIMITE_ENVIOS = 5;
const JANELA_SEGUNDOS = 60 * 60;
const EMAIL_PADRAO_DESTINO = 'egric.espeleogrupo@gmail.com';
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const memoria = new Map();

function responder(status, corpo, extras = {}) {
	return new Response(JSON.stringify(corpo), {
		status,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'no-store',
			'X-Content-Type-Options': 'nosniff',
			...extras,
		},
	});
}

const falha = (status, erro, extras) => responder(status, { ok: false, erro }, extras);

function origemPermitida(request, env) {
	const origem = request.headers.get('Origin');
	if (!origem) return false;
	const permitidas = env.ALLOWED_ORIGINS
		? env.ALLOWED_ORIGINS.split(',').map((o) => o.trim()).filter(Boolean)
		: [new URL(request.url).origin];
	return permitidas.includes(origem);
}

async function excedeuLimite(ip, env) {
	const chave = `contato:${ip}`;
	const agora = Date.now();

	if (env.CONTATO_RATE_LIMIT) {
		const atual = await env.CONTATO_RATE_LIMIT.get(chave, 'json');
		const registro = atual && atual.reset > agora ? atual : { count: 0, reset: agora + JANELA_SEGUNDOS * 1000 };
		if (registro.count >= LIMITE_ENVIOS) return Math.ceil((registro.reset - agora) / 1000);
		registro.count += 1;
		// O KV exige TTL mínimo de 60s
		const ttl = Math.max(60, Math.ceil((registro.reset - agora) / 1000));
		await env.CONTATO_RATE_LIMIT.put(chave, JSON.stringify(registro), { expirationTtl: ttl });
		return 0;
	}

	// Fallback: memória da instância (não é compartilhada entre servidores — configure o KV em produção)
	for (const [k, v] of memoria) if (v.reset <= agora) memoria.delete(k);
	const registro = memoria.get(chave) ?? { count: 0, reset: agora + JANELA_SEGUNDOS * 1000 };
	if (registro.count >= LIMITE_ENVIOS) return Math.ceil((registro.reset - agora) / 1000);
	registro.count += 1;
	memoria.set(chave, registro);
	return 0;
}

async function turnstileValido(token, ip, env) {
	if (typeof token !== 'string' || !token || token.length > 2048) return false;
	if (!env.TURNSTILE_SECRET_KEY) {
		console.error('[contato] TURNSTILE_SECRET_KEY não configurada — recusando envio.');
		return false;
	}
	try {
		const corpo = new FormData();
		corpo.append('secret', env.TURNSTILE_SECRET_KEY);
		corpo.append('response', token);
		if (ip) corpo.append('remoteip', ip);
		const resposta = await fetch(TURNSTILE_VERIFY_URL, { method: 'POST', body: corpo });
		const resultado = await resposta.json();
		return resultado.success === true;
	} catch (erro) {
		console.error('[contato] Falha ao verificar o Turnstile:', erro);
		return false;
	}
}

function montarEmail({ nome, email, telefone, mensagem }, ip) {
	return {
		assunto: `[Site EGRIC] Contato de ${nome}`,
		texto: [
			'Nova mensagem recebida pelo formulário de contato do site.',
			'',
			`Nome: ${nome}`,
			`E-mail: ${email}`,
			`Telefone: ${telefone}`,
			'',
			'Mensagem:',
			mensagem,
			'',
			'---',
			`Enviado em ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}${ip ? ` · IP ${ip}` : ''}`,
			'Responda este e-mail para falar diretamente com o visitante.',
		].join('\n'),
	};
}

async function enviarEmail(dados, ip, env) {
	const { assunto, texto } = montarEmail(dados, ip);

	if (env.CONTATO_ENVIAR_EMAIL !== 'true') {
		// Modo de teste: nada é enviado.
		if (env.CONTATO_DEV === 'true') {
			console.info(`\n[contato] MODO TESTE — e-mail NÃO enviado\nAssunto: ${assunto}\n${texto}\n`);
		} else {
			console.info('[contato] MODO TESTE — e-mail NÃO enviado', {
				nomeChars: dados.nome.length,
				mensagemChars: dados.mensagem.length,
			});
		}
		return true;
	}

	if (!env.RESEND_API_KEY || !env.CONTATO_EMAIL_REMETENTE) {
		console.error('[contato] Envio ativado, mas RESEND_API_KEY ou CONTATO_EMAIL_REMETENTE não configurados.');
		return false;
	}

	try {
		const resposta = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${env.RESEND_API_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				from: env.CONTATO_EMAIL_REMETENTE,
				to: [env.CONTATO_EMAIL_DESTINO || EMAIL_PADRAO_DESTINO],
				reply_to: dados.email,
				subject: assunto,
				text: texto,
			}),
		});
		if (!resposta.ok) {
			console.error('[contato] Resend respondeu', resposta.status, await resposta.text());
			return false;
		}
		return true;
	} catch (erro) {
		console.error('[contato] Falha ao enviar e-mail:', erro);
		return false;
	}
}

export async function onRequest({ request, env }) {
	if (request.method !== 'POST') return falha(405, 'Método não permitido.', { Allow: 'POST' });

	if (!origemPermitida(request, env)) return falha(403, 'Origem não permitida.');

	if (!(request.headers.get('Content-Type') || '').toLowerCase().startsWith('application/json')) {
		return falha(415, 'Formato inválido.');
	}

	const declarado = Number(request.headers.get('Content-Length') || 0);
	if (declarado > MAX_BYTES) return falha(413, 'Mensagem muito grande.');
	const bruto = await request.text();
	if (new TextEncoder().encode(bruto).length > MAX_BYTES) return falha(413, 'Mensagem muito grande.');

	let corpo;
	try {
		corpo = JSON.parse(bruto);
	} catch {
		return falha(400, 'Formato inválido.');
	}
	if (!corpo || typeof corpo !== 'object' || Array.isArray(corpo)) return falha(400, 'Formato inválido.');

	const ip = request.headers.get('CF-Connecting-IP') || '';
	const esperar = await excedeuLimite(ip || 'desconhecido', env);
	if (esperar) {
		return falha(429, 'Muitas mensagens enviadas. Tente novamente mais tarde.', { 'Retry-After': String(esperar) });
	}

	// Honeypot preenchido: finge sucesso para não dar pistas ao robô.
	if (typeof corpo.website === 'string' && corpo.website.trim() !== '') return responder(200, { ok: true });

	const tempo = Number(corpo.tempoPreenchimento);
	if (!Number.isFinite(tempo) || tempo < TEMPO_MINIMO_MS) {
		return falha(400, 'Envio muito rápido. Aguarde alguns segundos e tente novamente.');
	}
	if (tempo > TEMPO_MAXIMO_MS) return falha(400, 'O formulário expirou. Recarregue a página e tente novamente.');

	if (!(await turnstileValido(corpo.turnstileToken, ip, env))) {
		return falha(403, 'Não foi possível confirmar que você não é um robô. Tente novamente.');
	}

	// Rejeita campos que não são texto ou que chegam absurdamente grandes antes de normalizar
	for (const campo of ['nome', 'email', 'telefone', 'mensagem']) {
		if (typeof corpo[campo] !== 'string' || corpo[campo].length > LIMITES.mensagem.max * 2) {
			return falha(400, 'Dados inválidos.');
		}
	}

	const dados = normalizar(corpo);
	const erros = validar(dados);
	if (Object.keys(erros).length) return responder(400, { ok: false, erro: 'Verifique os campos destacados.', campos: erros });

	if (!(await enviarEmail(dados, ip, env))) {
		return falha(502, 'Não foi possível enviar sua mensagem agora. Tente novamente mais tarde.');
	}

	return responder(200, { ok: true });
}
