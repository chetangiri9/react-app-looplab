import React from "react";
import { Card, Form, Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div id="home-section">
      <div className="dark-overlay">
        <Container className="home-inner">
          <Row>
            <Col className="lg-8 d-none d-lg-block">
              <h1>Build social profiles and gain revenue profits</h1>

              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                  tempore iusto in minima facere dolorem!
                </div>
              </div>

              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                  tempore iusto in minima facere dolorem!
                </div>
              </div>

              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                  tempore iusto in minima facere dolorem!
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <Card bg="primary" className="text-center" Form>
                <Card.Body>
                  <h3>Sign Up Today</h3>
                  <p>Please fill out this form to register</p>
                  <Form>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </Form.Group>
                    <Button variant="outline-light" type="submit" active>
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
