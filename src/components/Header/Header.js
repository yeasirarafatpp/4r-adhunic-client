import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/" style={{ textDecoration: 'none', color: 'grey' }}>
                        4R Adhunik Hospital
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link style={{ textDecoration: 'none', color: 'grey' }} to="/about">About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link style={{ textDecoration: 'none', color: 'grey' }} to="/service">Service</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link style={{ textDecoration: 'none', color: 'grey' }} to="/doctors">Doctors</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link style={{ textDecoration: 'none', color: 'grey' }} to="/contact">Contact Us</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;