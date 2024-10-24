import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import About from '../pages/About';
import Home from '../pages/Home';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {

    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };



  return (
    <Container className="my-5">
      {renderSection()}
    </Container>
  );

};

export default Navigation;