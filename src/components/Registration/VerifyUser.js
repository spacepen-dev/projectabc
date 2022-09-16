import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useRef } from "react";
import Header from "../Header";
import Loaderbutton from "../LoaderButton";
import { useReducer } from "react";
import axios from "axios";

const init = {
  request: false,
  error: false,
  message: "",
  success: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST":
      return { ...state, request: action.payLoad };
    case "SUCCESS_RESPONSE":
      return {
        ...state,
        request: false,
        success: true,
        message: action.payLoad,
      };
    case "ERROR_RESPONSE":
      return {
        request: false,
        success: false,
        error: true,
        message: action.payLoad,
      };
    default:
      return state;
  }
};

const VerifyUser = () => {
  const [state, dispatch] = useReducer(reducer, init);

  const navigate = useNavigate();
  const emailRef = useRef("");

  const onInputChange = (e) => {
    emailRef.current = e.target.value;
  };

  function onFormSubmit(e) {
    e.preventDefault();
    // console.log(emailRef.current);
    APIREQUEST();
    dispatch({ type: "REQUEST", payLoad: true });
  }

  async function APIREQUEST() {
    const res = await axios.post(
      "https://apws.spacepen.tech/verifyAccount.php",
      {
        companyEmail: emailRef.current,
      }
    );

    if (res.status === 200) {
      let { error, success, token, accountEmail } = res.data;
      if (error) {
        dispatch({ type: "ERROR_RESPONSE", payLoad: error });
      } else if (success) {
        dispatch({ type: "SUCCESS_RESPONSE", payLoad: success });
        localStorage.setItem("aminien_token", token);
        localStorage.setItem("aminien_email", accountEmail);

        navigate("/on-boarding");
      }
    }
  }

  return (
    <Container id='signin' className='mx-auto w-75'>
      {/* //     <Container id='signin' className='mx-auto d-flex flex-column a w-75'> */}
      <Header>
        <div className='signIn-header'>
          <div className='heading-container'>
            {/* <h2>Welcome </h2> */}
            <h3>
              Enter Your Registered Email Address or Phone Number to get
              Verified
            </h3>
          </div>
          <form onSubmit={onFormSubmit}>
            <div>
              <label>Email Address</label>
              <p>Enter company email address / phone number</p>

              <div>
                <input
                  type='text'
                  placeholder='mail@company.com'
                  autoComplete='false'
                  required
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className='button-register-div'>
              <div className='button-container d-flex justify-content-center align-items-end mt-4'>
                <Loaderbutton btnName='SUBMIT' request={state.request} />
              </div>
              <div className='py-4 mt-3 w-75 mb-3 fs-6 text-center'>
                Don't have an account?
                <Link
                  to='/registration/company'
                  className='d-inline-block ms-2 fs-6 text-decoration-none '>
                  Register Here
                </Link>
                <small className='px-1'>OR</small>
                <Link
                  to='/'
                  className='d-inline-block fs-6 text-decoration-none '>
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Header>
    </Container>
  );
};

export default VerifyUser;
