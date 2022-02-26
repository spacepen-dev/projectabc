import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const NetWorkErrors = ({ errMessage, serverErr }) => {
  const [networkErr, setErr] = useState("");
  const networkMessage = () => {
    if (errMessage) {
      setErr(`${errMessage}. Check Your Internet Connection And Try Again.`);
    } else if (serverErr) {
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
        className='alert text-center shadow text-bold'>
        <strong>{networkErr}</strong>
        <div className='alert-icon'>
          <i className='zmdi zmdi-close-circle'></i>
        </div>
      </Alert>
    </div>
  );
};

export default NetWorkErrors;
