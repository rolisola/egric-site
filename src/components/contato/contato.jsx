import React, { useEffect, useRef, useState } from 'react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { LIMITES, mascararTelefone, normalizar, validar } from '../../shared/contato';
import './contato.css';

const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
// Em desenvolvimento usa a chave de teste da Cloudflare (sempre aprova)
const TURNSTILE_SITE_KEY =
	import.meta.env.VITE_TURNSTILE_SITE_KEY || (import.meta.env.DEV ? '1x00000000000000000000AA' : '');

const VAZIO = { nome: '', email: '', telefone: '', mensagem: '' };

let carregandoTurnstile;
function carregarTurnstile() {
	if (window.turnstile) return Promise.resolve(window.turnstile);
	carregandoTurnstile ??= new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = TURNSTILE_SRC;
		script.async = true;
		script.onload = () => resolve(window.turnstile);
		script.onerror = () => {
			carregandoTurnstile = undefined;
			script.remove();
			reject(new Error('Falha ao carregar o Turnstile'));
		};
		document.head.appendChild(script);
	});
	return carregandoTurnstile;
}

const Contato = () => {
	const [valores, setValores] = useState(VAZIO);
	const [erros, setErros] = useState({});
	const [tocados, setTocados] = useState({});
	const [status, setStatus] = useState('idle'); // idle | enviando | sucesso | erro
	const [aviso, setAviso] = useState('');
	const [token, setToken] = useState('');
	const [captchaIndisponivel, setCaptchaIndisponivel] = useState(!TURNSTILE_SITE_KEY);

	const honeypotRef = useRef(null);
	const inicioRef = useRef(0);
	const captchaRef = useRef(null);
	const widgetRef = useRef(null);

	const concluido = status === 'sucesso';

	// (Re)inicia o cronômetro e o captcha quando o formulário aparece
	useEffect(() => {
		inicioRef.current = Date.now();
		if (!TURNSTILE_SITE_KEY || concluido) return undefined;
		let cancelado = false;

		carregarTurnstile()
			.then((turnstile) => {
				if (cancelado || !captchaRef.current) return;
				widgetRef.current = turnstile.render(captchaRef.current, {
					sitekey: TURNSTILE_SITE_KEY,
					language: 'pt-br',
					theme: 'auto',
					callback: (t) => setToken(t),
					'expired-callback': () => setToken(''),
					'error-callback': () => setToken(''),
				});
			})
			.catch(() => !cancelado && setCaptchaIndisponivel(true));

		return () => {
			cancelado = true;
			if (widgetRef.current !== null && window.turnstile) window.turnstile.remove(widgetRef.current);
			widgetRef.current = null;
			setToken('');
		};
	}, [concluido]);

	const atualizar = (campo) => (evento) => {
		const valor = campo === 'telefone' ? mascararTelefone(evento.target.value) : evento.target.value;
		const proximos = { ...valores, [campo]: valor };
		setValores(proximos);
		if (tocados[campo]) setErros(validar(normalizar(proximos)));
	};

	const marcarTocado = (campo) => () => {
		setTocados((t) => ({ ...t, [campo]: true }));
		setErros(validar(normalizar(valores)));
	};

	const reiniciarCaptcha = () => {
		setToken('');
		if (widgetRef.current !== null && window.turnstile) window.turnstile.reset(widgetRef.current);
	};

	const enviar = async (evento) => {
		evento.preventDefault();
		if (status === 'enviando') return;

		const dados = normalizar(valores);
		const encontrados = validar(dados);
		setErros(encontrados);
		setTocados({ nome: true, email: true, telefone: true, mensagem: true });
		if (Object.keys(encontrados).length) {
			setStatus('erro');
			setAviso('Verifique os campos destacados.');
			return;
		}
		if (!token) {
			setStatus('erro');
			setAviso('Aguarde a verificação de segurança concluir.');
			return;
		}

		setStatus('enviando');
		setAviso('');
		try {
			const resposta = await fetch('/api/contato', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...dados,
					website: honeypotRef.current?.value ?? '',
					tempoPreenchimento: Date.now() - inicioRef.current,
					turnstileToken: token,
				}),
			});
			const resultado = await resposta.json().catch(() => ({}));

			if (resposta.ok && resultado.ok) {
				setValores(VAZIO);
				setErros({});
				setTocados({});
				setStatus('sucesso');
				return;
			}
			if (resultado.campos) setErros(resultado.campos);
			setStatus('erro');
			setAviso(resultado.erro || 'Não foi possível enviar sua mensagem. Tente novamente.');
		} catch {
			setStatus('erro');
			setAviso('Sem conexão com o servidor. Verifique sua internet e tente novamente.');
		}
		reiniciarCaptcha();
	};

	const erroDe = (campo) => (tocados[campo] ? erros[campo] : undefined);

	const campo = (nome, rotulo, props) => {
		const erro = erroDe(nome);
		return (
			<div className={`contato-campo${props.multiline ? ' contato-campo--full' : ''}`}>
				<label htmlFor={`contato-${nome}`}>{rotulo}</label>
				{props.multiline ? (
					<textarea
						id={`contato-${nome}`}
						name={nome}
						rows={6}
						maxLength={LIMITES.mensagem.max}
						value={valores[nome]}
						onChange={atualizar(nome)}
						onBlur={marcarTocado(nome)}
						aria-invalid={Boolean(erro)}
						aria-describedby={`contato-${nome}-ajuda`}
						required
					/>
				) : (
					<input
						id={`contato-${nome}`}
						name={nome}
						type={props.type}
						inputMode={props.inputMode}
						autoComplete={props.autoComplete}
						maxLength={props.maxLength}
						placeholder={props.placeholder}
						value={valores[nome]}
						onChange={atualizar(nome)}
						onBlur={marcarTocado(nome)}
						aria-invalid={Boolean(erro)}
						aria-describedby={`contato-${nome}-ajuda`}
						required
					/>
				)}
				<span id={`contato-${nome}-ajuda`} className="contato-campo__ajuda">
					{erro ? <span className="contato-campo__erro">{erro}</span> : null}
					{props.multiline ? (
						<span className="contato-campo__contador">
							{valores.mensagem.length}/{LIMITES.mensagem.max}
						</span>
					) : null}
				</span>
			</div>
		);
	};

	if (status === 'sucesso') {
		return (
			<div className="contato-card card contato-sucesso" role="status">
				<FaCheckCircle className="contato-sucesso__icone" aria-hidden="true" />
				<h3>Mensagem enviada!</h3>
				<p>Obrigado pelo contato. Responderemos assim que possível pelo e-mail informado.</p>
				<button type="button" className="btn btn-secondary" onClick={() => setStatus('idle')}>
					Enviar outra mensagem
				</button>
			</div>
		);
	}

	const enviando = status === 'enviando';

	return (
		<form className="contato-card card" onSubmit={enviar} noValidate>
			<div className="contato-grid">
				{campo('nome', 'Nome', { type: 'text', autoComplete: 'name', maxLength: LIMITES.nome.max })}
				{campo('email', 'E-mail', { type: 'email', autoComplete: 'email', inputMode: 'email', maxLength: LIMITES.email.max })}
				{campo('telefone', 'Telefone', {
					type: 'tel',
					autoComplete: 'tel-national',
					inputMode: 'tel',
					maxLength: 16,
					placeholder: '(19) 99999-9999',
				})}
				{campo('mensagem', 'Mensagem', { multiline: true })}
			</div>

			{/* Honeypot: invisível para pessoas, robôs costumam preencher */}
			<div className="contato-honeypot" aria-hidden="true">
				<label htmlFor="contato-website">Não preencha este campo</label>
				<input id="contato-website" ref={honeypotRef} type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
			</div>

			<div className="contato-captcha" ref={captchaRef} />
			{captchaIndisponivel ? (
				<p className="contato-aviso contato-aviso--erro" role="alert">
					A verificação de segurança não carregou. Recarregue a página ou fale conosco pelo e-mail no rodapé.
				</p>
			) : null}

			{aviso ? (
				<p className="contato-aviso contato-aviso--erro" role="alert">
					{aviso}
				</p>
			) : null}

			<div className="contato-acoes">
				<button type="submit" className="btn btn-primary" disabled={enviando || captchaIndisponivel}>
					<FaPaperPlane aria-hidden="true" /> {enviando ? 'Enviando…' : 'Enviar mensagem'}
				</button>
				<span className="contato-privacidade">
					Usamos seus dados apenas para responder ao seu contato.
				</span>
			</div>
		</form>
	);
};

export default Contato;
