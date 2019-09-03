import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import create from "./img/create-section1.jpg";

const CreateSection = () => {
  return (
    <div id="create-section" className="py-5">
      <Container>
        <Row>
          <Col md={6} order={2}>
            <Image src={create} alt="" fluid mb={3} roundedCircle />
          </Col>
          <Col md={6} order={1}>
            <h3>Create Your Passion</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo
              eligendi commodi magnam unde incidunt.
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

export default CreateSection;
