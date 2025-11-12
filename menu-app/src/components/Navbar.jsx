import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);

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

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">MeuApp</a>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Início</a>
          </li>
          
          <li 
            className={`navbar-item dropdown ${openDropdown === 1 ? 'active' : ''}`}
            onMouseEnter={() => toggleDropdown(1)}
            onMouseLeave={closeDropdown}
          >
            <a href="#servicos" className="dropdown-toggle">
              Serviços
              <span className="arrow">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#web">Desenvolvimento Web</a></li>
              <li><a href="#mobile">Apps Mobile</a></li>
              <li><a href="#design">Design</a></li>
              <li><a href="#consultoria">Consultoria</a></li>
            </ul>
          </li>
          
          <li 
            className={`navbar-item dropdown ${openDropdown === 2 ? 'active' : ''}`}
            onMouseEnter={() => toggleDropdown(2)}
            onMouseLeave={closeDropdown}
          >
            <a href="#produtos" className="dropdown-toggle">
              Produtos
              <span className="arrow">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#software">Software</a></li>
              <li><a href="#hardware">Hardware</a></li>
              <li><a href="#saas">SaaS</a></li>
            </ul>
          </li>
          
          <li className="navbar-item">
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
          </li>
          
          <li className="navbar-item">
            <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
