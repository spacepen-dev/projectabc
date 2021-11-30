import React from "react";
import ReactDOM from "react-dom";
import { Alert } from "react-bootstrap";

const WarningModal = ({ closeWarning, errorMessage }) => {
  return ReactDOM.createPortal(
    <div className='Overlay-alert' onClick={closeWarning}>
      <Alert
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
      </Alert>
    </div>,
    document.querySelector("#modal")
  );
};

export default WarningModal;
