import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navigate.css";
function Navigate() {
  return (
    <Navbar className="navigate" variant="light">
      <Container>
        <Navbar.Brand className="brand-name">D.books</Navbar.Brand>
        <Nav className="d-flex linkContainer">
          <Nav.Link className="nav-links" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="nav-links" href="#home">
            About Us
          </Nav.Link>
          <Nav.Link className="nav-links" href="#features">
            Features
          </Nav.Link>
          <Nav.Link className="nav-links" href="#pricing">
            Plans
          </Nav.Link>
          <Nav.Link className="nav-links" href="#pricing">
            Contact Us
          </Nav.Link>
          <Nav.Link className="nav-links">
            <Button className="nav-button" size="lg">
              Sign In
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigate;
