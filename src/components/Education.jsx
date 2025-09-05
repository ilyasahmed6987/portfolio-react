import React from 'react';
import EducationCard from './EducationCard';
import { educationData } from '../mockData';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <h2 className="display-4 fw-bold text-dark mb-3">
            Education
          </h2>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            My academic journey and educational background that shaped my career in technology.
          </p>
        </div>
        
        <div className="row g-4">
          {educationData.map((education, index) => (
            <div key={index} className="col-md-6 fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <EducationCard education={education} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
