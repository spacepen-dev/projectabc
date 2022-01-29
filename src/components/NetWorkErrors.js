import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const NetWorkErrors = ({ errMessage, serverErr, removeLoader }) => {
  const [networkErr, setErr] = useState("");
  const networkMessage = () => {
    // removeLoader();
    if (errMessage) {
      setErr(`${errMessage}. Check Your Internet Connection And Try Again.`);
    } else if (serverErr) {
      console.log(serverErr);
      setErr(serverErr);
    } else {
      return null;
    }
  };

  useEffect(() => {
    networkMessage();
  }, [networkErr]);

  return (
    <div className='Overlay-alert'>
      <Alert
        onClick={(e) => e.stopPropagation()}
        variant='danger'
        className='alert text-center shadow text-bold'
        // dismissible
      >
        <strong>{networkErr}</strong>
        <div className='alert-icon'>
          <i className='zmdi zmdi-close-circle'></i>
        </div>
      </Alert>
    </div>
  );
};

export default NetWorkErrors;
