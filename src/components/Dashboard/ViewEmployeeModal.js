import React from "react";
import ModalContainer from "./ModalContainer";

const ViewEmployeeModal = ({ closeModal, initialValue }) => {
  return (
    <>
      <ModalContainer
        closeModal={closeModal}
        buttonText='Save'
        display='true'
        initialValue={initialValue}
      />
    </>
  );
};

export default ViewEmployeeModal;
