import React, { useState } from 'react';
import './Header.css';

const Header = () => {
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

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={require('../../assets/img/logo_atual_branco.png')} alt="EGRIC Logo" />
          {/*<span className="logo-text">EGRIC</span>*/}
        </div>

        <nav className={`nav-menu ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#inicio" onClick={closeMobileMenu}>INÍCIO</a>
            </li>
            
            <li className="nav-item">
              <a href="#egric" onClick={closeMobileMenu}>EGRIC</a>
            </li>
            
            <li className="nav-item">
              <a href="#espeleologia" onClick={closeMobileMenu}>ESPELEOLOGIA</a>
            </li>
            
            <li 
              className={`nav-item dropdown ${activeDropdown === 'cursos' ? 'active' : ''}`}
              onMouseEnter={() => !mobileMenuOpen && setActiveDropdown('cursos')}
              onMouseLeave={() => !mobileMenuOpen && closeDropdown()}
            >
              <button className="dropdown-toggle" onClick={() => toggleDropdown('cursos')}>
                CURSOS <span className="arrow">▼</span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#curso-basico" onClick={closeMobileMenu}>CURSO DE INTRODUÇÃO À ESPELEOLOGIA</a></li>
                <li><a href="#curso-avancado" onClick={closeMobileMenu}>CURSO DE TOPOGRAFIA DE CAVERNAS</a></li>
                {/*<li><a href="#curso-vertical">Técnicas Verticais</a></li>
                <li><a href="#curso-resgate">Resgate em Cavernas</a></li>*/}
              </ul>
            </li>
            
            {/*<li className="nav-item">
              <a href="#calendario" onClick={closeMobileMenu}>CALENDÁRIO</a>
            </li>*/}
            
            <li 
              className={`nav-item dropdown ${activeDropdown === 'cartilhas' ? 'active' : ''}`}
              onMouseEnter={() => !mobileMenuOpen && setActiveDropdown('cartilhas')}
              onMouseLeave={() => !mobileMenuOpen && closeDropdown()}
            >
              <button className="dropdown-toggle" onClick={() => toggleDropdown('cartilhas')}>
                CARTILHAS <span className="arrow">▼</span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#cartilha-seguranca" onClick={closeMobileMenu}>Segurança</a></li>
                <li><a href="#cartilha-equipamentos" onClick={closeMobileMenu}>Equipamentos</a></li>
                <li><a href="#cartilha-conservacao" onClick={closeMobileMenu}>Conservação</a></li>
                <li><a href="#cartilha-iniciantes" onClick={closeMobileMenu}>Para Iniciantes</a></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <a href="#galeria" onClick={closeMobileMenu}>GALERIA</a>
            </li>
            
            <li 
              className={`nav-item dropdown ${activeDropdown === 'comissoes' ? 'active' : ''}`}
              onMouseEnter={() => !mobileMenuOpen && setActiveDropdown('comissoes')}
              onMouseLeave={() => !mobileMenuOpen && closeDropdown()}
            >
              <button className="dropdown-toggle" onClick={() => toggleDropdown('comissoes')}>
                COMISSÕES <span className="arrow">▼</span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#comissao-eventos" onClick={closeMobileMenu}>COMISSÃO DE CURSOS</a></li>
                <li><a href="#comissao-comunicacao" onClick={closeMobileMenu}>COMISSÃO DE EDUCAÇÃO</a></li>
                <li><a href="#comissao-cientifica" onClick={closeMobileMenu}>COMISSÃO DE MARKETING</a></li>
                <li><a href="#comissao-tecnica" onClick={closeMobileMenu}>COMISSÃO TÉCNICA CIENTÍFICA</a></li>
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
  );
};

export default Header;
