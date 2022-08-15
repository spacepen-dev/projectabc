import React, { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../Actions";
import { CompanyDetails } from "../Actions";

import Header from "./Header";
import VerificationModal from "./Dashboard/VerificationModal";
import Loaderbutton from "./LoaderButton";
import NetWorkErrors from "./NetWorkErrors";

const SignIn = ({ signIn, accountEmail, logIN, errMessage }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ dataErr: "", inputErr: "" });
  const [request, setRequest] = useState(false);
  const [success, setSuccess] = useState("");
  const [errStore, setStore] = useState(false);
  const [errorMessage, setMessage] = useState(false);

  const onInputChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (!accountEmail) {
      return null;
    }
    setEmail(accountEmail.data.accountEmail);
  }, [accountEmail]);

  const OtpResponse = useCallback(
    ({ data }) => {
      setRequest(false);
      const { error, success } = data;

      if (error) {
        setError({ dataErr: error });
        const removeTimeOut = setTimeout(() => {
          setStore(false);
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      } else if (success) {
        // localStorage.setItem("aminien_token", success.token);
        const successMessage = success.split(":")[1];
        setSuccess(successMessage);
        navigate("/login/otp");
      }
    },
    [navigate]
  );

  useEffect(() => {
    if (!errMessage) {
      return null;
    }
    setStore(true);
    setMessage(errMessage);
    setRequest(false);
    const removeTimeOut = setTimeout(() => {
      setMessage("");
      setStore(false);
    }, 4000);
    return () => {
      clearTimeout(removeTimeOut);
    };
  }, [errMessage]);

  useEffect(() => {
    if (!logIN) {
      return null;
    }
    OtpResponse(logIN);
  }, [logIN, OtpResponse]);

  useEffect(() => {
    if (error.dataErr) {
      setStore(true);
    } else {
      return null;
    }
  }, [error.dataErr]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    let regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regexp.test(String(email).toLowerCase())) {
      // MAKE AN API REQUEST TO CHECK IF THE EMAIL IS REGISTERED
      // OBTAIN THE COMPANY DETAILS
      signIn(email);
      localStorage.setItem("aminien_email", email);
      setError({ inputErr: "" });
      setRequest(true);
    } else {
      setError({ inputErr: "Correct email address must be provided." });
    }
  };

  const closeModal = () => {
    setSuccess("");
  };

  return (
    <Container id='signin' className='mx-auto w-75'>
      {/* //     <Container id='signin' className='mx-auto d-flex flex-column a w-75'> */}

      <Header>
        <div className='signIn-header'>
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
                  onFocus={() => setError({ inputErr: "" })}
                />
                <div className=' text-danger fs-6 mt-3 pb-4'>
                  {error.inputErr && `${error.inputErr}`}
                </div>
              </div>
            </div>
            <div className='button-register-div'>
              <div className='button-container d-flex justify-content-center align-items-end'>
                <Loaderbutton btnName='SUBMIT' request={request} />
              </div>
              <div className='py-4 mt-3 w-75 mb-3 fs-6 text-center'>
                Don't have an account?
                <Link
                  to='/registration/company'
                  className='d-inline-block ms-2 fs-6 text-decoration-none '>
                  Register Here
                </Link>
              </div>
            </div>
          </form>
          {success && (
            <VerificationModal message={`${success}`} close={closeModal} />
          )}
          {/* {error.dataErr && (
            <VerificationModal
              message={`${error.dataErr}`}
              close={closeModal}
            />
          )} */}
          {errStore && (
            <NetWorkErrors
              // message={error.dataErr}
              errMessage={errorMessage.message}
              serverErr={error.dataErr}
              // close={() => {
              //   setStore(null);
              // }}
              // removeLoader={() => setRequest(false)}
            />
          )}
        </div>
      </Header>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    accountEmail: state.RegistrationReducer.otp,
    logIN: state.RegistrationReducer.signIN,
    errMessage: state.RegistrationReducer.signErr,
  };
};

export default connect(mapStateToProps, { signIn, CompanyDetails })(SignIn);
