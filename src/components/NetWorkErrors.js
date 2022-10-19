import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const NetWorkErrors = ({ errMessage, serverErr }) => {
  const [networkErr, setErr] = useState("");

  console.log(serverErr);
  useEffect(() => {
    if (errMessage) {
      setErr(`${errMessage}. Check Your Internet Connection And Try Again.`);
    } else if (serverErr) {
      setErr(serverErr);
    } else {
      return;
    }
  }, [errMessage, serverErr]);

  return (
    <div className = "layer d-flex justify-content-center align-items-center">
    <div className='Overlay-alert' >
      <Alert
        onClick={(e) => e.stopPropagation()}
        variant='danger'
        className='alert text-center shadow text-center '>
          
        <strong>{networkErr}</strong>
        <div className='alert-icon '>
          <i className='zmdi zmdi-close-circle '></i>
        </div>
      </Alert>
    </div>
    </div>
  );
};

export default NetWorkErrors;
