import React from 'react';
import './aboutus.css';

const AboutUs = () => {
	return (
		<div className="App">
			<main className="main-content">
				<section id="sobre" className="page-shell aboutus-section">
					<div className="container">
						<div className="page-header">
							<h1>Sobre o EGRIC</h1>
						</div>
						<div className="content">
							<h2>Nossa História</h2>
							<p>
								O Espeleo Grupo Rio Claro (EGRIC) é uma sociedade civil sem fins lucrativos, fundada no dia 05 de maio de 1979. Tem por fins o reconhecimento, a pesquisa e a exploração científica das cavidades naturais, bem como a preservação da natureza e do meio ambiente.
							</p>

							{/*<h2>Missão</h2>
							<p>
								Nossa missão é desenvolver atividades de exploração e pesquisa em cavernas, promover a educação ambiental e a preservação do patrimônio espeleológico, além de capacitar novos espeleólogos através de cursos e treinamentos.
							</p>

							<h2>Valores</h2>
							<ul>
								<li>Respeito ao meio ambiente e às cavernas</li>
								<li>Segurança em todas as atividades</li>
								<li>Educação e compartilhamento de conhecimento</li>
								<li>Trabalho em equipe e colaboração</li>
								<li>Rigor científico nas pesquisas</li>
							</ul>*/}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default AboutUs;
