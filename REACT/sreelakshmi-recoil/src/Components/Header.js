import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='evolve' href="#home">EVOLVE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='navlink'>Home</NavLink>
            <NavLink to="/Login" className='navlink'>Login</NavLink>
            <NavLink to="/About" className='navlink'>About</NavLink>
            <NavLink to="/Post" className='navlink'>Post</NavLink>
            <NavLink to="/CandidateInfo" className='navlink'>CandidateInfo</NavLink>
            <NavLink to="/Assesment" className='navlink'>Assesment</NavLink>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;