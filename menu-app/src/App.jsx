import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <main className="main-content">
        <section id="home" className="section">
          <h1>Bem-vindo ao MeuApp</h1>
          <p>Um exemplo de menu responsivo com React 19</p>
        </section>

        <section id="servicos" className="section">
          <h2>Nossos Serviços</h2>
          <div className="cards">
            <div className="card">
              <h3>Desenvolvimento Web</h3>
              <p>Criamos sites e aplicações web modernas e responsivas.</p>
            </div>
            <div className="card">
              <h3>Apps Mobile</h3>
              <p>Desenvolvimento de aplicativos para iOS e Android.</p>
            </div>
            <div className="card">
              <h3>Design</h3>
              <p>Design UX/UI profissional e criativo.</p>
            </div>
          </div>
        </section>

        <section id="produtos" className="section">
          <h2>Nossos Produtos</h2>
          <div className="cards">
            <div className="card">
              <h3>Software Personalizado</h3>
              <p>Soluções sob medida para sua empresa.</p>
            </div>
            <div className="card">
              <h3>Hardware</h3>
              <p>Equipamentos de última geração.</p>
            </div>
            <div className="card">
              <h3>SaaS</h3>
              <p>Plataformas na nuvem para seu negócio.</p>
            </div>
          </div>
        </section>

        <section id="sobre" className="section">
          <h2>Sobre Nós</h2>
          <p>Somos uma empresa dedicada a criar soluções tecnológicas inovadoras.</p>
          <p>Com anos de experiência no mercado, oferecemos qualidade e excelência em todos os nossos projetos.</p>
        </section>

        <section id="contato" className="section">
          <h2>Entre em Contato</h2>
          <p>Email: contato@meuapp.com</p>
          <p>Telefone: (11) 99999-9999</p>
          <p>Endereço: São Paulo, SP</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 MeuApp. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
