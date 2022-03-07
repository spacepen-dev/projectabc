import React from "react";
import { Alert } from "react-bootstrap";

const SuccessRequestModal = ({ message }) => {
  return (
    <div className='Overlay-alert'>
      <Alert
        onClick={(e) => e.stopPropagation()}
        variant='success'
        className='alert text-center shadow text-bold'>
        <strong className='text-success'>{message}</strong>
        <div className='alert-icon'>
          <i className='zmdi zmdi-close-circle'></i>
        </div>
      </Alert>
    </div>
  );
};

export default SuccessRequestModal;
