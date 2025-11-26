import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import logoBranco from "../../assets/img/logo_atual_branco.png";
import './header.css';

export default function Header() {
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
						<Link to="/">
							<img src={logoBranco} alt="EGRIC Logo" />
						</Link>
					</div>

					<nav className="navbar">
						<Link to="/" className="nav-link">INÍCIO</Link>
						<Link to="/aboutus" className="nav-link">EGRIC</Link>
						<Link to="/espeleologia" className="nav-link">ESPELEOLOGIA</Link>
						<Link to="/cursos" className="nav-link">CURSOS</Link>
						<Link to="/cartilhas" className="nav-link">CARTILHAS</Link>
						<Link to="/galeria" className="nav-link">GALERIA</Link>
						<Link to="/comissoes" className="nav-link">COMISSÕES</Link>
					</nav>
				</div>
			</header>
		</Headroom>
	);
}
