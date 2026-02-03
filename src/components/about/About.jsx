import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Decouvrez</h5>
      <h2>Mon Univers</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content ">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiences</h5>
              <small>Ce que j'ai accompli</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Savoirs-être</h5>
              <small>Ce qui me définit</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projets</h5>
              <small>Mes créations</small>
            </article>
          </div>
          <p>
            Perfectionniste et engagé je cherche constament à améliorer mon travail et à repousser mes limites
            Mon parcours m'a permis de développer non seulement des competences techniques, mais aussi un savoir-être fondé sur
            la rigueur, l'adaptabilité, l'esprit d'équipe et le sens des responsabilités. J'avance avec la conviction que la persévérance et
            les sacrifices sont essentiels pour atteindre ses objectifs.
          </p>

          <a href="#contact" className="btn btn-primary">
            Me Contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
