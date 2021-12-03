import React from "react";
import ReactDOM from "react-dom";
import { Spinner } from "react-bootstrap";

const LoaderModal = () => {
  return ReactDOM.createPortal(
    <div className='Overlay-alert'>
      <div className='Modal loader-modal'>
        <Spinner
          as='span'
          className='bg-transparent spinner'
          animation='border'
          size='lg'
        />
      </div>
    </div>,
    document.querySelector("#verified")
  );
};

export default LoaderModal;
