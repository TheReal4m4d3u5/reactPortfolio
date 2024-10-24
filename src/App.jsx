import React from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Navigation from './components/Navigation.jsx';

import About from "./pages/About.jsx";
import Contact from './pages/Contact.jsx';
import Portfolio from "./pages/Portfolio.jsx";
import Resume from "./pages/Resume.jsx";

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>
    <Header/>
    <Navigation/>
    {/* <About/>
    <Portfolio/>
    <Contact/> */}
    <Footer/>  
    </>
    )
    
}

export default App;