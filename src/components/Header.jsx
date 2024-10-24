import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../.././styles.css'; 

const name = "Avery Jacobson";



// GIVEN a single-page application portfolio for a web developer
// WHEN I load the portfolio
// THEN I am presented with a page containing a header, a section for content, and a footer
// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default



const Header = ({ setActiveSection }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      {/* className="ms-4" margin start bootstrap using 12 colums to span the width of the page bootstrap is expecting a container then row and then column as a format, ps- padding start*/}
      <Container fluid className="ps-5">
        <Navbar.Brand className="col-4" href="#">My Portfolio</Navbar.Brand>
        <Navbar.Brand id="headerName" className="col-4 ps-15" href="#home">{name}</Navbar.Brand>
         <div className="col-4 pe-5">
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav navbarCollapse"> 
            <Nav className="ms-auto">
              <Nav.Link href="#about" onClick={() => setActiveSection('about')}>
                About Me
              </Nav.Link>
              <Nav.Link href="#projects" onClick={() => setActiveSection('projects')}>
                Portfolio
              </Nav.Link>
              <Nav.Link href="#contact" onClick={() => setActiveSection('contact')}>
                Contact
              </Nav.Link>
              <Nav.Link href="#resume" onClick={() => setActiveSection('resume')}>
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div> 
        
      </Container>
    </Navbar>
  );
};


export default Header;
