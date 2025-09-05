import React from 'react';

const ProjectCard = ({ project }) => {

  const para = (
    <p className="text-muted small lh-base mb-0">
      {project.description}
    </p>
  );

  const CardContent = (
    <div className="card h-100 shadow-sm card-hover border-0">
      <div className="card-body p-4">
        <div className="d-flex align-items-center mb-3">
          <img 
            src={project.logoUrl} 
            alt={`${project.projectName} logo`}
            className="rounded me-3"
            style={{width: '48px', height: '48px', objectFit: 'cover'}}
          />
          <div className="flex-grow-1">
            <h5 className="card-title mb-1 fw-semibold text-dark">{project.projectName}</h5>
            <p className="text-primary fw-medium mb-0 small">{project.associatedCompany}</p>
          </div>
        </div>
        <p className="text-muted small lh-base mb-0">
          {project.description}
        </p>
      </div>
    </div>
  );

  return project.url ? (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
    >
      {CardContent}
    </a>
  ) : (
    CardContent
  );
};

export default ProjectCard;
