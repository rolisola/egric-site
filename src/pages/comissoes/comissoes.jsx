import React from 'react';
import './comissoes.css';

const Comissoes = () => {
	return (
		<div className="App">
			<main className="main-content">
				{/* Seção Comissões */}
				<section id="comissoes" className="page-shell comissoes-section">
					<div className="container">
						<div className="page-header">
							<h1>Comissões</h1>
							<p className="subtitle">Conheça as comissões e grupos de trabalho do EGRIC.</p>
						</div>

						<div className="comissoes-grid">
							<article id="comissao-cursos" className="comissao-card">
								<h2>Comissão de Cursos</h2>
								<p>
									Organiza e executa cursos e treinamentos técnicos do grupo, capacitando
									novos membros e aprimorando conhecimentos dos espeleólogos.
								</p>
								<p>
									<strong>Atividades:</strong> Planejamento de cursos, seleção de instrutores,
									organização de material didático, certificação de participantes.
								</p>
							</article>

							<article id="comissao-educacao" className="comissao-card">
								<h2>Comissão de Educação</h2>
								<p>
									Responsável pelos materiais educativos do EGRIC, como as{' '}
									<a href="/cartilhas" className="link-destaque">Cartilhas</a>, promovendo
									a disseminação de conhecimento sobre espeleologia e conservação.
								</p>
								<p>
									<strong>Atividades:</strong> Produção de cartilhas, palestras educativas,
									oficinas em escolas, divulgação científica.
								</p>
							</article>

							<article id="comissao-marketing" className="comissao-card">
								<h2>Comissão de Marketing</h2>
								<p>
									Cuida da comunicação, identidade visual e divulgação das atividades do
									EGRIC nas redes sociais e demais canais.
								</p>
								<p>
									<strong>Atividades:</strong> Gestão de redes sociais, design gráfico,
									fotografia e vídeo, campanhas de divulgação.
								</p>
							</article>

							<article id="comissao-tecnica" className="comissao-card">
								<h2>Comissão Técnica Científica</h2>
								<p>
									Desenvolve pesquisas, documentação e padronização técnico-científica das
									atividades espeleológicas do grupo.
								</p>
								<p>
									<strong>Atividades:</strong> Pesquisa científica, publicação de artigos,
									padronização de metodologias, banco de dados espeleológicos.
								</p>
							</article>
						</div>

						<div className="comissoes-info">
							<h2>Faça Parte</h2>
							<p>
								Interessado em participar de alguma comissão? Entre em contato conosco
								através de nossas redes sociais. Buscamos pessoas comprometidas e apaixonadas
								pela espeleologia!
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default Comissoes;
