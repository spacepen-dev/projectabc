import React, { useEffect, useState } from "react";
import { Form, ProgressBar } from "react-bootstrap";

const AddEmployeeForm = ({ currentForm }) => {
  const [active, setActive] = useState("active");
  const [progress, setProgress] = useState("33%");

  useEffect(() => {
    setActive("active");
    if (currentForm === 2) {
      setProgress("67%");
    } else if (currentForm === 3) {
      setProgress("100%");
    } else if (currentForm === 1) {
      setProgress("33%");
    }
  }, [currentForm]);

  return (
    <div>
      <div className='d-flex flex-column align-items-center'>
        <div className='range-container'>
          <div className='d-flex justify-content-evenly align-items-center w-100'>
            <div className='p-3 d-flex flex-column justify-content-center align-items-center'>
              <Form.Label>Profile</Form.Label>
            </div>
            <small className='d-inline-block'></small>
            <div className='p-3 d-flex flex-column justify-content-center align-items-center'>
              <Form.Label>Salary</Form.Label>
            </div>
            <small className='d-inline-block'></small>
            <div className='p-3 d-flex flex-column justify-content-center align-items-center'>
              <Form.Label>Account</Form.Label>
            </div>
          </div>
          <div className='progress'>
            <ProgressBar animated now={100} style={{ width: `${progress}` }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
