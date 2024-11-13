import React from 'react';
import '../styles/resumeStyles.css';
import resume from '../assets/AveryJacobson.pdf'

const Resume = () => {
  return (


    <div className="resume-page">
      <section className='mainResumeContent'>

        <div className="resumeLinks">
          <a href={resume} download="Avery_Jacobson_Resume.pdf" className="link-button">
            Resume
          </a>
          <a href="https://www.linkedin.com/in/avery-jacobson-aa36225a/" target="_blank" rel="noopener noreferrer" className="link-button">
            LinkedIn
          </a>
        </div>


        <section className="professional-section">

          <h3 className='resumeHeaders'>Professional Summary</h3>
          <section className='professinalText'>
            <p>I have worked as a senior software engineer as a SDET for the last 10 years</p>

          </section>
        </section>

        <div class="skills-container">
          <div class="skill-item">Programming Languages</div>
          <div class="skill-item">Tools & Technologies</div>
          <div class="skill-item">Hardware</div>
        </div>



        <h3 className='coreSkills'>Core Skills</h3>


        <section className="education-ection">
          <h3 className='resumeeaders'>Education</h3>
          <ul>
            <li>Associates from Normandale Community college in computer science</li>
            <li>Associates from Normandale Community college in Foundations of Engineering in Electrical Engineering</li>
            <li>Associates from ITT Tech in Computer Science</li>
            <li>Certifications: SQL certificate from Normandale, Developer Certificate from the University of Minnesota.</li>
            <li>Ongoing Learning: Taking classes at Metro State in Computer Science.</li>
          </ul>
        </section>


        <section className="professional-section">
          <h3 className='resumeHeaders'>Professoinal Experience</h3>
          <ul>
            <li>Worked the last four years as a senior software Engineer for Wells Fargo as a sdet</li>
          </ul>
        </section>

        <section className="contact-section">
          <h3 className='resumeHeaders'>Contact</h3>
          <li>Email Address: averyajacobson@gmail.com</li>
          <li>Phone Number: 952-594-9290</li>
          <li>Location: Minneapolis Minnesota or Remote</li>
        </section>

        <section className="hobbies-section">
          <h3 className='resumeHeaders'>Interests and Hobbies</h3>
          <ul>
            <li>I like to play guitar and walk my dog.</li>
          </ul>
        </section>
      </section>


    </div>
  );
};

export default Resume;