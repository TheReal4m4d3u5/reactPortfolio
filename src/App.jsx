import React from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";



// function App() {
//   return (
//     <div id="root">
//       <Header />

//     </div>
//   );
// }


function App() {
  return (
    <div id="root">
      <Header />
      <div className="main-content">
        {/* Add main content like About, Portfolio, etc. */}
      </div>
      <Footer />
    </div>
  );
}


export default App;