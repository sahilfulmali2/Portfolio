import React from 'react';
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    // The main container for the About Me section
    <section className={styles.aboutSection} id="AboutME">
      <div className={styles.aboutContainer}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.contentWrapper}>
  
  {/* Row 1: Image + Bio */}
  <div className={styles.topRow}>
    <div className={styles.imageWrapper}>
      <img 
        src="/assets/PROFILE2.jpg" 
        alt="Sahil Fulmali" 
        className={styles.profileImage}
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x600/1a1a1a/ffffff?text=Image+Not+Found'; }}
      />
    </div>

    <div className={styles.textWrapper}>
      <p className={styles.bio}>
        I'm a dedicated MERN stack developer who loves building clean, user-friendly, and scalable web applications. With a strong grip on MERN Stack, Data Structures , Object Oriented Programming and C++, I bring ideas to life — from dynamic e-commerce platforms to smart solutions like EV charger locators and alumni networking sites.
      </p>
      <p className={styles.bio}>
        I thrive on writing clean code, solving real-world problems, and constantly leveling up my skills. Currently deep-diving into Java and sharpening my edge with the DSA , I'm always on the lookout for my next challenge.
      </p>
      <p className={styles.bio}>
        When I'm not coding, you can find me exploring the latest tech trends, playing video games, or enjoying a good book. Let's connect and create something amazing together!
      </p>
      <div className={styles.links}>
        <a href="https://github.com/sahilfulmali2" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sahil-fulmali/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://leetcode.com/u/sahil_fulmali7/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile">
    {/* Note: Font Awesome doesn't have a specific LeetCode icon, so 'fa-code' is used as a substitute. */}
    <i className="fas fa-code"></i> 
  </a>
      </div>
    </div>
  </div>

  {/* Row 2: Education */}
  <div className={styles.educationWrapper}>
    <h3 className={styles.heading}>Education</h3>
    <div className={styles.content}>
      <div className={styles.row}>
        <p className={styles.degree}>
          B.Tech, Computer Science & Engineering
        </p>
        <p className={styles.year}>
          2021 – 2025
        </p>
      </div>
      <p className={styles.college}>
        Government College of Engineering, Amravati
      </p>
    </div>
  </div>

</div>

      </div>
    </section>
  );
};

export default AboutMe;
