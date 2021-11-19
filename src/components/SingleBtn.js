import React from "react";
import { Button } from "react-bootstrap";

const SingleBtn = ({ children }) => {
  return (
    <>
      <Button type='submit' className='button'>
        {children}
      </Button>
    </>
  );
};

export default SingleBtn;
