import React from "react";
import { FormText } from "react-bootstrap";

const DashBoardText = ({ name, label }) => {
  return (
    <span className='d-flex flex-column justify-content-center align-items-start bg-transparent'>
      <label
        className='pb-0 w-100 '
        style={{
          fontSize: "0.98rem",
          lineHeight: "1.5rem",
        }}>
        {name}
      </label>
      <FormText className='w-100 border-0 sub-text'>{label}</FormText>
    </span>
  );
};

export default DashBoardText;
