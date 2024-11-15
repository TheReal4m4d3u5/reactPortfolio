import React from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import '../styles/navigationStyles.css';

const Navigation = ({ isOpen }) => {
  const location = useLocation();
  const currentPage = location.pathname;
  console.log('Menu asdf asdf adstoggled:', !isOpen); 
  return (
    <nav className={`navigation ${isOpen ? 'open' : ''}`}>
      <Link to="/about" className={currentPage === '/about' ? 'active' : ''}>About</Link>
      <Link to="/contact" className={currentPage === '/contact' ? 'active' : ''}>Contact</Link>
      <Link to="/portfolio" className={currentPage === '/portfolio' ? 'active' : ''}>Portfolio</Link>
      <Link to="/resume" className={currentPage === '/resume' ? 'active' : ''}>Resume</Link>
    </nav>
  );
};

export default Navigation;