import React from "react";
import { Button, Spinner } from "react-bootstrap";

const SingleBtn = ({ children }) => {
  return (
    <>
      <Button type='submit' className='button'>
        <Spinner as='span' animation='border' size='lg' />
        {children}
      </Button>
    </>
  );
};

export default SingleBtn;
