import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoBranco from '../../assets/img/logo_atual_branco.png';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isShrunk, setIsShrunk] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // DEBUG
      // console.log('scroll', currentScrollY, 'last', lastScrollY);

      // Encolhe quando sai do topo
      setIsShrunk(currentScrollY > 50);

      // Esconde ao rolar para baixo (após 100px), mostra ao rolar para cima
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Attach
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Run once to set initial state (útil ao carregar já scrolled)
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${isVisible ? 'visible' : 'hidden'} ${isShrunk ? 'shrunk' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" onClick={closeMenu}>
              <img src={logoBranco} alt="EGRIC Logo" />
            </Link>
          </div>

          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
          </button>

          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="navbar-item"><Link to="/" onClick={closeMenu}>INÍCIO</Link></li>
            <li className="navbar-item"><Link to="/aboutus" onClick={closeMenu}>EGRIC</Link></li>
            <li className="navbar-item"><Link to="/espeleologia" onClick={closeMenu}>ESPELEOLOGIA</Link></li>
            <li className="navbar-item"><Link to="/cursos" onClick={closeMenu}>CURSOS</Link></li>
            <li className="navbar-item"><Link to="/cartilhas" onClick={closeMenu}>CARTILHAS</Link></li>
            <li className="navbar-item"><Link to="/galeria" onClick={closeMenu}>GALERIA</Link></li>
            <li className="navbar-item"><Link to="/comissoes" onClick={closeMenu}>COMISSÕES</Link></li>
          </ul>
        </div>
      </nav>

      {/* hover area colocada DEPOIS do nav para permitir controle via CSS sibling */}
      <div
        className="navbar-hover-area"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => { /* não escondemos aqui; deixamos o scroll decidir */ }}
      />
    </>
  );
};

export default Navbar;
