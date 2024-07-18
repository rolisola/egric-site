import React from 'react';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';
import Background from './assets/img/fundo_sob_construcao.jpg';
import Logo from './assets/img/logo_atual_branco.png';

const App = () => (
  <UnderConstruction
    background={{
      image: Background,
      textColor: '#fff',
      overlay: {
        color: '#000',
        opacity: '.5'
      }
    }}
    logo={{
      src: Logo,
      alt: 'Logo EGRIC BRANCO'
    }}
    title={{
      text: 'Espeleogrupo Rio Claro'
    }}
    description={{
      text: (
        <>
          Nosso novo site está em construção, pedimos desculpa pelo transtorno.
          <br />
          Para Contato use alguma das opções abaixo.
        </>
      ),
      style: {
        maxWidth: '440px',
      }
    }}
    links={[
      {
        url: 'https://www.instagram.com/egric_sp/',
        image: 'https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000'
      },
      /*{
        url: 'https://www.facebook.com/espeleologiaegric/',
        image: 'https://img.icons8.com/?size=100&id=118497&format=png&color=000000',
      },
      {
        url: 'https://www.linkedin.com/company/egric-espeleo-grupo-rio-claro/',
        image: 'https://img.icons8.com/?size=100&id=13930&format=png&color=000000',
      },*/
      {
        url: 'mailto:egric.espeleogrupo@gmail.com',
        image: 'https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000',
      },{
        url:'https://wa.me/+5519998288653',
        image:'https://img.icons8.com/?size=100&id=16466&format=png&color=00ff00'
      }
    ]}
  />
);

export default App;


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/