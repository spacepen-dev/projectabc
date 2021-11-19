import React from "react";
import { Form, FormText } from "react-bootstrap";

const LabelText = ({ name, label }) => {
  return (
    <span className='d-flex flex-column justify-content-center align-items-start bg-transparent'>
      <Form.Label
        sm='2'
        className='pb-0 w-100 '
        style={{
          fontSize: "1.5rem",
          lineHeight: "1.8rem",
          // marginBottom: "0.5rem",
        }}>
        {name}
      </Form.Label>
      <FormText className='w-100 pb-1 mb-2 border-0 fs-8 lh-2 sub-text'>
        {label}
      </FormText>
    </span>
  );
};

export default LabelText;
