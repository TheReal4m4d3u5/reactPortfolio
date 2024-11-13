import React from 'react';
import profilePhoto from '../assets/myPhoto.jpg'; // Ensure this path matches where your image is stored

import '../styles/aboutStyles.css';


const About = () => {
  return (


    <section id="about" className="container mt-5">

      <div className="content">

        <div className="about">
          <img src={profilePhoto} alt="Profile" className="profilePhoto mb-4" />
          <div className="col-md-4 text-center">
          </div>
          <section className="aboutTextSection">
            <div className="aboutText">

              Hi, I'm Avery Jacobson! I have been a senior software engineer as a SDET for 10 years.

            </div>
          </section>
        </div>
      </div>
    </section>

  );
};

export default About;