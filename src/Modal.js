import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="fade text-dark" id="contactModal">
      <Modal.Dialog>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>Contact Us</Modal.Title>
            <Button className="close" data-dismiss="modal">
              <span>&times;</span>
            </Button>
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
    </div>
  );
};

export default Contact;
