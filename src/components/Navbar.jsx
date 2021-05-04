import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import {Link} from 'react-router-dom';

const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">BenCine</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">Accueil</Link>
          <Link to="/films">Films</Link>
          <Link to="/séries">Séries</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar>
    </div>
  );
};
export default Navigationbar;