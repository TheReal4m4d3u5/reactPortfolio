import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';




const Footer = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="w-100" style={{ width: '100%' }}>
        <Container fluid className="d-flex justify-content-between align-items-center">
          {/* Left-aligned brand name */}
          <Navbar.Brand href="#home" style={{ color: 'white', textDecoration: 'none' }}>
            This is my footer
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  );
};

export default Footer;