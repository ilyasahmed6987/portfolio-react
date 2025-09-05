import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '../mockData';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <h2 className="display-4 fw-bold text-dark mb-3">
            Experience
          </h2>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            My professional journey and the companies where I've contributed to meaningful projects.
          </p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="timeline">
              {experienceData.map((experience, index) => (
                <div key={index} className="fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <ExperienceCard 
                    experience={experience} 
                    index={index} 
                    total={experienceData.length} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
