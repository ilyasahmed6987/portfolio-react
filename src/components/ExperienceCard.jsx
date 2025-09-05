import React from 'react';

const ExperienceCard = ({ experience, index, total }) => {
  return (
    <div className="position-relative mb-4">
      {/* Timeline line */}
      {index < total - 1 && (
        <div className="position-absolute" style={{left: '24px', top: '64px', width: '2px', height: '100%', backgroundColor: '#e9ecef'}}></div>
      )}
      
      <div className="d-flex">
        {/* Timeline dot */}
        <div className="flex-shrink-0 d-flex align-items-center justify-content-center bg-primary rounded-circle me-4" style={{width: '48px', height: '48px'}}>
          <img 
            src={experience.logoUrl} 
            alt={`${experience.companyName} logo`}
            className="rounded-circle"
            style={{width: '32px', height: '32px', objectFit: 'cover'}}
          />
        </div>
        
        {/* Content */}
        <div className="flex-grow-1 card shadow-sm card-hover border-0">
          <div className="card-body p-4">
            <h5 className="card-title fw-semibold text-dark mb-2">{experience.designation}</h5>
            <p className="text-primary fw-medium mb-3">{experience.companyName}</p>
            {/* <span className="badge bg-light text-dark px-3 py-2">
              {experience.tenure}
            </span> */}
            <span className="badge bg-primary bg-opacity-10 text-white px-3 py-2 fw-medium">
              {experience.tenure}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
