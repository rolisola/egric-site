import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Headroom from 'react-headroom';
import logoBranco from '../../assets/img/logo_atual_branco.png';
import './header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleNavigation = (e, path) => {
    e.preventDefault();
    closeMobileMenu();
    navigate(path);
  };

  const handleDropdownClick = (e, menu, path) => {
    // On desktop, navigate to the page; on mobile, toggle the dropdown
    if (!mobileMenuOpen) {
      e.preventDefault();
      navigate(path);
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    } else {
      toggleDropdown(menu);
    }
  };

  const handleSubItemClick = (e, path, hash) => {
    e.preventDefault();
    closeMobileMenu();
    
    // Navigate to the page and scroll to the section after a delay
    navigate(path);
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <Headroom>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); closeMobileMenu(); }}>
              <img src={logoBranco} alt="EGRIC Logo" />
            </a>
          </div>

          <nav className={`nav-menu ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" onClick={(e) => handleNavigation(e, '/')}>INÍCIO</a>
            </li>
            
            <li className="nav-item">
              <a href="/" onClick={(e) => handleNavigation(e, '/')}>EGRIC</a>
            </li>
            
            <li className="nav-item">
              <a href="/" onClick={(e) => handleNavigation(e, '/')}>ESPELEOLOGIA</a>
            </li>
            
            <li 
              className={`nav-item dropdown ${activeDropdown === 'cursos' ? 'active' : ''}`}
              onMouseEnter={() => !mobileMenuOpen && setActiveDropdown('cursos')}
              onMouseLeave={() => !mobileMenuOpen && closeDropdown()}
            >
              <button className="dropdown-toggle" onClick={(e) => handleDropdownClick(e, 'cursos', '/cursos')}>
                CURSOS <span className="arrow">▼</span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="/cursos#curso-introducao" onClick={(e) => handleSubItemClick(e, '/cursos', 'curso-introducao')}>CURSO DE INTRODUÇÃO À ESPELEOLOGIA</a></li>
                <li><a href="/cursos#curso-topografia" onClick={(e) => handleSubItemClick(e, '/cursos', 'curso-topografia')}>CURSO DE TOPOGRAFIA DE CAVERNAS</a></li>
              </ul>
            </li>
            
            <li 
              className={`nav-item dropdown ${activeDropdown === 'cartilhas' ? 'active' : ''}`}
              onMouseEnter={() => !mobileMenuOpen && setActiveDropdown('cartilhas')}
              onMouseLeave={() => !mobileMenuOpen && closeDropdown()}
            >
              <button className="dropdown-toggle" onClick={(e) => handleDropdownClick(e, 'cartilhas', '/cartilhas')}>
                CARTILHAS <span className="arrow">▼</span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="/cartilhas#cartilha-oqcaverna" onClick={(e) => handleSubItemClick(e, '/cartilhas', 'cartilha-oqcaverna')}>O que é caverna?</a></li>
                <li><a href="/cartilhas#cartilha-oqespeleologia" onClick={(e) => handleSubItemClick(e, '/cartilhas', 'cartilha-oqespeleologia')}>O que é espeleologia?</a></li>
                <li><a href="/cartilhas#cartilha-oqespeleogenese" onClick={(e) => handleSubItemClick(e, '/cartilhas', 'cartilha-oqespeleogenese')}>O que é espeleogênese?</a></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <a href="/" onClick={(e) => handleNavigation(e, '/')}>GALERIA</a>
            </li>
            
            <li 
              className={`nav-item dropdown ${activeDropdown === 'comissoes' ? 'active' : ''}`}
              onMouseEnter={() => !mobileMenuOpen && setActiveDropdown('comissoes')}
              onMouseLeave={() => !mobileMenuOpen && closeDropdown()}
            >
              <button className="dropdown-toggle" onClick={(e) => handleDropdownClick(e, 'comissoes', '/comissoes')}>
                COMISSÕES <span className="arrow">▼</span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="/comissoes#comissao-cursos" onClick={(e) => handleSubItemClick(e, '/comissoes', 'comissao-cursos')}>COMISSÃO DE CURSOS</a></li>
                <li><a href="/comissoes#comissao-educacao" onClick={(e) => handleSubItemClick(e, '/comissoes', 'comissao-educacao')}>COMISSÃO DE EDUCAÇÃO</a></li>
                <li><a href="/comissoes#comissao-marketing" onClick={(e) => handleSubItemClick(e, '/comissoes', 'comissao-marketing')}>COMISSÃO DE MARKETING</a></li>
                <li><a href="/comissoes#comissao-tecnica" onClick={(e) => handleSubItemClick(e, '/comissoes', 'comissao-tecnica')}>COMISSÃO TÉCNICA CIENTÍFICA</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
    </Headroom>
  );
};

export default Header;
