import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

const SuccessRequestModal = ({ message }) => {
  const [successMessage, setMessage] = useState("");

  //   const SuccessResponse = () => {
  //     if (message) {
  //       setMessage(message);
  //     } else {
  //       return null;
  //     }
  //   };

  //   useEffect(() => {
  //     SuccessResponse();
  //   }, [SuccessResponse]);

  return (
    <div className='Overlay-alert'>
      <Alert
        onClick={(e) => e.stopPropagation()}
        variant='success'
        className='alert text-center shadow text-bold'>
        <strong className='text-light'>{message}</strong>
        <div className='alert-icon'>
          <i className='zmdi zmdi-close-circle'></i>
        </div>
      </Alert>
    </div>
  );
};

export default SuccessRequestModal;
