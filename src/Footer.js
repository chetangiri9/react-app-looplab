import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Contact from "./Modal";

class Footer extends React.Component {
  render() {
    return (
      <Container id="main-footer">
        <Row>
          <Col className="text-center py-4">
            <h3>LoopLAB </h3>
            <p>
              Copyright &copy;
              <span id="year"></span>
            </p>
            <Button
              variant="primary"
              data-toggle="modal"
              data-target="#contactModal"
            >
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
