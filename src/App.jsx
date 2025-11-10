import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Cartilhas from './pages/Cartilhas/Cartilhas.jsx';
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
        <Cartilhas />

        {/* Seção Galeria */}
        <section id="galeria" className="section section-gallery">
          <div className="container">
            <h2>Galeria</h2>
            <p>Explore nossas expedições através de imagens.</p>
          </div>
        </section>

        {/* Seção Comissões */}
        <section id="comissoes" className="section section-comissoes">
          <div className="container">
            <h2>Comissões</h2>
            <p className="subtitle">Conheça as comissões e grupos de trabalho do EGRIC.</p>

            <div className="comissoes-grid">
              <article id="comissao-cursos" className="comissao-card">
                <h3>Comissão de Cursos</h3>
                <p>Organiza e executa cursos e treinamentos técnicos do grupo, capacitando novos membros e aprimorando conhecimentos dos espeleólogos.</p>
              </article>

              <article id="comissao-educacao" className="comissao-card">
                <h3>Comissão de Educação</h3>
                <p>
                  Responsável pelos materiais educativos do EGRIC, como as{' '}
                  <a href="#cartilhas" className="link-destaque">Cartilhas</a>, promovendo a disseminação de conhecimento sobre espeleologia e conservação.
                </p>
              </article>

              <article id="comissao-marketing" className="comissao-card">
                <h3>Comissão de Marketing</h3>
                <p>Cuida da comunicação, identidade visual e divulgação das atividades do EGRIC nas redes sociais e demais canais.</p>
              </article>

              <article id="comissao-tecnica" className="comissao-card">
                <h3>Comissão Técnica Científica</h3>
                <p>Desenvolve pesquisas, documentação e padronização técnico-científica das atividades espeleológicas do grupo.</p>
              </article>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
