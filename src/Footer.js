import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center py-5">
          <h3>LoopLAB </h3>
          <p>
            Copyright &copy;
            <span id="year"></span>
          </p>
          <Button variant="primary">Contact Us</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
