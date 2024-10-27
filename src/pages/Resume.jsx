import React from 'react';
import '../../resumeStyles.css';

const Resume = () => {
  return (
    <div className="resume-page">
       <div className="resumeLinks">
        <a href="/path/to/your-resume.pdf" download="Avery_Jacobson_Resume.pdf" className="link-button">
          Resume
        </a>
        <a href="https://www.linkedin.com/in/avery-jacobson-aa36225a/" target="_blank" rel="noopener noreferrer" className="link-button">
          LinkedIn
        </a>
      </div>


      <section className="professional-section">
        <h3>Professional Summary</h3>
        <ul>
          <li>Brief Overview: A short paragraph (2-3 sentences) about who you are professionally.</li>
          <li>Highlight Skills: Mention your core skills and areas of expertise.
          </li>
          <li>Career Goals: Briefly describe what you're looking to achieve in your career.</li>
        </ul>
      </section>


      <h3 className='coreSkills'>Core Skills</h3>

      <section className="skills-section">

        <section className="programming-section">
          <h3>Programming Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>C++</li>
            <li>HTML & CSS</li>

          </ul>
        </section>

        <section className="tools-section">
          <h3>Tools & Technologies</h3>
          <ul>
            <li>Mention relevant tools, like Git, Docker, CI/CD pipelines, etc.</li>

          </ul>
        </section>

        <section className="hardware-section">
          <h3>Hardware</h3>
          <ul>
            <li>PC Workstation</li>
            <li>MacBook Pro</li>
            <li>Raspberry Pi</li>
            <li>Arduino</li>
            {/* Add other hardware here */}
          </ul>
        </section>
      </section>

      <section className="education-section">
        <h3>Education</h3>
        <ul>
          <li>Formal Education: University degrees or technical school diplomas.</li>
          <li>Certifications: List relevant certifications like "Certified AWS Developer," "Google Analytics Certified," or courses completed on platforms like Coursera or Udacity.</li>
          <li>Ongoing Learning: Mention any courses you're currently taking to improve your skills.</li>
        </ul>
      </section>


      <section className="professional-section">
        <h3>Professoinal Experience</h3>
        <ul>
          <li>Work History: List previous roles, including job title, company name, and dates of employment.</li>
          <li>Responsibilities & Achievements: Summarize what you achieved or contributed in each role (focus on measurable outcomes if possible).</li>
        </ul>
      </section>

      <section className="contact-section">
        <h3>Contact</h3>
        <ul>
          <li>Email Address: An easy way for potential collaborators or employers to reach out.</li>
          <li>Phone Number: Optional, but many prefer it for direct communication.</li>
          <li>Location: General area (e.g., "San Francisco Bay Area" or "Remote").</li>
        </ul>
      </section>

      <section className="hobbies-section">
        <h3>Interests and Hobbies</h3>
        <ul>
          <li>Personal Interests: Shows personality and creates a connection beyond your technical skills.</li>
        </ul>
      </section>

    </div>
  );
};

export default Resume;