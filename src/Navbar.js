import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Top = () => {
  return (
    <div>
      <Navbar collapseOnSelect bg="dark" expand="sm" variant="dark" fixed="top">
        <Navbar.Brand href="#home">LoopLAB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Explore">Explore</Nav.Link>
            <Nav.Link href="#Create">Create</Nav.Link>
            <Nav.Link href="#Link">Share</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Top;
