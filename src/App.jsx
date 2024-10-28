import React from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import './styles/styles.css';


function App() {
  return (
    <div id="root">
      <div className="wrapper">
      <Header />
      <div className="main-content">
        {/* Add main content like About, Portfolio, etc. */}
        
      </div>
      
      </div>
      <Footer class="footer"/>
    </div>
  );
}


export default App;