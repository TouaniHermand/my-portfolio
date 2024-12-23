import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Touani Hermand Willfried</h1>
        <h5 className="text-light">Fullstack Developper</h5>
        <CTA></CTA>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="profil" />
        </div>

        <a href="#contact" className="scroll__down">
          Scrol down
        </a>
      </div>
    </header>
  );
};

export default Header;
