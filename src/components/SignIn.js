import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import SingleBtn from "./SingleBtn";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onInputChange = (e) => {
    setEmail(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    let regexp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regexp.test(String(email).toLowerCase())) {
      // MAKE AN API REQUEST TO CHECK IF THE EMAIL IS REGISTERED
      // OBTAIN THE COMPANY DETAILS
      console.log(email);
      setError("");
    } else {
      setError("Correct email address must be provided.");
    }
  };
  return (
    <Container id='signin'>
      <Header />
      <div className='heading-container'>
        <h2>Welcome Back.</h2>
        <h3>Login to your account</h3>
      </div>
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Email Address</label>
          <p>Enter the official email-address of your company</p>
          <div>
            <input
              type='text'
              placeholder='mail@company.com'
              autoComplete='true'
              value={email}
              onChange={onInputChange}
            />
            <div className=' text-danger fs-4 mt-3 pb-0'>
              {error === "" ? "" : `${error}`}
            </div>
          </div>
        </div>
        <div className='button-container d-flex justify-content-center align-items-end'>
          <SingleBtn>SUBMIT</SingleBtn>
          <div className='py-3 mx-3'>
            or{" "}
            <Link to='/registration/company' className='fs-4'>
              Register Here
            </Link>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default SignIn;
