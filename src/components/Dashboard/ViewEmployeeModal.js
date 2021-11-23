import React, { useState } from "react";
import ModalContainer from "./ModalContainer";

const ViewEmployeeModal = ({ modal }) => {
  return (
    <>
      <ModalContainer closeModal={modal} buttonText='Save' />
    </>
  );
};

export default ViewEmployeeModal;
