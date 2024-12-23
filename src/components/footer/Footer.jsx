import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Touani Hermand
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/willfried.touani">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/willfried93/">
          <FiInstagram />
        </a>
        <a href="https://www.instagram.com/willfried93/">
          <FiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
