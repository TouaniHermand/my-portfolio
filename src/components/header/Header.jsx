import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bienvenue, je me presente</h5>
        <h1>Hermand Willfried Touani</h1>
        <h5 className="text-light">Developpeur Logiciels</h5>
        <CTA></CTA>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Photo de Willfried Touani" />
        </div>

        <a href="#contact" className="scroll__down">
          Faites défiler
        </a>
      </div>
    </header>
  );
};

export default Header;
