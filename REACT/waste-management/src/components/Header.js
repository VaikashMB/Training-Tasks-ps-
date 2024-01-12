import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { usernameState } from "../states/atom"
import { useRecoilValue } from 'recoil';


function Header() {

  const username = useRecoilValue(usernameState)

  return (
    <Navbar expand="lg" className="navbar-dark" style={{ backgroundColor: 'darkgreen' }}>
      <Container>
        <Navbar.Brand href="#home"><img src='https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlufGVufDB8fDB8fHww' alt="logo" className='logoimg' height={40} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"  >
            <NavLink to="/" style={{ color: 'black' }}>Home</NavLink>
            <NavLink to="/schedule" style={{ color: 'black' }}>Schedule</NavLink>
            <NavLink to="/services" style={{ color: 'black' }}>Services</NavLink>
            <NavLink to="/about" style={{ color: 'black' }}>About</NavLink>
            <NavLink to="/login" style={{ color: 'black' }}>Login</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='navtext'>
            Welcome <a href='user'>{username}</a>
          </Navbar.Text>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;