// TODO: Create a `name` variable

const name = "Avery Jacobson";

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React

const thoughts = 'react is awesome';


function Navbar() {
  return (
    <div className="main-container">
      <div className="container">
        
        <div className="p-5 mb-4 bg-light">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {name}</h1>
        </div>


      </div>
    </div>
  );
}

export default Navbar;
