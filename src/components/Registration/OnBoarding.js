import React from "react";
import { Container } from "react-bootstrap";
import SVG from "./SVG";
import { Link } from "react-router-dom";
const OnBoarding = () => {
  return (
    <Container className='onboarding-container'>
      <div className='d-flex align-items-center'>
        <h3>DEPARTMENTS/ROLES IN YOUR ORGANIZATION</h3>
      </div>
      <div className='svg-container d-flex justify-content-center align-items-center mx-auto'>
        <SVG />
      </div>

      <div className='d-flex justify-content-center align-items-center'>
        <h3>
          You haven’t added any department or role to your company profile.
        </h3>
      </div>
      <div className='button-container mx-auto d-flex justify-content-center align-items-center'>
        <Link
          to='/add-roles'
          className='button ms-4 next d-flex justify-content-center align-items-center'>
          ADD
        </Link>
      </div>
    </Container>
  );
};

export default OnBoarding;
