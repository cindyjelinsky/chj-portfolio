import React from 'react';
import './Hero.css';

// 1. Importando os ícones específicos
import { FaJava, FaCss3Alt } from 'react-icons/fa'; // Troquei o CSS para cá
import { 
  SiReact, 
  SiJavascript, 
  SiPython, 
  SiSpringboot 
} from 'react-icons/si'; // Removi o SiCss3 daqui
;

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__text slide-left">
            <h2 className="hero__subtitle">Hi!, I am</h2>
            <h1 className="hero__title">
              <span className="hero__title--main">Cindy H.J.</span>
              <span className="hero__title--accent">Full Stack Developer</span>
            </h1>
            <p className="hero__description">
              Creating incredible digital experiences with solid architecture, modern design, and the latest technologies in the market
            </p>
            <div className="hero__buttons">
              <a href="#projects" className="btn btn--primary">Projects</a>
              <a href="#contact" className="btn btn--secondary">Contact</a>
            </div>
          </div>

          <div className="hero__image slide-right">
            <div className="hero__image-wrapper">
              <div className="hero__image-bg"></div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=600&fit=crop&auto=format" 
                alt="Desenvolvedor trabalhando" 
                className="hero__img"
              />
              <div className="hero__image-overlay"></div>
            </div>
          </div>
        </div>

        {/* 2. Tech Stack atualizada com ícones */}
        <div className="hero__tech-stack">
           <div className="tech-stack__grid">
              <div className="tech-item">
                <SiReact className="tech-icon" />
                <span>React</span>
              </div>
              <div className="tech-item">
                <FaJava className="tech-icon" />
                <span>Java</span>
              </div>
              <div className="tech-item">
                <SiSpringboot className="tech-icon" />
                <span>Spring</span>
              </div>
              <div className="tech-item">
                <SiPython className="tech-icon" />
                <span>Python</span>
              </div>
              <div className="tech-item">
                <SiJavascript className="tech-icon" />
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <FaCss3Alt className="tech-icon" />
                <span>CSS</span>
              </div>
            </div>
          </div>
      </div>

      <div className="hero__scroll">
        <div className="scroll-indicator">
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;