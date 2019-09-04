import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const ShareHead = () => {
  return (
    <div id="share-head-section">
      <Container>
        <Row>
          <Col className="text-center py-5">
            <h1 className="display-4">Share</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
              voluptatibus quae, voluptas quibusdam sequi ipsa reiciendis
              repudiandae natus commodi.
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

export default ShareHead;
