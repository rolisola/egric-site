import { Link } from 'react-router-dom';
import { useState } from 'react';
import useCompactOnScroll from '../../hooks/useCompactOnScroll';
import logoBranco from "../../assets/img/logo_atual_branco.png";
import './header.css';

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// compact: ao rolar para baixo o header fica mais baixo; ao rolar para cima volta ao normal.
	// scrolled: fora do topo o fundo fica translúcido (exceto com o menu mobile aberto).
	// As alturas ficam no CSS (--header-height / --header-height-compact).
	const { compact, scrolled } = useCompactOnScroll({
		offset: 40,
		disabled: mobileMenuOpen,
	});

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<header
			className={[
				'header',
				compact && 'header--compact',
				scrolled && 'header--scrolled',
				mobileMenuOpen && 'header--menu-open',
			].filter(Boolean).join(' ')}
		>
			<div className="header-container">
				<div className="logo">
					<Link to="/" onClick={closeMobileMenu}>
						<img src={logoBranco} alt="EGRIC Logo" />
					</Link>
				</div>

				{/* Botão hambúrguer para mobile */}
				<button 
					className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
					onClick={toggleMobileMenu}
					aria-label="Toggle menu"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				{/* Menu de navegação */}
				<nav className={`navbar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
					<Link to="/" className="nav-link" onClick={closeMobileMenu}>INÍCIO</Link>
					<Link to="/aboutus" className="nav-link" onClick={closeMobileMenu}>EGRIC</Link>
					<Link to="/espeleologia" className="nav-link" onClick={closeMobileMenu}>ESPELEOLOGIA</Link>
					<Link to="/cursos" className="nav-link" onClick={closeMobileMenu}>CURSOS</Link>
					<Link to="/cartilhas" className="nav-link" onClick={closeMobileMenu}>CARTILHAS</Link>
					<Link to="/galeria" className="nav-link" onClick={closeMobileMenu}>GALERIA</Link>
					<Link to="/comissoes" className="nav-link" onClick={closeMobileMenu}>COMISSÕES</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;
