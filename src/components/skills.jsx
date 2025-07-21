// src/components/Skills.jsx
import React from 'react';
import styles from './skills.module.css';

// An array of your skills. This makes it easy to add or remove skills later.
const skillsList = [
  { name: 'C++', icon: 'fas fa-code' },
  { name: 'Java', icon: 'fas fa-coffee' },
  
  { name: 'JavaScript', icon: 'fab fa-js-square' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'Data Structures', icon: 'fas fa-database' },
{ name: 'MongoDB', icon: 'fas fa-database' },
{ name: 'Express.js', icon: 'fas fa-server' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  
  
  { name: 'MySQL', icon: 'fas fa-database' },
  { name: 'HTML5', icon: 'fab fa-html5' },
  { name: 'CSS3', icon: 'fab fa-css3-alt' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'GitHub', icon: 'fab fa-github' },
  { name: 'REST APIs', icon: 'fas fa-cogs' },
  
  { name: 'Socket.IO', icon: 'fas fa-plug' },
  { name: 'OOP', icon: 'fas fa-project-diagram' }
];

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="Skills">
      <div className={styles.skillsContainer}>
        <h2 className={styles.sectionTitle}>My Tech Stack</h2>
        <div className={styles.skillsGrid}>
          {skillsList.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <i className={`${skill.icon} ${styles.skillIcon}`}></i>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
