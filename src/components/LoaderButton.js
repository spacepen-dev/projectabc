import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";

const Loaderbutton = ({ btnName, request, style, spinnerStyle }) => {
  return (
    <>
      <Button
        type='submit'
        className={`button ${style}`}
        disabled={request ? true : false}>
        {request ? (
          <Spinner
            as='span'
            className={`${spinnerStyle}`}
            animation='border'
            size='lg'
          />
        ) : (
          btnName
        )}
      </Button>
    </>
  );
};

export default Loaderbutton;
