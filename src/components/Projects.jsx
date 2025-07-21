// src/components/Projects.jsx
import React from "react";
import Slider from "react-slick";
import styles from "./Projects.module.css";

// Import individual project components
import Project1 from "../Projects/Project1";
import Project2 from "../Projects/Project2";
import Project3 from "../Projects/Project3";
import Project4 from "../Projects/Project4";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
  // Slider settings for a clean, modern carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 projects on desktop
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 1,
          dots: false, // Hide dots on mobile for a cleaner look
        },
      },
    ],
  };

  return (
    <div className={styles.projectSection} id="Projects">
      <div className={styles.projectContainer}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <div className={styles.projectList}>
          <Slider {...settings}>
            {/* Each project is a slide */}
            <Project1 />
            <Project2 />
            <Project3 />
            <Project4 />
            {/* You can add more projects here */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Project;
