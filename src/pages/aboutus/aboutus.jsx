import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

export default function AboutUs() {
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <section id="sobre" className="section section-about">
          <div className="container">
            <h1>Sobre o EGRIC</h1>
            <p className="subtitle">Espeleogrupo Rio Claro</p>
            
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
              <h2>Nossa História</h2>
              <p>
                O EGRIC (Espeleogrupo Rio Claro) foi fundado em Rio Claro - SP com o objetivo 
                de promover a exploração, pesquisa, documentação e conservação de cavernas 
                e do patrimônio espeleológico brasileiro.
              </p>
              
              <h2>Missão</h2>
              <p>
                Nossa missão é desenvolver atividades de exploração e pesquisa em cavernas, 
                promover a educação ambiental e a preservação do patrimônio espeleológico, 
                além de capacitar novos espeleólogos através de cursos e treinamentos.
              </p>
              
              <h2>Valores</h2>
              <ul style={{ lineHeight: '2', fontSize: '1.1rem' }}>
                <li>Respeito ao meio ambiente e às cavernas</li>
                <li>Segurança em todas as atividades</li>
                <li>Educação e compartilhamento de conhecimento</li>
                <li>Trabalho em equipe e colaboração</li>
                <li>Rigor científico nas pesquisas</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
