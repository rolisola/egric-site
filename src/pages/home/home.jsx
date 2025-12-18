import React from 'react';
import './home.css';

const Home = () => {
	return (
		<div className="App">

			{/* Main Content */}
			<main className="main-content page-shell home-shell">

				{/* Seção Início */}
				<section id="inicio" className="section section-home">
					<div className="container">
						<div className="page-header">
							<h1>Bem-vindo ao EGRIC</h1>
							<p className="subtitle">Explorando e preservando o patrimônio espeleológico brasileiro</p>
						</div>
					</div>
				</section>

				{/* Seção EGRIC */}
				<section id="egric" className="section section-about">
					<div className="container">
						<h2>Sobre o EGRIC</h2>
						<p>
							O Espeleo Grupo Rio Claro (EGRIC) é uma sociedade civil sem fins lucrativos. Tem por fins o reconhecimento, a pesquisa e a exploração científica das cavidades naturais, bem como a preservação da natureza e do meio ambiente.
						</p>
						<p>
							Fundado no dia 05 de maio de 1979 em Rio Claro - SP, o grupo reúne entusiastas e profissionais comprometidos com a espeleologia brasileira.
						</p>
					</div>
				</section>

				{/* Seção Espeleologia */}
				<section id="espeleologia" className="section">
					<div className="container">
						<h2>Espeleologia</h2>
						<p>
							A espeleologia é a ciência que estuda as cavernas e demais cavidades naturais subterrâneas, sua formação, composição, morfologia, hidrologia, fauna e flora.
						</p>
					</div>
				</section>

				{/* Seção Galeria 
				<section id="galeria" className="section section-gallery">
					<div className="container">
						<h2>Galeria</h2>
						<p>Explore nossas expedições através de imagens.</p>
					</div>
				</section>*/}

			</main>
		</div>
	);
}


export default Home;