import React from 'react';
import profilePhoto from '../assets/myPhoto.jpg'; // Ensure this path matches where your image is stored
// import '../../aboutStyles.css';

const About = () => {
    return (
      <section id="about" className="container mt-5 about-page">
 
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img src={profilePhoto} alt="Profile" className="profile-photo mb-4" />
          </div>
          <div className="col-md-8">
            <p>
              Hi, I'm Avery Jacobson! I have been a senior software engineer as an SDET for 10 years. 
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;