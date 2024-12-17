import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

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
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects completed</small>
            </article>
          </div>
          <p>
            Je me presente Touani Hermand Willfried developpeur Web et Mobile
            Depuis toujours, je suis passionné par les nouvelles technologies et
            leur capacité à transformer notre quotidien. Mon objectif est de
            rejoindre une équipe dynamique pour concevoir des solutions
            innovantes qui répondent à des besoins concrets.Je serais ravi
            d’échanger avec vous ! n’hésitez pas à me contacter pour discuter
            d’un projet ou d’une collaboration.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
