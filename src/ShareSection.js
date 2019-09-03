import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import share from "./img/share-section1.jpg";

const ShareSection = () => {
  return (
    <div id="share-section" class="bg-light text-muted py-5">
      <Container>
        <Row>
          <Col md={6}>
            <Image src={share} alt="" fluid mb={3} roundedCircle />
          </Col>
          <Col md={6}>
            <h3>Share What You Create</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              reiciendis, voluptate at alias laborum odit aliquid tempore
              perspiciatis repudiandae hic?
            </p>
            <div class="d-flex">
              <div class="p-4 align-self-start">
                <i class="fas fa-check fa-2x"></i>
              </div>
              <div class="p-4 align-self-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                distinctio iusto, perspiciatis mollitia natus harum?
              </div>
            </div>

            <div class="d-flex">
              <div class="p-4 align-self-start">
                <i class="fas fa-check fa-2x"></i>
              </div>
              <div class="p-4 align-self-end">
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

export default ShareSection;
