import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const token = localStorage.getItem('token');  
  const navigate = useNavigate();

  const handleLogout = () => {  
    localStorage.removeItem('token');  
    navigate("/login");
  }

  return (
      <>
        <Navbar bg={token ? "primary" : "dark"} variant="navbar-dark">
          <Container>
            <Navbar.Brand as={Link} to="">
              {token ? "Logged-In" : "Not Logged-In"}
            </Navbar.Brand>
            <Nav className="ml-auto">
              {token ? (
                  <>
                    <Nav.Link as={Link} to="/dashboard" className="nav-link">Dashboard</Nav.Link>
                    <Nav.Link className="nav-link" onClick={handleLogout}>Logout</Nav.Link>
                  </>
              ) : (
                  <>
                    <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
                    <Nav.Link as={Link} to="/signup" className="nav-link">Signup</Nav.Link>
                  </>
              )}
            </Nav>
          </Container>
        </Navbar>
      </>
  );
}

export default Header;
