import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Pharmacy app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/my-account">My account</Link>
                <Link to="/cart"><i class="bi bi-cart"></i></Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Header;