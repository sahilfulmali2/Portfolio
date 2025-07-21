// src/components/Project4.jsx
import React from "react";
import styles from "../components/Projects.module.css"; // Use the same CSS module

const Project4 = () => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img 
          src="https://placehold.co/600x400/0d1117/00e676?text=Shoppi+E-commerce" 
          alt="Shoppi E-commerce Project"
          className={styles.projectImage}
        />
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>Shoppi: E-commerce Platform</h3>
        <p className={styles.projectDescription}>
          A full-stack e-commerce app with real-time bidding and user messaging, featuring secure RESTful APIs and role-based access control for 100+ concurrent users.
        </p>
        <div className={styles.techStack}>
          {/* List the technologies used for this project */}
          <span>React</span>
          <span>Node.js</span>
          <span>Socket.io</span>
          <span>MongoDB</span>
          <span>Express.js</span>
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

export default Project4;
