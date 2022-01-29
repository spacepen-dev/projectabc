import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
const VerificationModal = ({ message, close, svg }) => {
  return ReactDOM.createPortal(
    <div className='Overlay-alert' onClick={close}>
      <div
        className='Modal verify-modal d-flex flex-column align-items-center justify-content-between'
        onClick={(e) => e.stopPropagation()}>
        <div>{svg}</div>
        <h3 className='ms-5'>{message}</h3>
        <div className='w-100'>
          <Button className='ms-auto d-block px-4 py-2' onClick={close}>
            OK
          </Button>
        </div>
      </div>
    </div>,
    document.querySelector("#verified")
  );
};

export default VerificationModal;
