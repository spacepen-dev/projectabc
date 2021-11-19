import React from "react";
import ReactDOM from "react-dom";
import { Modal, Button } from "react-bootstrap";

const ModalContainer = (props) => {
  return ReactDOM.createPortal(
    <Modal centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary'>Close</Button>
        <Button variant='primary'>Save changes</Button>
      </Modal.Footer>
    </Modal>,
    document.querySelector("#modal")
  );
};
export default ModalContainer;
