import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import explore from "./img/explore-section1.jpg";

const ExploreSection = () => {
  return (
    <div id="explore-section" className="bg-light text-muted py-5">
      <Container>
        <Row>
          <Col md={6}>
            <Image src={explore} alt="" fluid mb={3} roundedCircle />
          </Col>
          <Col md={6}>
            <h3>Explore & Connect</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur numquam vero illum similique officia cupiditate?
            </p>
            <div className="d-flex">
              <div className="p-4 align-self-start">
                <i className="fas fa-check fa-2x"></i>
              </div>
              <div className="p-4 align-self-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                distinctio iusto, perspiciatis mollitia natus harum?
              </div>
            </div>

            <div className="d-flex">
              <div className="p-4 align-self-start">
                <i className="fas fa-check fa-2x"></i>
              </div>
              <div className="p-4 align-self-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                distinctio iusto, perspiciatis mollitia natus harum?
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExploreSection;
