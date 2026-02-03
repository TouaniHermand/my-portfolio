import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Ce que j'ai appris</h5>
      <h2>Savoirs-faire</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>dévélopement Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developpement des interfaces Web (gestion de l'état,composants Réutilisables..)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Développer et Sécuriser des API REST
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implémenter l'authentification et la gestion des utilisateurs
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Assurer la compatibilité cross-browser et mobile</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Intégration des maquettes en respectant la charte graphique</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>dévélopement Mobile </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Créer des composants réutilisables</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Gerer l'état de l'application et la synchronisation avec le back-end
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Integrer des API REST pour récupérer les données 
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mettre en place des notifications push et autres services de l'appication</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Méthodologies Agiles</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Rédiger et gérer des user stories et tickets dans Jira</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Participer aux cérémonies Agile: daily meeting, sprint-planing, sprint review</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Estimer les tâches et planifier les sprints avec l'équipe</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaborer étroitement avec les designer, testeurs et autres développeurs</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
