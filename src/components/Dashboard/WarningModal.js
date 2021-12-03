import React from "react";
import { Alert } from "react-bootstrap";

const WarningModal = ({ closeWarning, errorMessage }) => {
  return (
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
    </div>
  );
};

export default WarningModal;
