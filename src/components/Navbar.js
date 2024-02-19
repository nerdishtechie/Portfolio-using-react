import React from 'react';

const Navbar = ({ onSectionClick }) => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        
       <a href="#about" onClick={() => onSectionClick('about')}>About Me</a>
       <a href="#skills" onClick={() => onSectionClick('skills')}>Skills</a>
        <a href="#projects" onClick={() => onSectionClick('projects')}>Projects</a>
       <a href="#resume" onClick={() => onSectionClick('resume')}>Resume</a>
        <a href="#contact" onClick={() => onSectionClick('contact')}>Contact Me</a>
        
      </div>
    </nav>
  );
}

export default Navbar;
