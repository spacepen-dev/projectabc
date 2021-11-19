import React from "react";
import LabelText from "./LabelText";

import { Col, Form } from "react-bootstrap";

const InputField = ({
  input,
  label,
  type,
  meta: { touched, error },
  inputname,
}) => {
  // console.log(error);
  return (
    <div className='mb-3'>
      <Col sm='10'>
        <LabelText name={inputname} label={label} />
        <Form.Control
          {...input}
          type={type}
          name={input.name}
          inputname={inputname}
          className={`w-100 border-1 registration-input rounded-1 px-2 border-1 fs-4`}
        />

        {touched && error && (
          <div className=' text-danger fs-4 mt-3 pb-0'>{error}</div>
        )}
      </Col>
    </div>
  );
};

export default InputField;
