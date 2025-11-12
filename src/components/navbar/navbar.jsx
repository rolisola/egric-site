import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoBranco from '../../assets/img/logo_atual_branco.png';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // Scroll to anchor if on same page, otherwise navigate
  const handleAnchorClick = (e, anchor) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      closeMenu();
    }
  };

  // Scroll to top when navigating to a new page
  const handlePageNavigation = () => {
    window.scrollTo(0, 0);
    closeMenu();
  };

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
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
          {/*<span></span>
          <span></span>
          <span></span>*/}
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/#inicio" onClick={(e) => handleAnchorClick(e, '#inicio')}>
              INÍCIO
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/aboutus" onClick={closeMenu}>
              EGRIC
            </Link>
          </li>
          
          <li className="navbar-item">
            <Link to="/#espeleologia" onClick={(e) => handleAnchorClick(e, '#espeleologia')}>
              ESPELEOLOGIA
            </Link>
          </li>
          
          <li 
            className={`navbar-item dropdown ${openDropdown === 1 ? 'active' : ''}`}
            onMouseEnter={() => toggleDropdown(1)}
            onMouseLeave={closeDropdown}
          >
            <a href="#cursos" className="dropdown-toggle">
              CURSOS
              <span className="arrow">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/#curso-basico" onClick={(e) => { handleAnchorClick(e, '#curso-basico'); closeMenu(); }}>
                  Introdução à Espeleologia
                </Link>
              </li>
              <li>
                <Link to="/#curso-avancado" onClick={(e) => { handleAnchorClick(e, '#curso-avancado'); closeMenu(); }}>
                  Topografia de Cavernas
                </Link>
              </li>
            </ul>
          </li>
          
          <li 
            className={`navbar-item dropdown ${openDropdown === 2 ? 'active' : ''}`}
            onMouseEnter={() => toggleDropdown(2)}
            onMouseLeave={closeDropdown}
          >
            <Link to="/cartilhas" className="dropdown-toggle" onClick={handlePageNavigation}>
              CARTILHAS
              <span className="arrow">▼</span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/cartilhas#cartilha-oqcaverna" onClick={handlePageNavigation}>
                  O que é caverna?
                </Link>
              </li>
              <li>
                <Link to="/cartilhas#cartilha-oqespeleologia" onClick={handlePageNavigation}>
                  O que é espeleologia?
                </Link>
              </li>
              <li>
                <Link to="/cartilhas#cartilha-oqespeleogenese" onClick={handlePageNavigation}>
                  O que é espeleogênese?
                </Link>
              </li>
            </ul>
          </li>
          
          <li className="navbar-item">
            <Link to="/#galeria" onClick={(e) => handleAnchorClick(e, '#galeria')}>
              GALERIA
            </Link>
          </li>
          
          <li 
            className={`navbar-item dropdown ${openDropdown === 3 ? 'active' : ''}`}
            onMouseEnter={() => toggleDropdown(3)}
            onMouseLeave={closeDropdown}
          >
            <a href="#comissoes" className="dropdown-toggle">
              COMISSÕES
              <span className="arrow">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/#comissao-cursos" onClick={(e) => { handleAnchorClick(e, '#comissao-cursos'); closeMenu(); }}>
                  Comissão de Cursos
                </Link>
              </li>
              <li>
                <Link to="/#comissao-educacao" onClick={(e) => { handleAnchorClick(e, '#comissao-educacao'); closeMenu(); }}>
                  Comissão de Educação
                </Link>
              </li>
              <li>
                <Link to="/#comissao-marketing" onClick={(e) => { handleAnchorClick(e, '#comissao-marketing'); closeMenu(); }}>
                  Comissão de Marketing
                </Link>
              </li>
              <li>
                <Link to="/#comissao-tecnica" onClick={(e) => { handleAnchorClick(e, '#comissao-tecnica'); closeMenu(); }}>
                  Comissão Técnica Científica
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
