import React from 'react';
import './Career.css';

const Career = () => {
  const experiencias = [
    {
      cargo: 'Full Stack Developer',
      empresa: 'Financial Management Startup',
      descricao: 'Engineer and Developer of financial management system'
    },
    {
      cargo: 'Python Developer',
      empresa: 'Python Automation',
      descricao: 'Python automation app for crypto trading.'
    },
    {
      cargo: 'Embroidery Digitizer',
      empresa: 'Bordamix Bordados',
      descricao: 'Embroidery Digitizer and Designer'
    }
  ];

  return (
    <section id="career" className="career">
      <div className="container">
        <div className="career__header fade-in">
          <h2 className="section__subtitle">Career</h2>
          <h3 className="section__title">Professional Experience</h3>
        </div>
        <div className="career__timeline">
          {experiencias.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline__marker"></div>
              <div className="timeline__content">
                <div className="timeline__header">
                  <h5>{exp.cargo}</h5>
                </div>
                <h6>{exp.empresa}</h6>
                <p>{exp.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
