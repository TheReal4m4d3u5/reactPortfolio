import React from 'react';
import profilePhoto from '../assets/myPhoto.jpg'; // Ensure this path matches where your image is stored

import '../styles/aboutStyles.css';


const About = () => {
  return (


    <section id="aboutHome">


      <div className="about">
        <section className="photoSection">
          <img src={profilePhoto} alt="Profile" className="profilePhoto mb-4" />
        </section>

        <section className="aboutTextSection">
          <div className="aboutTextWraper">
            <div className="aboutTextHeader"> Software Developer & Electrical Engineer</div>
            <div className="aboutText">
              Hi, I'm Avery Jacobson! My passion for software and electrical engineering stems from a deep curiosity about how technology powers the world around us. With over a decade of experience as a Software Development Engineer in Test (SDET) and Full Stack Developer, I've cultivated a diverse skill set that bridges coding, automation, and hardware integration. I've developed robust applications, streamlined CI/CD pipelines, and optimized testing frameworks with tools like Selenium, Appium, and Jenkins. I thrive on solving complex challenges, crafting scalable solutions, and pushing the boundaries of technology to deliver reliable, high-quality results. My journey reflects blending the best of software development and electrical engineering into every project I pursue.
            </div>

          </div>
        </section>
      </div>


    </section>
  );
};

export default About;