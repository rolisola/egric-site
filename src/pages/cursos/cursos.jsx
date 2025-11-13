import React from 'react';
import Footer from '../../components/footer/footer';

export default function Cursos() {
  return (
    <div className="App">      
      <main className="main-content">
        {/* Seção Cursos */}
        <section id="cursos" className="section section-courses">
          <div className="container">
            <h2>Cursos</h2>
            <p className="subtitle">
              Capacitação e formação em espeleologia para todos os níveis
            </p>

            <div className="courses-grid">
              <div className="course-card" id="curso-introducao">
                <h3>Curso de Introdução à Espeleologia</h3>
                <p>
                  Aprenda os fundamentos da exploração de cavernas, incluindo técnicas básicas,
                  equipamentos essenciais e princípios de segurança e conservação.
                </p>
                <p>
                  <strong>Conteúdo:</strong> Formação de cavernas, técnicas verticais básicas,
                  uso de equipamentos, princípios de mínimo impacto.
                </p>
              </div>

              <div className="course-card" id="curso-topografia">
                <h3>Curso de Topografia de Cavernas</h3>
                <p>
                  Domine as técnicas de mapeamento e documentação espeleológica,
                  utilizando métodos tradicionais e modernos.
                </p>
                <p>
                  <strong>Conteúdo:</strong> Instrumentos topográficos, técnicas de medição,
                  desenho de plantas e perfis, processamento de dados.
                </p>
              </div>
            </div>

            <div className="course-info">
              <h3>Informações Gerais</h3>
              <p>
                Os cursos do EGRIC são ministrados por instrutores experientes e certificados,
                com atividades teóricas e práticas em cavernas da região.
              </p>
              <p>
                Para mais informações sobre datas, inscrições e valores, entre em contato
                através de nossas redes sociais ou e-mail.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
