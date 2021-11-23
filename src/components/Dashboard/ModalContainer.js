import React from "react";
import ReactDOM from "react-dom";
import EmployeeRegistration from "./EmployeeRegistration";
import { Container } from "react-bootstrap";

const ModalContainer = ({ closeModal, buttonText }) => {
  const close = () => {
    closeModal();
  };

  return ReactDOM.createPortal(
    <div className='Overlay'>
      <Container className='Modal' onClick={(e) => e.stopPropagation()}>
        <EmployeeRegistration buttonText={buttonText} close={close} />
      </Container>
    </div>,
    document.querySelector("#modal")
  );
};
export default ModalContainer;
