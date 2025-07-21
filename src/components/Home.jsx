// src/components/Home.jsx
import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    // The main container for the Home section. No extra wrappers needed.
    <section className="home-section" id="Home">
      <h1 className="main-heading">
        Hi, I'm Sahil.
      </h1>
      <h2 className="sub-heading">
        I build things for the web.
      </h2>
      <p className="description">
        A passionate Web Developer focused on creating modern, 
        interactive, and user-friendly digital experiences.
      </p>
      <div className="cta-buttons">
        <a href="/path/to/your/resume.pdf" className="cta-button primary" download>
          Download Resume
        </a>
        <a href="#Contact" className="cta-button secondary">
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default Home;