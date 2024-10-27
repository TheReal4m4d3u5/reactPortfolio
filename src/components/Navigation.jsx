import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Navigation = ({ activePage }) => {

  const [activeSection, setActiveSection] = useState(activePage);

  const renderSection = () => {

    switch (activePage) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
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