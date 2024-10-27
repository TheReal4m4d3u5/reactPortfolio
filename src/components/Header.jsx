import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Navigation from './Navigation';
import '../.././navigationStyles.css';

const name = "Avery Jacobson";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("about");

  const setActiveSection = (page) => {
    setCurrentPage(page); 
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="w-100" style={{ width: '100%' }}>
        <Container fluid className="d-flex justify-content-between align-items-center">
          {/* Left-aligned brand name */}
          <Navbar.Brand href="#home" style={{ color: 'white', textDecoration: 'none' }}>
            {name}
          </Navbar.Brand>


          {/* Right-aligned navigation links */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="d-flex gap-3">
              <Nav.Link href="#about" onClick={() => setActiveSection('about')} className={currentPage === 'about' ? 'active' : ''}>
                About Me
              </Nav.Link>
              <Nav.Link href="#projects" onClick={() => setActiveSection('projects')} className={currentPage === 'projects' ? 'active' : ''}>
                Portfolio
              </Nav.Link>
              <Nav.Link href="#contact" onClick={() => setActiveSection('contact')} className={currentPage === 'contact' ? 'active' : ''}>
                Contact
              </Nav.Link>
              <Nav.Link href="#resume" onClick={() => setActiveSection('resume')} className={currentPage === 'resume' ? 'active' : ''}>
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navigation activePage={currentPage} />
    </>
  );
};

export default Header;