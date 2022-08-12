import React from "react";
import { Container } from "react-bootstrap";
import { ErrorNumber } from "./Dashboard/svg/SVG";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <Container fluid className='error-cont'>
      <div>
        <ErrorNumber />
        <h2 className='error-oops'>Oops!</h2>
        <p className='error-msg'>
          Sorry, we are unable to find this page. I think something went wrong.
        </p>
        <Link to='/' className='error-btn text-white py-3 '>
          Go Home
        </Link>
      </div>
    </Container>
  );
};

export default NoPage;
