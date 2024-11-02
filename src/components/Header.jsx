import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Navigation from './Navigation';
import '../styles/navigationStyles.css';

const name = "Avery Jacobson";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("about");

  const setActiveSection = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="header" >

        <section className="headerName">
          <div >
            Avery Jacobson
          </div>
        </section>
        {/* <Navbar.Collapse >
            <Nav className="headerLinks">
              <Nav.Link href="#about" onClick={() => setActiveSection('about')} className={currentPage === 'about' ? 'active' : ''}>
                About Me
              </Nav.Link>
              <Nav.Link href="#portfolio" onClick={() => setActiveSection('portfolio')} className={currentPage === 'portfolio' ? 'active' : ''}>
                Portfolio
              </Nav.Link>
              <Nav.Link href="#contact" onClick={() => setActiveSection('contact')} className={currentPage === 'contact' ? 'active' : ''}>
                Contact
              </Nav.Link>
              <Nav.Link href="#resume" onClick={() => setActiveSection('resume')} className={currentPage === 'resume' ? 'active' : ''}>
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse> */}

        <section id="basic-navbar-nav"  className="headerName justify-content-end headerLinks">
          <div >
            <Navigation className="" activePage={currentPage} />
          </div>
        </section>


      </Navbar>


    </>
  );
};

export default Header;