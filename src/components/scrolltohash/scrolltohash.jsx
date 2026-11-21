import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ao navegar para uma URL com âncora (ex.: /comissoes#comissao-educacao),
 * rola até o elemento com esse id. O React Router não faz isso sozinho.
 * A distância do header fixo é tratada via scroll-margin-top (styles.css).
 */
const ScrollToHash = () => {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (!hash) return;

		const id = decodeURIComponent(hash.slice(1));
		const frame = window.requestAnimationFrame(() => {
			document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		});

		return () => window.cancelAnimationFrame(frame);
	}, [pathname, hash]);

	return null;
};

export default ScrollToHash;
