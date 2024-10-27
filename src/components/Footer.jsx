import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../footerStyles.css';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100" style={{ width: '100%' }}>
      <section className="links">
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/avery-jacobson-aa36225a/" target="_blank" rel="noopener noreferrer" className="link-button">
            LinkedIn
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/TheReal4m4d3u5" target="_blank" rel="noopener noreferrer" className="link-button">
            GitHub
          </a>
        </div>
      </section>
    </Navbar>
  );
};

export default Footer;