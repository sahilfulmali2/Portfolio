import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.info}>
          <p className={styles.copyrightText}>
            &copy; {currentYear} | Designed & Built by Sahil Fulmali
          </p>
          <a href="mailto:sfulmali2907n@gmail.com" className={styles.emailLink}>
            sfulmali2907n@gmail.com
          </a>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/sahil_fulmali7" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className={styles.socialLink}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://x.com/Sahil_Fulmali7?t=JYT-h93KNsqETjP3wUQPVw&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className={styles.socialLink}>
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
