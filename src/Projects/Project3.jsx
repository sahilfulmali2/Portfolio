// src/components/Project3.jsx
import React from "react";
import styles from "../components/Projects.module.css"; // Use the same CSS module

const Project3 = () => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img 
          src="https://placehold.co/600x400/0d1117/00e676?text=Alumni+Meet" 
          alt="Alumni Meet Website Project"
          className={styles.projectImage}
        />
      </div>
      <div className={styles.projectInfo}>
        
        <p className={styles.projectDescription}>
          An interactive platform for a college alumni event, featuring user registration, event schedules, and a secure payment gateway for tickets and donations.
        </p>
        <div className={styles.techStack}>
          {/* List the technologies used for this project */}
          <span>React</span>
          <span>Node.js</span>
          <span>Payment Gateway</span>
        </div>
        <div className={styles.projectLinks}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            <i className="fas fa-code"></i> Source Code
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project3;
