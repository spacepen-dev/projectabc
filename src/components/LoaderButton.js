import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";

const Loaderbutton = ({ btnName, request, btnStyle, spinnerStyle }) => {
  return (
    <>
      <Button
        type='submit'
        className={`button ${btnStyle}`}
        disabled={request ? true : false}>
        {request ? (
          <Spinner
            as='span'
            className={`${spinnerStyle}`}
            animation='border'
            size='sm'
          />
        ) : (
          btnName
        )}
      </Button>
    </>
  );
};

export default Loaderbutton;
