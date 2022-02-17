import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import EditEmployee from "./EditEmployee";

import EmployeeRegistration from "./EmployeeRegistration";

const ModalContainer = ({ closeModal, buttonText, display, initialValue }) => {
  const close = () => {
    closeModal();
  };

  return ReactDOM.createPortal(
    <div className="Overlay" onClick={close}>
      <Container className="Modal" onClick={(e) => e.stopPropagation()}>
        <EditEmployee
          buttonText={buttonText}
          close={close}
          initialValue={initialValue}
        />
      </Container>
    </div>,
    document.querySelector("#modal")
  );
};
export default ModalContainer;
