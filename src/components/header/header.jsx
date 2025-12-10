import { Link } from 'react-router-dom';
import { useState } from 'react';
import Headroom from 'react-headroom';
import logoBranco from "../../assets/img/logo_atual_branco.png";
import './header.css';

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Headroom
			disableInlineStyles
			pinStart={100}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				zIndex: 1000,
			}}
		>
			<header className="header">
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
		</Headroom>
	);
}

export default Header;