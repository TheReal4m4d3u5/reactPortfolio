import React from 'react';
import '../../resumeStyles.css';

const Resume = () => {
  return (
    <div className="resume-page">
      <h2>Resume</h2>
      <p>
        <a href="/path/to/your-resume.pdf" download="Avery_Jacobson_Resume.pdf" className="resume-download">
          Download My Resume
        </a>
      </p>

      <section className="resume-section">
        <h3>Programming Languages</h3>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>C++</li>
          <li>HTML & CSS</li>
          {/* Add other languages here */}
        </ul>
      </section>

      <section className="resume-section">
        <h3>Hardware</h3>
        <ul>
          <li>PC Workstation</li>
          <li>MacBook Pro</li>
          <li>Raspberry Pi</li>
          <li>Arduino</li>
          {/* Add other hardware here */}
        </ul>
      </section>

      <section className="resume-section">
        <h3>LinkedIn</h3>
        <p>
          <a href="https://www.linkedin.com/in/avery-jacobson-aa36225a/" target="_blank" rel="noopener noreferrer">
            Connect with me on LinkedIn
          </a>
        </p>
      </section>
    </div>
  );
};

export default Resume;