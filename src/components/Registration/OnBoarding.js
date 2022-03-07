import React from "react";

// import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import OnBoardingSVG from "./OnBoardingSVG";

const OnBoarding = () => {
  return (
    <div className='onboard-div'>
      <h5 className='onboard-h5'>DEPARTMENTS IN YOUR ORGANIZATION</h5>
      <OnBoardingSVG />
      <p className='paid-success onboard-p'>
        You haven't addded any department to your company profile.
      </p>
      <div className=''>
        <Link
          to='/add-roles'
          type='button'
          className='button next onboard-button justify-content-center align-items-center'>
          ADD
        </Link>
      </div>
    </div>
  );
};

export default OnBoarding;
