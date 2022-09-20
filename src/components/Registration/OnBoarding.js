import React from "react";

// import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OnBoardingSVG } from "../Dashboard/svg/SVG";

const OnBoarding = () => {
  return (
    <div className='onboard-div'>
      <h5 className='onboard-h5'>Business Onboarding</h5>
      <OnBoardingSVG />
      <p className='paid-success onboard-p'>
        We are setting up your business, Kindly add the departments in your
        business.
      </p>
      <div className=''>
        <Link
          to='/add-roles'
          type='button'
          className='button next onboard-button justify-content-center align-items-center'>
          Continue
        </Link>
      </div>
    </div>
  );
};

export default OnBoarding;
