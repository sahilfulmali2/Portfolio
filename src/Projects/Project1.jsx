// src/components/Project1.jsx
import React from "react";
import styles from "../components/Projects.module.css"; // We use the same CSS module

const Project1 = () => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img 
          src="https://placehold.co/600x400/0d1117/00e676?text=Crime+Analyzer" 
          alt="Crime Rate Analyzer Project"
          className={styles.projectImage}
        />
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>Crime Rate Analyzer</h3>
        <p className={styles.projectDescription}>
          A machine learning model using socioeconomic data to forecast crime rates, helping decision-makers focus on preventive measures in vulnerable areas.
        </p>
        <div className={styles.techStack}>
          {/* List the technologies used for this project */}
          <span>Python</span>
          <span>Pandas</span>
          <span>Scikit-learn</span>
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

export default Project1;
