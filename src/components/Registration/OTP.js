import React, { useEffect, useState, useReducer } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";

// import Verification from "../Dashboard/svg/Verification";
// import VerificationModal from "../Dashboard/VerificationModal";
import SmallLoader from "../Dashboard/SmallLoader";
import LoaderModal from "../Dashboard/LoaderModal";
import NetWorkErrors from "../NetWorkErrors";
import SuccessRequestModal from "../Dashboard/SuccessRequestModal";
import { AccountTopUp } from "../../Actions";

let InitialState = {
  request: false,
  res: "",
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST_OTP":
      return { ...state, request: true };
    case "REQUEST_RESPONSE":
      return { request: false, res: action };
    case "NETWORK_ERROR":
      return { request: false, error: action };
    default:
      return state;
  }
};

const OTP = ({
  otpAction,
  getValues,
  err,
  companyEmail,
  close,
  resendOtp,
  resendOtpRes,
  resendOtpResErr,
}) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [errorMessage, setMessage] = useState("");
  const [serverErr, setServerErr] = useState("");
  const [showModal, setShow] = useState(false);
  const [success, setSuccess] = useState("");
  const [active, setActive] = useState(false);
  const [comEmail, setComEmail] = useState(null);

  const [request, dispatch] = useReducer(reducer, InitialState);

  useEffect(() => {
    const otpNumber = parseInt(otp.join(""));
    if (otp.join("").length < 6) {
      return;
    }
    setActive(true);
    const Id = setTimeout(() => {
      otpAction(otpNumber, comEmail);
    }, 1000);
    return () => {
      clearTimeout(Id);
    };
  }, [otp, otpAction, comEmail]);

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

  // COMPANY EMAIL SAVED IN THE LOCAL STORAGE
  useEffect(() => {
    setComEmail(localStorage.getItem("aminien_email"));
  }, []);

  useEffect(() => {
    if (!companyEmail) {
      return;
    } else {
      const token = companyEmail.data.token;
      const email = companyEmail.data.email;
      localStorage.setItem("aminien_token", token);
      localStorage.setItem("aminien_email", email);
    }
  }, [companyEmail]);

  useEffect(() => {
    // FETCHING DATA FROM A LOGIN OTP
    if (getValues.loginOtp) {
      // resFunt(getValues.loginOtp);
      const { error, success, accountEmail, token } = getValues.loginOtp.data;

      setActive(false);
      if (error) {
        setShow(true);
        setServerErr(error);
        const id = setTimeout(() => {
          setShow(false);
        }, 4000);
        return () => {
          clearTimeout(id);
        };
      } else if (success) {
        localStorage.setItem("aminien_email", accountEmail);
        localStorage.setItem("aminien_token", token);
        setSuccess(success);
        const id = setTimeout(() => {
          setSuccess("");
          close();
        }, 4000);
        return () => {
          clearTimeout(id);
        };
      }
      // FETCHING DATA FROM A REGISTRATION OTP
    } else if (getValues.otp) {
      // resFunt(getValues.otp);
      const { error, success, accountEmail, token } = getValues.otp.data;
      setActive(false);
      if (error) {
        setShow(true);
        setServerErr(error);
        const id = setTimeout(() => {
          setShow(false);
        }, 4000);
        return () => {
          clearTimeout(id);
        };
      } else if (success) {
        localStorage.setItem("aminien_token", token);
        localStorage.setItem("aminien_email", accountEmail);

        setSuccess(success);
        const id = setTimeout(() => {
          setSuccess("");
          close();
        }, 4000);
        return () => {
          clearTimeout(id);
        };
      }
    }
  }, [getValues, close]);

  // NETWORK ERROR USE EFFECT
  useEffect(() => {
    if (!err) {
      return;
    }
    setActive(false);
    setShow(true);
    setMessage(err.message);
    const removeTimeOut = setTimeout(() => {
      setShow(false);
    }, 4000);
    return () => {
      clearTimeout(removeTimeOut);
    };
  }, [err]);

  // RESEND OTP EFFECTS

  useEffect(() => {
    if (!resendOtpRes) return;
    const { success, error } = resendOtpRes.data;
    if (success) {
      dispatch({ type: "REQUEST_RESPONSE", res: resendOtpRes.data.success });
    } else if (error) {
      dispatch({ type: "REQUEST_RESPONSE", res: resendOtpRes.data.error });
    }
  }, [resendOtpRes]);

  // RESEND OTP EFFECTS FOR ERROR

  useEffect(() => {
    if (!resendOtpResErr) return;
    dispatch({ type: "NETWORK_ERROR", error: resendOtpResErr.message });
  }, [resendOtpResErr]);

  const { error, res } = request;
  const otpMessage = error ? "text-danger" : "text-success";

  return (
    <Container className='otp px-1 mx-auto w-75'>
      {active && <LoaderModal />}

      {success && <SuccessRequestModal message={success} />}
      {/* {success && (
        <VerificationModal
          message={`${success}`}
          close={closeModal}
          svg={Verification()}
        />
      )} */}

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

        <div className='py-4 mt-3 w-75 ml-auto fs-6'>
          Didn't get it in your email?
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch({ type: "REQUEST_OTP", request: true });
              resendOtp(comEmail);
            }}>
            Resend the code
            {request.request ? (
              <SmallLoader />
            ) : (
              <p className={`${otpMessage}`}>{res ? res.res : error.error}</p>
            )}
          </span>
          {/* {error && <p className='text-danger'>{error.error}</p>} */}
        </div>
      </Header>
    </Container>
  );
};

export default OTP;
