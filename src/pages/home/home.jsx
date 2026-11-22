import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBookOpen, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaLeaf } from 'react-icons/fa';
import { GiCaveEntrance } from 'react-icons/gi';
import logoBranco from '../../assets/img/logo_atual_branco.png';
import Contato from '../../components/contato/contato';
import './home.css';

const destaques = [
	{ icon: <FaCalendarAlt className="home-stat__icon" aria-hidden="true" />, valor: '1979', rotulo: 'Fundado em 05 de maio' },
	{ icon: <FaMapMarkerAlt className="home-stat__icon" aria-hidden="true" />, valor: 'Rio Claro · SP', rotulo: 'Nossa sede' },
	{ icon: <FaLeaf className="home-stat__icon" aria-hidden="true" />, valor: 'Sem fins lucrativos', rotulo: 'Sociedade civil' },
];

const explorar = [
	{
		icon: <GiCaveEntrance aria-hidden="true" />,
		titulo: 'Espeleologia',
		texto: 'A espeleologia é a ciência que estuda as cavernas e demais cavidades naturais subterrâneas, sua formação, composição, morfologia, hidrologia, fauna e flora.',
		link: '/espeleologia',
		cta: 'Saiba mais',
	},
	{
		icon: <FaGraduationCap aria-hidden="true" />,
		titulo: 'Cursos',
		texto: 'Capacitação e formação em espeleologia para todos os níveis, com atividades teóricas e práticas em cavernas da região.',
		link: '/cursos',
		cta: 'Ver cursos',
	},
	{
		icon: <FaBookOpen aria-hidden="true" />,
		titulo: 'Cartilhas',
		texto: 'Materiais produzidos pela Comissão de Educação do EGRIC, com foco em segurança, equipamentos, conservação e orientação a iniciantes.',
		link: '/cartilhas',
		cta: 'Ler cartilhas',
	},
];

const Home = () => {
	return (
		<div className="App">
			<main className="main-content page-shell home-shell">

				{/* Seção Início */}
				<section id="inicio" className="section home-hero">
					<div className="container home-hero__inner">
						<div className="home-hero__text">
							<span className="eyebrow">Espeleo Grupo Rio Claro</span>
							<h1>Bem-vindo ao <span className="home-hero__accent">EGRIC</span></h1>
							<p className="home-hero__subtitle">
								Explorando e preservando o patrimônio espeleológico brasileiro
							</p>
							<div className="home-hero__actions">
								<Link to="/aboutus" className="btn btn-primary">
									Conheça o EGRIC <FaArrowRight className="icon" aria-hidden="true" />
								</Link>
								<Link to="/cartilhas" className="btn btn-secondary">
									<FaBookOpen className="icon" aria-hidden="true" /> Cartilhas
								</Link>
							</div>
						</div>

						<div className="home-hero__logo">
							<img src={logoBranco} alt="Logo do EGRIC — Espeleo Grupo Rio Claro" />
						</div>
					</div>
				</section>

				{/* Seção EGRIC */}
				<section id="egric" className="section home-about">
					<div className="container">
						<div className="home-about__grid">
							<div className="home-about__text">
								<span className="eyebrow">Quem somos</span>
								<h2>Sobre o EGRIC</h2>
								<p>
									O Espeleo Grupo Rio Claro (EGRIC) é uma sociedade civil sem fins lucrativos. Tem por fins o reconhecimento, a pesquisa e a exploração científica das cavidades naturais, bem como a preservação da natureza e do meio ambiente.
								</p>
								<p>
									Fundado no dia 05 de maio de 1979 em Rio Claro - SP, o grupo reúne entusiastas e profissionais comprometidos com a espeleologia brasileira.
								</p>
							</div>

							<ul className="home-stats">
								{destaques.map(({ icon, valor, rotulo }) => (
									<li key={valor} className="home-stat card">
										{icon}
										<div>
											<strong className="home-stat__value">{valor}</strong>
											<span className="home-stat__label">{rotulo}</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				{/* Seção Espeleologia / explorar */}
				<section id="espeleologia" className="section home-explore">
					<div className="container">
						<div className="home-section-header">
							<span className="eyebrow">Explore</span>
							<h2>Conheça o mundo subterrâneo</h2>
						</div>

						<div className="home-explore__grid">
							{explorar.map(({ icon, titulo, texto, link, cta }) => (
								<Link key={titulo} to={link} className="home-feature card card--interactive">
									<span className="home-feature__icon">
										{icon}
									</span>
									<h3>{titulo}</h3>
									<p>{texto}</p>
									<span className="home-feature__cta">
										{cta} <FaArrowRight aria-hidden="true" />
									</span>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Seção Contato */}
				<section id="contato" className="section home-contato">
					<div className="container">
						<div className="home-section-header">
							<span className="eyebrow">Contato</span>
							<h2>Fale com o EGRIC</h2>
							<p className="home-contato__intro">
								Dúvidas sobre cursos, expedições ou como participar? Envie uma mensagem e retornaremos pelo e-mail informado.
							</p>
						</div>

						<div className="home-contato__form">
							<Contato />
						</div>
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
