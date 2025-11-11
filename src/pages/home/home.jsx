import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

export default function Home() {
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

        {/* Seção Galeria */}
        <section id="galeria" className="section section-gallery">
          <div className="container">
            <h2>Galeria</h2>
            <p>Explore nossas expedições através de imagens.</p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
