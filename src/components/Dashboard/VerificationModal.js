import React from "react";
import ReactDOM from "react-dom";
import Verification from "./svg/Verification";

const VerificationModal = ({ message, close }) => {
  return ReactDOM.createPortal(
    <div className='Overlay-alert' onClick={close}>
      <div
        className='Modal verify-modal d-flex align-items-center'
        onClick={(e) => e.stopPropagation()}>
        <div>{Verification()}</div>
        <h3 className='ms-5'>{message}</h3>
      </div>
    </div>,
    document.querySelector("#verified")
  );
};

export default VerificationModal;
