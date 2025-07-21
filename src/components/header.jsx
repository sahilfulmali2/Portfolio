// Header.js
// I've renamed the file/component to "Header.js" to follow React conventions.

import React, { useState, useEffect } from 'react';
import styles from "./header.module.css";

// The sections of your page. Make sure the IDs match exactly in your main content.
const SECTIONS = ['Home', 'AboutME', 'Projects', 'Contact'];

const Header = () => {
  // State to control navbar visibility
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // State to track the active section
  const [activeSection, setActiveSection] = useState('Home');

  // This function controls the hide/show behavior
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) { // if scroll down & past 100px
        setVisible(false);
      } else { // if scroll up
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  // This function checks which section is in view
  const handleScrollSpy = () => {
    const headerOffset = 150; // Offset to trigger the highlight sooner
    let currentSection = '';

    SECTIONS.forEach(sectionId => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop - headerOffset;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSection = sectionId;
        }
      }
    });

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  };


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        controlNavbar();
        handleScrollSpy();
      };

      window.addEventListener('scroll', handleScroll);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY, activeSection]);


  return (
    // Conditionally apply the 'navbarHidden' class based on the 'visible' state
    <header className={`${styles.navbar} ${visible ? '' : styles.navbarHidden}`}>
      <nav className={styles.navbar_contain}>
        <div className={styles.lists}>
          <ul>
            {/* Map over the sections to create the list items dynamically */}
            {SECTIONS.map(sectionId => (
              <li
                key={sectionId}
                // Apply the 'active' class if the section is the current active one
                className={activeSection === sectionId ? styles.active : ''}
              >
                <a href={`#${sectionId}`}>{sectionId.replace(/([A-Z])/g, ' $1').trim()}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;