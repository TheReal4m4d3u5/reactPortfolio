import { Navbar, Nav, Container } from 'react-bootstrap';

// TODO: Create a `name` variable

const name = "Avery Jacobson";

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React

const thoughts = 'react is awesome';


const Footer = ({ setActiveSection }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      {/* className="ms-4" margin start bootstrap using 12 colums to span the width of the page bootstrap is expecting a container then row and then column as a format, ps- padding start*/}
      <Container fluid className="ps-5">
        <Navbar.Brand className="col-4" href="#"></Navbar.Brand>
        <Navbar.Brand id="headerName" className="col-4 ps-15" href="#home"></Navbar.Brand>
         <div className="col-4 pe-5">
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        </div> 
      </Container>
    </Navbar>
  );
};

export default Footer;
