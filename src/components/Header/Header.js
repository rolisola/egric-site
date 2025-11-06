import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={require('../../assets/img/logo_atual_branco.png')} alt="EGRIC Logo" />
          {/*<span className="logo-text">EGRIC</span>*/}
        </div>

        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#inicio" onClick={closeDropdown}>INÍCIO</a>
            </li>
            
            <li className="nav-item">
              <a href="#egric" onClick={closeDropdown}>EGRIC</a>
            </li>
            
            <li className="nav-item">
              <a href="#espeleologia" onClick={closeDropdown}>ESPELEOLOGIA</a>
            </li>
            
            <li 
              className={`nav-item dropdown ${activeDropdown === 'cursos' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('cursos')}
              onMouseLeave={closeDropdown}
            >
              <button className="dropdown-toggle" onClick={() => toggleDropdown('cursos')}>
                CURSOS <span className="arrow">▼</span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#curso-basico">CURSO DE INTRODUÇÃO À ESPELEOLOGIA</a></li>
                <li><a href="#curso-avancado">CURSO DE TOPOGRAFIA DE CAVERNAS</a></li>
                {/*<li><a href="#curso-vertical">Técnicas Verticais</a></li>
                <li><a href="#curso-resgate">Resgate em Cavernas</a></li>*/}
              </ul>
            </li>
            
            {/*<li className="nav-item">
              <a href="#calendario" onClick={closeDropdown}>CALENDÁRIO</a>
            </li>*/}
            
            <li 
              className={`nav-item dropdown ${activeDropdown === 'cartilhas' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('cartilhas')}
              onMouseLeave={closeDropdown}
            >
              <button className="dropdown-toggle" onClick={() => toggleDropdown('cartilhas')}>
                CARTILHAS <span className="arrow">▼</span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#cartilha-seguranca">Segurança</a></li>
                <li><a href="#cartilha-equipamentos">Equipamentos</a></li>
                <li><a href="#cartilha-conservacao">Conservação</a></li>
                <li><a href="#cartilha-iniciantes">Para Iniciantes</a></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <a href="#galeria" onClick={closeDropdown}>GALERIA</a>
            </li>
            
            <li 
              className={`nav-item dropdown ${activeDropdown === 'comissoes' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('comissoes')}
              onMouseLeave={closeDropdown}
            >
              <button className="dropdown-toggle" onClick={() => toggleDropdown('comissoes')}>
                COMISSÕES <span className="arrow">▼</span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#comissao-eventos">COMISSÃO DE CURSOS</a></li>
                <li><a href="#comissao-comunicacao">COMISSÃO DE EDUCAÇÃO</a></li>
                <li><a href="#comissao-cientifica">COMISSÃO DE MARKETING</a></li>
                <li><a href="#comissao-tecnica">COMISSÃO TÉCNICA CIENTÍFICA</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <button className="mobile-menu-toggle" onClick={() => toggleDropdown('mobile')}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
