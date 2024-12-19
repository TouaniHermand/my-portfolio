import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.JPG";
import IMG2 from "../../assets/portfolio2.JPG";
import IMG3 from "../../assets/portfolio3.JPG";
import IMG4 from "../../assets/portfolio4.JPG";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.JPG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "full-web-site ",
    github: "https://github.com/TouaniHermand/full-web-site ",
  },
  {
    id: 2,
    image: IMG2,
    title: "food",
    github: "https://github.com/TouaniHermand/food ",
  },
  {
    id: 1,
    image: IMG3,
    title: "Moviedux ",
    github: "https://github.com/TouaniHermand/Moviedux ",
  },
  {
    id: 1,
    image: IMG4,
    title: "Gestion_RH  ",
    github: "https://github.com/TouaniHermand/Gestion_RH  ",
  },
  {
    id: 1,
    image: IMG5,
    title: "Gestion_RH  ",
    github: "https://github.com/TouaniHermand/Gestion_RH  ",
  },
  {
    id: 1,
    image: IMG6,
    title: "Bug-Blaster ",
    github: "https://github.com/TouaniHermand/Bug-Blaster  ",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((project) => (
          <article className="portfolio__item" key={project.id}>
            <div className="portfolio__item-image">
              <img src={project.image} alt="" />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              <a href={project.github} className="btn" target="_blank">
                Github
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
