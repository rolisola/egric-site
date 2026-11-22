/*
 * Regras do formulário de contato, compartilhadas entre o navegador
 * (src/components/contato) e o servidor (functions/api/contato.js).
 * O servidor SEMPRE revalida: a checagem no navegador é só para a experiência do usuário.
 */

export const LIMITES = {
	nome: { min: 2, max: 100 },
	email: { max: 254 },
	telefone: { minDigitos: 10, maxDigitos: 13 },
	mensagem: { min: 10, max: 2000 },
	maxLinks: 2,
};

// Tempo mínimo entre abrir o formulário e enviar (bots costumam enviar instantaneamente)
export const TEMPO_MINIMO_MS = 3000;
// Formulário aberto há mais de 1 dia: pede para recarregar a página
export const TEMPO_MAXIMO_MS = 24 * 60 * 60 * 1000;

// Caracteres de controle (exceto \n e \t), zero-width e marcas de direção bidi
// eslint-disable-next-line no-control-regex
const CONTROLE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFEFF]/g;
const NOME_VALIDO = /^\p{L}[\p{L}\p{M}\s'.-]*$/u;
const EMAIL_VALIDO = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;
const LINK = /(https?:\/\/|www\.)/gi;

const texto = (valor) => (typeof valor === 'string' ? valor : '');

/** Remove caracteres invisíveis/de controle e normaliza espaços. */
export function normalizar(dados) {
	const linhaUnica = (v) => texto(v).replace(CONTROLE, '').replace(/\s+/g, ' ').trim();
	return {
		nome: linhaUnica(dados.nome).normalize('NFC'),
		email: linhaUnica(dados.email).toLowerCase(),
		telefone: linhaUnica(dados.telefone),
		mensagem: texto(dados.mensagem)
			.replace(CONTROLE, '')
			.replace(/\r\n?/g, '\n')
			.replace(/\n{3,}/g, '\n\n')
			.trim()
			.normalize('NFC'),
	};
}

/** Retorna { campo: 'mensagem de erro' } — objeto vazio quando tudo está válido. */
export function validar(dados) {
	const { nome, email, telefone, mensagem } = dados;
	const erros = {};

	if (nome.length < LIMITES.nome.min) erros.nome = 'Informe seu nome.';
	else if (nome.length > LIMITES.nome.max) erros.nome = `Use no máximo ${LIMITES.nome.max} caracteres.`;
	else if (!NOME_VALIDO.test(nome)) erros.nome = 'Use apenas letras, espaços, apóstrofo ou hífen.';

	if (!email) erros.email = 'Informe seu e-mail.';
	else if (email.length > LIMITES.email.max || !EMAIL_VALIDO.test(email)) erros.email = 'Informe um e-mail válido.';

	const digitos = telefone.replace(/\D/g, '');
	if (!telefone) erros.telefone = 'Informe seu telefone.';
	else if (
		!/^[\d\s()+-]+$/.test(telefone) ||
		digitos.length < LIMITES.telefone.minDigitos ||
		digitos.length > LIMITES.telefone.maxDigitos
	) erros.telefone = 'Informe um telefone válido com DDD.';

	if (mensagem.length < LIMITES.mensagem.min) erros.mensagem = `Escreva pelo menos ${LIMITES.mensagem.min} caracteres.`;
	else if (mensagem.length > LIMITES.mensagem.max) erros.mensagem = `Use no máximo ${LIMITES.mensagem.max} caracteres.`;
	else if ((mensagem.match(LINK) || []).length > LIMITES.maxLinks) erros.mensagem = `A mensagem pode ter no máximo ${LIMITES.maxLinks} links.`;

	return erros;
}

/** Formata o telefone enquanto o usuário digita: (19) 98264-1602 */
export function mascararTelefone(valor) {
	const d = texto(valor).replace(/\D/g, '').slice(0, 11);
	if (d.length <= 2) return d.length ? `(${d}` : '';
	if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
	if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
	return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
