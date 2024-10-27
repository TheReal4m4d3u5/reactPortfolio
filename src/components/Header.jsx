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
      <Navbar bg="dark" variant="dark" expand="lg" className="header" style={{ width: '100%' }}>
        <section className="headerName">
          <div >
            Avery Jacobson
          </div>
        </section>
        <section className="headerLinks">
          <div className="github">
            <Nav.Link href="#about" onClick={() => setActiveSection('about')} className={currentPage === 'about' ? 'active' : ''}>
              About Me
            </Nav.Link>
            <Nav.Link href="#projects" onClick={() => setActiveSection('portfolio')} className={currentPage === 'projects' ? 'active' : ''}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="#contact" onClick={() => setActiveSection('contact')} className={currentPage === 'contact' ? 'active' : ''}>
              Contact
            </Nav.Link>
            <Nav.Link href="#resume" onClick={() => setActiveSection('resume')} className={currentPage === 'resume' ? 'active' : ''}>
              Resume
            </Nav.Link>
          </div>
        </section>




      </Navbar>

      <Navigation activePage={currentPage} />
    </>
  );
};

export default Header;