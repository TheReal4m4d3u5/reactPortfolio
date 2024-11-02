import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navigationStyles.css';


const Navigation = () => {

  const currentPage = useLocation().pathname;

  return (

    <div className="nav nav-tabs">

          <p className="nav-item">
            <Link
              to="/About"
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}
            >
              About
            </Link>
          </p>
          <p className="nav-item">
            <Link
              to="/Contact"
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </p>
          <p className="nav-item">
            <Link
              to="/Portfolio"
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </Link>
          </p>
          <p className="nav-item">
            <Link
              to="/Resume"
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Link>
          </p>
        </div>

  );

};

export default Navigation;