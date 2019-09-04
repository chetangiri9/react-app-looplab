import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class Top extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div data-spy="scroll" data-target="#Top" id="home">
        <Navbar
          collapseOnSelect
          bg="dark"
          expand="sm"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand href="#home">LoopLAB</Navbar.Brand>
          <Navbar.Toggle
            onClick={this.toggle}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse
            isOpen={this.state.isOpen}
            id="responsive-navbar-nav"
          >
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#explore-head-section">Explore</Nav.Link>
              <Nav.Link href="#create-head-section">Create</Nav.Link>
              <Nav.Link href="#share-head-section">Share</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Top;
