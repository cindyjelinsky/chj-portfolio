import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__header fade-in">
          <h2 className="section__subtitle">Get to know me</h2>
          <h3 className="section__title">About</h3>
        </div>

        <div className="about__content-centered">
          <div className="about__texto slide-left">
            <div className="about__intro">
              <h4>Hi! I am Cindy H. Jelinsky</h4>
              <p>
                A Full Stack Developer passionate about building end-to-end applications, from intuitive user interfaces to robust backends. Focused on transforming ideas into high-quality digital products with clean code and modern architecture.
              </p>
              <p>
                What started as curiosity has evolved into a dedicated pursuit of technical excellence and impactful solutions. I am a firm believer that high-quality code is the essential foundation for any scalable digital product.
              </p>
            </div>

            <div className="about__valores">
              <h4>Languages</h4>
              <div className="valores__grid-centered">
                <div className="valor-item">
                  <div className="language-content">
                    <h5>English</h5>
                    <p>Fluent</p>
                    <div className="progress-bar">
                      <div className="progress-fill english-progress"></div>
                    </div>
                  </div>
                </div>
                <div className="valor-item">
                  <div className="language-content">
                    <h5>Spanish</h5>
                    <p>Intermediate</p>
                    <div className="progress-bar">
                      <div className="progress-fill spanish-progress"></div>
                    </div>
                  </div>
                </div>
                <div className="valor-item">
                  <div className="language-content">
                    <h5>Portuguese</h5>
                    <p>Native</p>
                    <div className="progress-bar">
                      <div className="progress-fill portuguese-progress"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
