import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../mockData';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <h2 className="display-4 fw-bold text-dark mb-3">
            Projects
          </h2>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            A showcase of my recent work and projects that demonstrate my skills and expertise.
          </p>
        </div>
        
        <div className="row g-4">
          {projectsData.map((project, index) => (
            <div key={index} className="col-md-6 fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
