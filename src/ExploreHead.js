import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const ExploreHead = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center py-5">
          <h1 className="display-4">Explore</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea commodi
            omnis voluptatum recusandae deserunt magni, atque molestiae incidunt
            ducimus suscipit.
          </p>
          <Button href="#" variant="outline-secondary">
            Find Out More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ExploreHead;
