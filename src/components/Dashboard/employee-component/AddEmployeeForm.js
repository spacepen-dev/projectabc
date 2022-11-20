import React, { useEffect, useState } from "react";
import { Form, ProgressBar } from "react-bootstrap";

const AddEmployeeForm = ({ currentForm }) => {
  // const [active, setActive] = useState("active");
  const [progress, setProgress] = useState("25%");

  useEffect(() => {
    if (currentForm === 2) {
      setProgress("50%");
    } else if (currentForm === 3) {
      setProgress("75%");
    } else if (currentForm === 4) {
      setProgress('100%')
    } else if (currentForm === 1) {
      setProgress("25%");
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
              <Form.Label>Pension</Form.Label>
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
