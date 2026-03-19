import React from 'react';
import './Projects.css';

const Projects = () => {

  const projetos = [
    {
      id: 1,
      titulo: 'Financial Management Platform',
      descricao: 'Financial management platform for personal and business finance tracking.',
      imagem: '',
      tecnologias: ['React', 'Node.js', 'SQL'],
      link: 'https://github.com/cindyjelinsky',
      categoria: 'web'
    },
    {
      id: 2,
      titulo: 'Mobile Banking App             ',
      descricao: 'Intuitive web banking app with real-time balance checking and transfers. ',
      imagem: 't',
      tecnologias: ['Java ', 'Spring', 'PostgreSQL'],
      link: 'https://github.com/cindyjelinsky',
      categoria: 'web'
    },
    {
      id: 3,
      titulo: 'Portfolio Web Page',
      descricao: 'Design and Code for developer prtfolio responsive page',
      imagem: '',
      tecnologias: ['React', 'JS', 'CSS'],
      link: 'https://github.com/cindyjelinsky',
      categoria: 'web'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header fade-in">
          <h2 className="section__subtitle">MY WORK</h2>
          <h3 className="section__title">Projects</h3>
          <p className="section__description">
            Check out some of the projects I've built with passion and dedication,
            using modern technologies and best practices.
          </p>
        </div>

        <div className="projects__grid">
          {projetos.map((projeto, index) => (
            <div 
              key={projeto.id} 
              className="projeto-card"
              style={{ animationDelay: `${index * 2}s` }}
              onClick={() => window.open(projeto.link, '_blank', 'noopener,noreferrer')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.open(projeto.link, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              
              <div className="projeto-card__content">
                <h3 className="projeto-card__title">{projeto.titulo}</h3>
                <p className="projeto-card__description">{projeto.descricao}</p>
                <div className="projeto-card__tech">
                  {projeto.tecnologias.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="projeto-card__link-wrapper">
                  <span className="projeto-card__text-link">
                    See Project →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
