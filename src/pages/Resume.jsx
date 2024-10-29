import React from 'react';
import '../styles/resumeStyles.css';
import resume from '../assets/AveryJacobson.pdf'  

const Resume = () => {
  return (
    <div className="resume-page">
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


      <section className='allSkills'>

        <h3 className='coreSkills'>Core Skills</h3>


        <section className='toolsHeader'>

          <h3>Programming Languages</h3>

          <h3> Tools & Technologies</h3>

          <h3>Hardware</h3>
        </section>


        <section className='skills'>

          <section className="programming-section">
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>C++</li>
              <li>HTML & CSS</li>
            </ul>
          </section>

          <section className="tools-section">
            <ul>
              <li>Git, CI/CD pipelines</li>
            </ul>
          </section>

          <section className="hardware-section">

            <ul>
              <li>PC Workstation</li>
              <li>MacBook Pro</li>
              <li>Raspberry Pi</li>
              <li>Arduino</li>
            </ul>
          </section>
        </section>


      </section>
      <section className="education-section">
        <h3 className='resumeHeaders'>Education</h3>
        <ul>
          <li>Associates from IIT Tech in computer science</li>
          <li>Associates from Normandale Community college in computer science</li>
          <li>Associates from Normandale Community college in Foundations of Engineering in Electrical Engineering</li>
          <li>Certifications: SQL certificate from Normandale, Developer Certificate from the University of Minnesota Coursera or Udacity.</li>
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

    </div>
  );
};

export default Resume;