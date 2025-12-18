import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item"><Link to="/">INÍCIO</Link></li>
        <li className="navbar-item"><Link to="/aboutus">EGRIC</Link></li>
        <li className="navbar-item"><Link to="/espeleologia">ESPELEOLOGIA</Link></li>
        <li className="navbar-item"><Link to="/cursos">CURSOS</Link></li>
        <li className="navbar-item"><Link to="/cartilhas">CARTILHAS</Link></li>
        <li className="navbar-item"><Link to="/galeria">GALERIA</Link></li>
        <li className="navbar-item"><Link to="/comissoes">COMISSÕES</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
