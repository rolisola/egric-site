import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Main Content */}
      <main className="main-content">
        
        {/* Seção Início */}
        <section id="inicio" className="section section-home">
          <div className="container">
            <h1>Bem-vindo ao EGRIC</h1>
            <p className="subtitle">Espeleogrupo Rio Claro</p>
            <p>Explorando e preservando o patrimônio espeleológico brasileiro</p>
          </div>
        </section>

        {/* Seção EGRIC */}
        <section id="egric" className="section section-about">
          <div className="container">
            <h2>Sobre o EGRIC</h2>
            <p>
              O EGRIC (Espeleogrupo Rio Claro) é uma organização dedicada à exploração, 
              pesquisa, documentação e conservação de cavernas e do patrimônio espeleológico.
            </p>
            <p>
              Fundado em Rio Claro - SP, o grupo reúne entusiastas e profissionais 
              comprometidos com a espeleologia brasileira.
            </p>
          </div>
        </section>

        {/* Seção Espeleologia */}
        <section id="espeleologia" className="section">
          <div className="container">
            <h2>Espeleologia</h2>
            <p>
              A espeleologia é a ciência que estuda as cavernas e demais cavidades naturais 
              subterrâneas, sua formação, composição, morfologia, hidrologia, fauna e flora.
            </p>
          </div>
        </section>

        {/* Seção Cursos */}
        <section id="cursos" className="section section-courses">
          <div className="container">
            <h2>Cursos</h2>
            <div className="courses-grid">
              <div className="course-card" id="curso-basico">
                <h3>Curso de Introdução à Espeleologia</h3>
                <p>Aprenda os fundamentos da exploração de cavernas.</p>
              </div>
              <div className="course-card" id="curso-avancado">
                <h3>Curso de Topografia de Cavernas</h3>
                <p>Domine as técnicas de mapeamento e documentação.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Calendário */}
        <section id="calendario" className="section">
          <div className="container">
            <h2>Calendário</h2>
            <p>Confira nossas próximas expedições e atividades.</p>
          </div>
        </section>

        {/* Seção Cartilhas */}
        <section id="cartilhas" className="section">
          <div className="container">
            <h2>Cartilhas</h2>
            <p>Material educativo sobre espeleologia e conservação.</p>
          </div>
        </section>

        {/* Seção Galeria */}
        <section id="galeria" className="section section-gallery">
          <div className="container">
            <h2>Galeria</h2>
            <p>Explore nossas expedições através de imagens.</p>
          </div>
        </section>

        {/* Seção Comissões */}
        <section id="comissoes" className="section">
          <div className="container">
            <h2>Comissões</h2>
            <p>Conheça as comissões e grupos de trabalho do EGRIC.</p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
