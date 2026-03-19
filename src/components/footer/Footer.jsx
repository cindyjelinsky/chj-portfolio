import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', text: 'Home' },
    { href: '#projects', text: 'Projects' },
    { href: '#about', text: 'About' },
    { href: '#career', text: 'Career' },
    { href: '#contact', text: 'Contact' }
  ];

  const socialLinks = [
    { href: 'https://github.com/cindyjelinsky', icon: <FaGithub />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/cindyjelinsky/', icon: <FaLinkedin />, label: 'LinkedIn' },
    { href: 'https://twitter.com', icon: <FaTwitter />, label: 'Twitter' },
    { href: 'https://instagram.com', icon: <FaInstagram />, label: 'Instagram' }
  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__section">
              <div className="footer__brand">
                <img 
                  src="" 
                  alt="Logo" 
                  className="footer__logo"
                />
                <h3 className="footer__title">Cindy H. Jelinsky</h3>
              </div>
              <p className="footer__description">
                Full Stack Developer creating incredible digital experiences 
                with clean code and modern design.
              </p>
              <div className="footer__social">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="footer__social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="footer__social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer__section">
              <h4 className="footer__section-title">Quick Links</h4>
              <ul className="footer__links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer__link">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__section">
              <h4 className="footer__section-title">Contact</h4>
              <div className="footer__contact">
                <div className="footer__contact-item">
                  <span className="footer__contact-icon"><HiOutlineMail /></span>
                  <span>helena.cjdev@gmail.com</span>
                </div>
                <div className="footer__contact-item">
                  <span className="footer__contact-icon"><HiOutlinePhone /></span>
                  <span>+55 (555) 123-4567</span>
                </div>
               </div>
            </div>

            <div className="footer__section">
              <h4 className="footer__section-title">Newsletter</h4>
              <p className="footer__newsletter-text">
                Get updates about new projects and articles.
              </p>
              <form className="footer__newsletter">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="footer__newsletter-input"
                  required
                />
                <button type="submit" className="footer__newsletter-btn">
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__copyright">
              <p>
                © {currentYear} Cindy H. Jelinsky. All rights reserved.
              </p>
            </div>
           
          </div>
        </div>
      </div>

      <div className="footer__wave">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="footer__wave-svg"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="rgba(255, 107, 53, 0.1)"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
