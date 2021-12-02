import React from "react";
import ReactDOM from "react-dom";
import { Modal, ModalBody } from "react-bootstrap";
import Verification from "./svg/Verification";

const VerificationModal = ({ closeWarning, errorMessage }) => {
  return ReactDOM.createPortal(
    <div className='Overlay-alert' onClick={closeWarning}>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      {/* <Alert
        onClick={(e) => e.stopPropagation()}
        variant='danger'
        className='alert'
        dismissible
        onClose={closeWarning}>
        <Alert.Heading
          className='alert-heading
        '>
          {errorMessage}
        </Alert.Heading>
      </Alert> */}
    </div>,
    document.querySelector("#verified")
  );
};

export default VerificationModal;
