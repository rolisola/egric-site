import { useEffect, useRef, useState } from 'react';

/**
 * Estado de scroll para um elemento fixo (ex.: header):
 * - `compact`: true ao rolar para baixo, false ao rolar para cima.
 * - `scrolled`: true sempre que a página não está no topo (independe da direção).
 *
 * - `offset`: até essa posição de scroll (px) o elemento fica sempre no tamanho normal.
 * - `tolerance`: quantos px é preciso rolar numa direção para mudar o estado.
 *   O deslocamento é acumulado, então rolagens lentas (trackpad/inércia) também funcionam.
 * - `disabled`: quando true, congela `compact` (ex.: menu mobile aberto),
 *   mas continua acompanhando a posição para não ficar com valor desatualizado.
 */
const useCompactOnScroll = ({ offset = 0, tolerance = 8, disabled = false } = {}) => {
	const [compact, setCompact] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const lastY = useRef(0);
	const ticking = useRef(false);
	const options = useRef({ offset, tolerance, disabled });

	useEffect(() => {
		options.current = { offset, tolerance, disabled };
	}, [offset, tolerance, disabled]);

	useEffect(() => {
		lastY.current = Math.max(window.scrollY, 0);
		setScrolled(lastY.current > 0);

		const update = () => {
			ticking.current = false;
			const { offset, tolerance, disabled } = options.current;
			const y = Math.max(window.scrollY, 0);
			const delta = y - lastY.current;

			setScrolled(y > 0);

			if (disabled) {
				lastY.current = y;
			} else if (y <= offset) {
				setCompact(false);
				lastY.current = y;
			} else if (Math.abs(delta) >= tolerance) {
				setCompact(delta > 0);
				lastY.current = y;
			}
		};

		const onScroll = () => {
			if (!ticking.current) {
				ticking.current = true;
				window.requestAnimationFrame(update);
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return { compact, scrolled };
};

export default useCompactOnScroll;
