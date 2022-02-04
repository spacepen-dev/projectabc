import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const FormHeader = ({ currentForm }) => {
  const [active, setActive] = useState("active");

  useEffect(() => {
    setActive("active");
  }, []);
  return (
    <div className='d-flex flex-column align-items-center'>
      <div className='w-100 formHeading'>
        <h3 className='text-center'>SET UP YOUR COMPANY ACCOUNT</h3>
      </div>
      <div className='py-3 range-container'>
        <div className='d-flex justify-content-evenly align-items-center w-100'>
          <div className='p-3 d-flex flex-column justify-content-center align-items-center'>
            <Form.Label>Profile</Form.Label>
            <span
              className={`d-inline-block rounded-circle mt-2 ${
                currentForm === 1 ? active : active
              }`}
              id='profile'></span>
          </div>
          <small className='d-inline-block'></small>
          <div className='p-3 d-flex flex-column justify-content-center align-items-center'>
            <Form.Label>Contact</Form.Label>
            <span
              className={`d-inline-block rounded-circle mt-2  ${
                currentForm === 2 || currentForm === 3 ? active : ""
              }`}
              id='contact'></span>
          </div>
          <small className='d-inline-block'></small>
          <div className='p-3 d-flex flex-column justify-content-center align-items-center'>
            <Form.Label>Finish</Form.Label>
            <span
              className={`d-inline-block rounded-circle mt-2  ${
                currentForm === 3 ? active : ""
              }`}
              id='settings'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
