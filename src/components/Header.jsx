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
      <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
        
              <section className="nameHeader">
                {name}
              </section>

              <section className="linksHeader">

                <Navbar.Collapse id="basic-navbar-nav" className="">
                  <Nav className="d-flex gap-3 justify-content-end">
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
                  </Nav>
                </Navbar.Collapse>
              </section>
   
        
      </Navbar>

      <Navigation activePage={currentPage} />
    </>
  );
};

export default Header;