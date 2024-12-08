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
            <div className="aboutText">
              <div> Software Developer & Electrical Engineer</div>
              <div>Hi, I'm Avery Jacobson!</div>
               I am a Full Stack Developer with 10 years Experience as senior Software Development Engineer in Test (SDET).
            </div>
          </section>  
        </div>


    </section>
  );
};

export default About;