// TODO: Create a `name` variable

const name = "Avery Jacobson";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React



function Portolio() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {name}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {name.length} letters</h2>
  
        </div>
      </div>
    </div>
  );
}

export default Portolio;

