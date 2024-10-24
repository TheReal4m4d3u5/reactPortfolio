// TODO: Create a `name` variable

const name = "Avery Jacobson";

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React




function Header() {
  return (
    <div className="main-container">
      <div className="container-fluid">
        <div className="p-5 mb-4 bg-light">
          <h1>{name}</h1>
          <h2>My name has {name.length} letters</h2>

        </div>
      </div>

      <div className="container-fluid">
        <div className="p-5 mb-4 bg-light">
          <h1>{name}</h1>
          <h2>My name has {name.length} letters</h2>
        </div>
      </div>
    </div>
  );
}




export default Header;
