import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

import { LoginOTP } from "../../Actions";
import WarningModal from "../Dashboard/WarningModal";
import VerificationModal from "../Dashboard/VerificationModal";
import { useNavigate } from "react-router";
import LoaderModal from "../Dashboard/LoaderModal";

const LoginOtp = ({ Otp, resOtp, getValues, LoginOTP }) => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState(null);
  const [active, setActive] = useState(false);

  const sendOTP = (otp) => {
    const otpNumber = parseInt(otp.join(""));
    if (otp.join("").length < 6) {
      return null;
    }
    setActive(true);
    setTimeout(() => {
      console.log(otpNumber);
      LoginOTP(otpNumber);
    }, 1000);
  };

  const networkError = ({ errMessage }) => {
    if (!errMessage) {
      return null;
    } else {
      setActive(false);
      setError(
        `${errMessage.message}. Check your network connection and try again.`
      );
    }
  };

  const OtpResponse = ({ otp }) => {
    if (!otp) {
      return null;
    } else {
      setActive(false);
      const { error, success } = otp.data;
      if (error) {
        setError(error);
      } else if (success) {
        setSuccess(success);
        // navigate("/");
      }
    }
  };

  // useEffect(() => {
  //   if (!getValues) {
  //     console.log("empty");
  //     // navigate(-1);
  //   } else {
  //     setEmail(localStorage.setItem("email", getValues.values.email));
  //   }
  // }, [getValues]);

  useEffect(() => {
    sendOTP(otp);
  }, [otp]);

  useEffect(() => {
    OtpResponse(resOtp);
    networkError(resOtp);
  }, [resOtp]);

  const handleOtp = (elem, index) => {
    // check if the value is a number or text
    if (isNaN(elem.target.value)) return false;
    setOtp([
      ...otp.map((input, inputIndex) =>
        index === inputIndex ? elem.target.value : input
      ),
    ]);
    if (
      elem.target.nextSibling &&
      elem.nativeEvent.inputType === "insertText"
    ) {
      elem.target.nextSibling.focus();
    }
  };

  const close_reload = () => {
    window.location.reload(false);
    setError("");
  };
  const closeModal = () => {
    setSuccess("");
    navigate("/on-Boarding");
  };

  return (
    <Container className='otp px-1'>
      {!active ? null : <LoaderModal />}

      {!success ? null : (
        <VerificationModal
          message={`${success}. Register`}
          close={closeModal}
        />
      )}

      {!error ? null : (
        <WarningModal closeWarning={close_reload} errorMessage={error} />
      )}
      <div>
        <Header />
      </div>
      <div className='w-100'>
        <h2
          className='mb-3 py-2'
          style={{
            fontSize: "3rem",
            color: "#23549e",
            lineHeight: "3.6rem",
            fontWeight: "700",
          }}>
          Enter Login OTP
        </h2>
      </div>
      <div>
        <p
          style={{
            fontSize: "2.25rem",
            color: " #23549e",
            lineHeight: "2.7rem",
          }}>
          Enter the 6-digit login pin.
          {/* {localStorage.getItem("email", email)} */}
        </p>
      </div>
      <div className='d-flex justify-content-between align-items-center py-2 otp-input-container'>
        {otp.map((inputData, index) => {
          return (
            <input
              key={index}
              type='text'
              className='text-center'
              maxLength='1'
              value={inputData}
              onChange={(e) => handleOtp(e, index)}
              onFocus={(e) => e.target.select()}
              onKeyUp={(e) => {
                if (e.target.previousSibling && e.key === "Backspace") {
                  e.target.previousSibling.focus();
                }
              }}
            />
          );
        })}
      </div>
      <div className='py-4 mt-3 w-75 fs-3 text-center'>
        Didn't get it in your email?{" "}
        <span style={{ cursor: "pointer" }} onClick={() => {}}>
          Resend the code
        </span>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    resOtp: state.RegistrationReducer,
    getValues: state.form.companyRegistration,
  };
};

export default connect(mapStateToProps, { LoginOTP })(LoginOtp);
