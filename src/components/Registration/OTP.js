import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";

import Verification from "../Dashboard/svg/Verification";
import VerificationModal from "../Dashboard/VerificationModal";
import LoaderModal from "../Dashboard/LoaderModal";
import NetWorkErrors from "../NetWorkErrors";

const OTP = ({ otpAction, getValues, err, companyEmail, close }) => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [errorMessage, setMessage] = useState("");
  const [serverErr, setServerErr] = useState("");
  const [showModal, setShow] = useState(false);
  const [success, setSuccess] = useState("");
  const [active, setActive] = useState(false);
  const [comEmail, setComEmail] = useState("");

  const sendOTP = (otp) => {
    const otpNumber = parseInt(otp.join(""));
    if (otp.join("").length < 6) {
      return null;
    }
    setActive(true);
    setTimeout(() => {
      otpAction(otpNumber);
    }, 1000);
  };

  useEffect(() => {
    if (!companyEmail) {
      setComEmail(null);
    } else {
      const token = companyEmail.data.token;
      localStorage.setItem("token", token);
      setComEmail(companyEmail.data.accountEmail);
    }
  }, [companyEmail]);

  useEffect(() => {
    if (!err) {
      return null;
    }
    setShow(true);
    setMessage(err.message);
    const removeTimeOut = setTimeout(() => {
      setShow(false);
    }, 4000);
    return () => {
      clearTimeout(removeTimeOut);
    };
  }, [err]);

  const resFunt = (data) => {
    const { error, success } = data.data;
    setActive(false);
    if (error) {
      setShow(true);
      setServerErr(error);
      setTimeout(() => {
        setShow(false);
      }, 4000);
    } else if (success) {
      setSuccess(success);
      setMessage("");
      setServerErr("");
    }
  };
  const OtpResponse = (getValues) => {
    if (getValues.loginOtp) {
      resFunt(getValues.loginOtp);
    } else if (getValues.otp) {
      resFunt(getValues.otp);
    }
  };

  useEffect(() => {
    sendOTP(otp);
  }, [otp]);

  useEffect(() => {
    OtpResponse(getValues);
  }, [getValues]);

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

  const closeModal = () => {
    setSuccess("");
    close();
  };

  return (
    <Container className='otp px-1 mx-auto w-75'>
      {active && <LoaderModal />}

      {success && (
        <VerificationModal
          message={`${success}`}
          close={closeModal}
          svg={Verification()}
        />
      )}

      {showModal && (
        <NetWorkErrors
          errMessage={errorMessage}
          serverErr={serverErr}
          removeLoader={() => setActive(false)}
        />
      )}

      <Header>
        <div className='w-100 otp-header'>
          <h2 className='mb-3 py-2'>OTP confirmation</h2>
        </div>
        <div className='otp-sub-header'>
          <p>Enter the 6-digit pin that was sent to {comEmail}</p>
        </div>
        <div className='d-flex justify-content-between align-items-center otp-input-container'>
          {otp.map((inputData, index) => {
            return (
              <input
                key={index}
                type='text'
                className='text-center otp-input'
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
        <div className='py-4 mt-3 w-75 fs-6 text-center'>
          Didn't get it in your email?{" "}
          <span style={{ cursor: "pointer" }} onClick={() => {}}>
            Resend the code
          </span>
        </div>
      </Header>
    </Container>
  );
};

export default OTP;
