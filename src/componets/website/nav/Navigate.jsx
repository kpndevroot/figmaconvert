import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navigate.css";
function Navigate() {
  return (
    <Navbar className="navigate" variant="light" expand="lg">
      <Container>
        <Navbar.Brand className="brand-name">D.books</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse style={{ width: "100vw" }} id="navbarScroll">
          <Nav
            // style={{ maxHeight: "100px" }}
            className="linkContainer"
            navbarScroll
          >
            <Nav.Link className="nav-links" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-links" href="#aboutus">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigate;
