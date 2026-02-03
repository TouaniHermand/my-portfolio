import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Qui suis je ?</h5>
      <h2>Vision, valeurs et principes</h2>

      <div className="testimonials__container">
        <article className="testimonial">
          <h3>Ma vision</h3>
          <p>
            Je vois la réussite comme un chemin construit avec patience, discipline et persévérance.
            Je crois que chaque effort compte et que les difficultés ne sont pas des obstacles, mais des opportunités d’apprentissage.
            Pour moi, avancer avec constance et détermination est plus important que d’aller vite.
          </p>
        </article>

        <article className="testimonial">
          <h3>Mes valeurs</h3>
          <p>
            La persévérance, l’humilité et le respect guident mes choix au quotidien.
            J’accorde une grande importance à l’apprentissage, au sens du travail bien fait et à la capacité de se remettre en question.
            Je crois que le succès durable repose autant sur les valeurs humaines que sur les compétences.
          </p>
        </article>

        <article className="testimonial">
          <h3>Mes principes</h3>
          <p>
            Je m’efforce d’agir avec sérieux, responsabilité et honnêteté dans tout ce que j’entreprends.
            J’avance avec la conviction que les sacrifices, la discipline et la cohérence entre les paroles et les actes sont essentiels pour atteindre ses objectifs.
            Pour moi, rester fidèle à ses principes est une force.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
