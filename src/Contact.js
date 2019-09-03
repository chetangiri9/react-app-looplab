import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <Modal.Dialog>
      <Modal.Content>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label for="name">Name</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label for="email">Email</Form.Label>
              <Form.Control type="email"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label for="message">Message</Form.Label>
              <Form.Control type="textarea"></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" block>
            Submit
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Dialog>
  );
};

export default Contact;
