// src/components/Project2.jsx
import React from "react";
import styles from "../components/Projects.module.css"; // Use the same CSS module

const Project2 = () => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img 
          src="https://placehold.co/600x400/0d1117/00e676?text=Blogging+Platform" 
          alt="Blogging Platform Project"
          className={styles.projectImage}
        />
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>Blogging Platform</h3>
        <p className={styles.projectDescription}>
          A full-stack MERN application where users can register, log in, and perform CRUD operations on blog posts, with secure authentication to protect user data.
        </p>
        <div className={styles.techStack}>
          {/* List the technologies used for this project */}
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
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

export default Project2;
