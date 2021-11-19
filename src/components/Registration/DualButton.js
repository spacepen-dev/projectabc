import React from "react";
import { Button } from "react-bootstrap";

const DualButton = ({ back, next, prev, submit }) => {
  return (
    <div className='button-container double-btns d-flex align-items-end'>
      <Button type='button' className='button ms-auto ' onClick={prev}>
        {back}
      </Button>
      <Button type='submit' className='button ms-4' onClick={submit}>
        {next}
      </Button>
    </div>
  );
};

export default DualButton;
