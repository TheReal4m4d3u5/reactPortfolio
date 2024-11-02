import React from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from 'react-router-dom';
import './styles/styles.css';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
   
          <Outlet />
  
        <Footer class="footer" />
      </div>
    </>
  );
}


export default App;