import React from 'react';

const EducationCard = ({ education }) => {
  return (
    <div className="card h-100 shadow-sm card-hover border-0">
      <div className="card-body p-4">
        <div className="d-flex align-items-center mb-3">
          <img 
            src={education.logoUrl} 
            alt={`${education.universityName} logo`}
            className="rounded me-3"
            style={{width: '48px', height: '48px', objectFit: 'cover'}}
          />
          <div>
            <h5 className="card-title mb-1 fw-semibold text-dark">{education.degree}</h5>
            <p className="text-primary fw-medium mb-0">{education.universityName}</p>
          </div>
        </div>
        <div>
          <span className="badge bg-primary bg-opacity-10 text-white px-3 py-2 fw-medium">
            {education.passingYear}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
