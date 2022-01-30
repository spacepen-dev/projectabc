import React, { useState } from "react";
import ModalContainer from "./ModalContainer";

const ViewEmployeeModal = ({ modal, initialValue }) => {
  return (
    <>
      <ModalContainer
        closeModal={modal}
        buttonText='Save'
        display='true'
        initialValue={initialValue}
      />
    </>
  );
};

export default ViewEmployeeModal;
