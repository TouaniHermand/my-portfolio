import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offert</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creation of responsive and interactive web sites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Development of web applications using frameworks such a React js
                and Vue js
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creation of API's to enable integration with other applications
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integration of database to store and retrieve data</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimisation of web application performance</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Mobile development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creation of mobile applications for Android ans iOS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Development of hybrid applications using frameworks such as
                React Native
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creation of API's to enable integration with other applications
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creation of intuitive and responsive User interfaces</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimisation of mobile application performance</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Additional Sevices</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and prototyping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Maintenance and updates of existing applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Client training and support for application</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
