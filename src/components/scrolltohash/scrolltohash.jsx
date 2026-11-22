import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Controla a rolagem ao trocar de página (o React Router não faz isso sozinho):
 * - URL com âncora (ex.: /comissoes#comissao-educacao): rola até o elemento com esse id.
 *   A distância do header fixo é tratada via scroll-margin-top (styles.css).
 * - URL sem âncora: abre a nova página no topo.
 */
const ScrollToHash = () => {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (!hash) {
			window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
			return;
		}

		const id = decodeURIComponent(hash.slice(1));
		const frame = window.requestAnimationFrame(() => {
			document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		});

		return () => window.cancelAnimationFrame(frame);
	}, [pathname, hash]);

	return null;
};

export default ScrollToHash;
