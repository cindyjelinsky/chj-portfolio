import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__brand">
          <img 
            src="" 
            alt="Foto de perfil" 
            className="nav__avatar"
          />
          <h1 className="nav__title">C.Helena</h1>
        </div>
        <ul className="nav__menu">
          <li className="nav__item">
            <a href="#home" className="nav__link">Home</a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link">Projects</a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">About</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">Contact</a>
          </li>
        </ul>
        <div className="nav__social">
          <a 
            href="https://github.com/cindyjelinsky" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav__social-link"
            aria-label="GitHub"
          >
            <FaGithub className="nav__social-icon" />
          </a>
          <a 
            href="https://www.linkedin.com/in/cindyjelinsky/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav__social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="nav__social-icon" />
          </a>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <span className="nav__toggle-line"></span>
          <span className="nav__toggle-line"></span>
          <span className="nav__toggle-line"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
