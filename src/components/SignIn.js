import React, { useState, useEffect } from "react";
import { Container, Spinner, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../Actions";

import Header from "./Header";
import VerificationModal from "./Dashboard/VerificationModal";

const SignIn = ({ signIn, accountEmail, logIN }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [request, setRequest] = useState(false);
  const [success, setSuccess] = useState("");

  const onInputChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (!accountEmail) {
      return null;
    }
    setEmail(accountEmail.data.accountEmail);
  }, [accountEmail]);

  const OtpResponse = ({ data }) => {
    setRequest(false);

    const { error, success } = data;
    if (error) {
      setError(error);
    } else if (success) {
      setSuccess(success);
      navigate("/login/otp");
    }
  };

  useEffect(() => {
    if (!logIN) {
      return null;
    }
    OtpResponse(logIN);
  }, [logIN]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    let regexp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regexp.test(String(email).toLowerCase())) {
      // MAKE AN API REQUEST TO CHECK IF THE EMAIL IS REGISTERED
      // OBTAIN THE COMPANY DETAILS
      // console.log(email);
      signIn(email);
      setError("");
      setRequest(true);
    } else {
      setError("Correct email address must be provided.");
    }
  };

  const closeModal = () => {
    setSuccess("");
    // navigate("/");
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
          <Button
            type='submit'
            className='button'
            disabled={request ? true : false}>
            {request ? (
              <Spinner as='span' animation='border' size='lg' />
            ) : (
              "SUBMIT"
            )}
          </Button>
        </div>
        <div className='py-4 mt-3 w-75 ms-5 fs-3 text-center'>
          Don't have an account?{" "}
          <Link to='/registration/company' className='fs-4'>
            <h3>Register Here</h3>
          </Link>
        </div>
      </form>
      {!success ? null : (
        <VerificationModal message={`${success}`} close={closeModal} />
      )}

      {/* {!error ? null : (
        <WarningModal closeWarning={close_reload} errorMessage={error} />
      )} */}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    accountEmail: state.RegistrationReducer.otp,
    logIN: state.RegistrationReducer.signIN,
  };
};

export default connect(mapStateToProps, { signIn })(SignIn);
