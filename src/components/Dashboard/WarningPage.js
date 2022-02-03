import React from "react";
import Triangle from "./svg/Triangle";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const WarningPage = () => {
  return (
    <main>
      <div className='success-content '>
        <div className='d-flex flex-column align-items-center justify-content-center h-75 w-75'>
          <Triangle />
          <h2>Oops!</h2>
          <p>you've never pay any employees</p>
          <Button type='button '>pay employees</Button>
        </div>
      </div>
    </main>
  );
};

export default WarningPage;
