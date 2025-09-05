import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-vh-100 d-flex align-items-center justify-content-center" style={{background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)'}}>
      <div className="container text-center">
        <div className="fade-in">
          <h1 className="display-2 fw-bold text-dark mb-4">
            Hi, I'm <span className="text-primary">Ilyas Ahmed</span>
          </h1>
          <h2 className="h3 text-muted mb-4 fw-medium">
            AI and ML | Full Stack Developer | UI/UX Engineer
          </h2>
          <p className="lead text-muted mb-5 mx-auto" style={{maxWidth: '600px'}}>
            Passionate about creating beautiful, functional, and user-centered digital experiences 
            that make a difference in people's lives.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary btn-lg px-4 py-3 fw-semibold shadow"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-outline-primary btn-lg px-4 py-3 fw-semibold"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
