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

        <Navbar.Brand href="#home" className="headerName">
          Avery Jacobson

        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      
            <Navigation className="" activePage={currentPage} />
  
        </Navbar.Collapse>


      </Navbar >


    </>
  );
};

export default Header;