import React from "react";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
import Navbar from "../navbar/navbar.jsx";
import logoBranco from "../../assets/img/logo_atual_branco.png";
import "./header.css";

const Header = () => {
  return (
    <Headroom>
      <header className="header">
        <div className="header-content">
          <div className="header-logo">
            <Link to="/">
              <img src={logoBranco} alt="EGRIC Logo" />
            </Link>
          </div>
          <Navbar />
        </div>
      </header>
    </Headroom>
  );
};

export default Header;

import React from "react";
import Headroom from "react-headroom";
import Navbar from "../navbar/navbar.jsx";
import logoBranco from "../../assets/img/logo_atual_branco.png";
import "./header.css";

export default function Header() {
  return (
    <Headroom
      pinStart={0}           // começa fixo logo no topo
      tolerance={{ up: 5, down: 10 }} // sensibilidade: 5px pra cima, 10px pra baixo
      disableInlineStyles={true} // usamos nosso CSS, sem inline automático
    >
      <header className="header">
        <div className="header-content">
          <a href="/" className="logo">
            <img src={logoBranco} alt="Egric Logo" />
          </a>
          <Navbar />
        </div>
      </header>
    </Headroom>
  );
}

export