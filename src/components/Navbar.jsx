import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'bg-white shadow' : 'bg-transparent'}`}>
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#hero">
          Ilyas Ahmed
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className="nav-link text-dark fw-medium"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
