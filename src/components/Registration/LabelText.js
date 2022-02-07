import React from "react";
import { FormText } from "react-bootstrap";

const LabelText = ({ name, label }) => {
  return (
    <span className='d-flex flex-column justify-content-center align-items-start bg-transparent'>
      <label className='pb-0 w-100 fs-5 text-bold '>{name}</label>
      <FormText className='w-100 mb-2 border-0 fs-6 sub-text'>{label}</FormText>
    </span>
  );
};

export default LabelText;
