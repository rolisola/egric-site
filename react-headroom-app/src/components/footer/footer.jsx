import React from 'react';
import logoBranco from '../../assets/img/logo_atual_branco.png';
import './footer.css';
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaWhatsapp,
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaLinkedin,
	FaGithub,
	FaGlobe
} from 'react-icons/fa';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			{/* Main Footer */}
			<div className="footer-main">
				<div className="footer-container">
					{/* Seção Sobre o EGRIC */}
					<div className="footer-section footer-about">
						<h3>EGRIC</h3>
						<p className="footer-description">
							Espeleogrupo Rio Claro - Dedicado à exploração, pesquisa e conservação
							do patrimônio espeleológico brasileiro desde sua fundação.
						</p>
						<div className="footer-logo">
							<img src={logoBranco} alt="EGRIC Logo" />
						</div>
					</div>

					{/* Seção Contato */}
					<div className="footer-section footer-contact">
						<h3>Contato</h3>
						<ul className="contact-list">
							<li>
								<FaMapMarkerAlt className="footer-icon" />
								<a
									href="https://maps.app.goo.gl/LqhKgZtp4CEbsiyk6"
									target="_blank"
									rel="noopener noreferrer"
									title="Ver no Google Maps"
								>
									Av. 24 A, 1515 - Bela Vista, Rio Claro - SP, CEP 13506-900
								</a>
							</li>
							<li>
								<FaEnvelope className="footer-icon" />
								<a href="mailto:egric.espeleogrupo@gmail.com">egric.espeleogrupo@gmail.com</a>
							</li>
							<li>
								<FaPhone className="footer-icon" />
								<a href="tel:+5511962659477">(11) 96265-9477</a>
							</li>
							<li>
								<FaWhatsapp className="footer-icon" />
								<a href="https://wa.me/5511962659477" target="_blank" rel="noopener noreferrer">
									WhatsApp
								</a>
							</li>
						</ul>
					</div>

					{/* Seção Redes Sociais */}
					<div className="footer-section footer-social">
						<h3>Redes Sociais</h3>
						<p>Acompanhe nossas expedições e atividades</p>
						<div className="social-links">
							<a
								href="https://www.facebook.com/espeleologiaegric"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
								className="social-link facebook"
							>
								<FaFacebook />
							</a>
							<a
								href="https://www.instagram.com/egric_sp"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
								className="social-link instagram"
							>
								<FaInstagram />
							</a>
							<a
								href="https://www.youtube.com/@EGRICESPELEOGRUPORIOCLARO"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="YouTube"
								className="social-link youtube"
							>
								<FaYoutube />
							</a>
							<a
								href="https://wa.me/5511962659477"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="WhatsApp"
								className="social-link whatsapp"
							>
								<FaWhatsapp />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Bottom - Direitos Reservados */}
			<div className="footer-bottom">
				<div className="footer-container">
					<div className="footer-bottom-content">
						<p className="copyright">
							&copy; {currentYear} EGRIC - Espeleogrupo Rio Claro. Todos os direitos reservados.
						</p>
						<div className="footer-legal">
							<a href="#privacidade">Política de Privacidade</a>
							<span className="separator">|</span>
							<a href="#termos">Termos de Uso</a>
						</div>
					</div>
				</div>
			</div>

			{/* Developer Footer */}
			<div className="footer-developer">
				<div className="footer-container">
					<div className="developer-content">
						<p className="developer-text">
							Desenvolvido com <span className="heart">♥</span> por
						</p>
						<div className="developer-info">
							<a
								href="https://github.com/rolisola"
								target="_blank"
								rel="noopener noreferrer"
								className="developer-link"
							>
								<FaGlobe className="dev-icon" />
								<span className="developer-name">Vitor Rolisola</span>
							</a>
							<div className="developer-social">
								<a
									href="https://github.com/rolisola"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub do Desenvolvedor"
									className="dev-social-link"
								>
									<FaGithub />
								</a>
								<a
									href="https://linkedin.com/in/vitor-rolisola"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn do Desenvolvedor"
									className="dev-social-link"
								>
									<FaLinkedin />
								</a>
								<a
									href="mailto:dev.vitor.rolisola@gmail.com"
									aria-label="Email do Desenvolvedor"
									className="dev-social-link"
								>
									<FaEnvelope />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
