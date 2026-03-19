import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Career from './components/career/Career';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Animação de elementos ao entrar na viewport
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      // Observar elementos com animação
      const animatedElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');
      animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
      });

      return () => observer.disconnect();
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executar uma vez no mount

    // Smooth scroll para links de navegação
    const handleLinkClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80; // Altura do header
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleLinkClick);

    // Menu mobile toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav__menu');

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    };

    if (navToggle) {
      navToggle.addEventListener('click', toggleMenu);
    }

    // Efeito parallax no hero
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.hero::before, .hero::after');
      
      parallaxElements.forEach((el, index) => {
        const speed = index === 0 ? 0.5 : 0.3;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallax);
      document.removeEventListener('click', handleLinkClick);
      if (navToggle) {
        navToggle.removeEventListener('click', toggleMenu);
      }
    };
  }, [isMenuOpen]);

  
  useEffect(() => {
    document.body.style.setProperty('--scroll-y', `${scrollY}px`);
  }, [scrollY]);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Career />
        <Contact />
      </main>
      <Footer />
      
      {/* Botão voltar ao topo */}
      <button 
        className={`scroll-to-top ${scrollY > 300 ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Voltar ao topo"
      >
        <span>↑</span>
      </button>

      {}
      <div className="custom-cursor"></div>
    </div>
  );
};

export default App;
