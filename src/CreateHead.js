import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CreateHead = () => {
  return (
    <div id="create-head">
      <Container>
        <Row>
          <Col className="text-center py-5">
            <h1 className="display-4">Create </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus saepe hic omnis, dolor repellat dolorum.
            </p>
            <Button href="#" variant="outline-light">
              Find Out More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateHead;
