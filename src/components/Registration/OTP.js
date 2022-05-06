import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";

import LoaderModal from "../Dashboard/LoaderModal";
import NetWorkErrors from "../NetWorkErrors";
import SuccessRequestModal from "../Dashboard/SuccessRequestModal";
import SmallLoader from "../Dashboard/SmallLoader";

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
  const [showModal, setShow] = useState({
    modal: false,
    loader: false,
    active: false,
  });
  const [success, setSuccess] = useState({ otp: "", resend: "" });
  // const [active, setActive] = useState(false);
  const [comEmail, setComEmail] = useState("");

  useEffect(() => {
    const otpNumber = parseInt(otp.join(""));
    if (otp.join("").length < 6) {
      return null;
    }
    setShow((state) => {
      return { ...state, active: true };
    });
    const Id = setTimeout(() => {
      otpAction(otpNumber, comEmail);
    }, 1000);
    return () => {
      clearTimeout(Id);
    };
  }, [otp, otpAction, comEmail]);

  // COMPANY EMAIL SAVED IN THE LOCAL STORAGE
  useEffect(() => {
    setComEmail(localStorage.getItem("signIn_email"));
  }, []);

  useEffect(() => {
    if (!companyEmail) {
      return null;
    } else {
      const token = companyEmail.data.token;
      localStorage.setItem("token", token);
    }
  }, [companyEmail]);

  useEffect(() => {
    // FETCHING DATA FROM A LOGIN OTP
    if (getValues.loginOtp) {
      // resFunt(getValues.loginOtp);
      const { error, success } = getValues.loginOtp.data;
      setShow((state) => {
        return { ...state, active: false };
      });

      if (error) {
        setShow((state) => {
          return { ...state, modal: true };
        });
        setServerErr(error);
        const id = setTimeout(() => {
          setShow((state) => {
            return { ...state, modal: false };
          });
        }, 4000);
        return () => {
          clearTimeout(id);
        };
      } else if (success) {
        setSuccess((state) => {
          return { ...state, otp: success };
        });
        const id = setTimeout(() => {
          setSuccess((state) => {
            return { ...state, otp: "" };
          });
          close();
        }, 4000);
        return () => {
          clearTimeout(id);
        };
      }
      // FETCHING DATA FROM A REGISTRATION OTP
    } else if (getValues.otp) {
      // resFunt(getValues.otp);
      const { error, success } = getValues.otp.data;
      setShow((state) => {
        return { ...state, active: false };
      });
      if (error) {
        setShow((state) => {
          return { ...state, modal: true };
        });

        setServerErr(error);
        const id = setTimeout(() => {
          setShow((state) => {
            return { ...state, modal: false };
          });
        }, 4000);
        return () => {
          clearTimeout(id);
        };
      } else if (success) {
        setSuccess((state) => {
          return { ...state, otp: success };
        });
        const id = setTimeout(() => {
          setSuccess((state) => {
            return { ...state, otp: "" };
          });
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
      return null;
    }

    setShow((state) => {
      return { ...state, modal: true, active: false };
    });
    setMessage(err.message);
    const removeTimeOut = setTimeout(() => {
      setShow((state) => {
        return { ...state, modal: false };
      });
    }, 4000);
    return () => {
      clearTimeout(removeTimeOut);
    };
  }, [err]);

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

  // USEFFECT FOR RESENT OTP

  useEffect(() => {
    if (!resendOtpResErr) {
      return null;
    }
    setShow((state) => {
      return { ...state, loader: false };
    });
    setSuccess((state) => {
      return { ...state, resend: resendOtpResErr.message };
    });
  }, [resendOtpResErr]);
  // const resErr = resendOtpResErr ? false : true;

  return (
    <Container className='otp px-1 mx-auto w-75'>
      {showModal.active && <LoaderModal />}

      {success.otp && <SuccessRequestModal message={success.otp} />}
      {/* {success && (
        <VerificationModal
          message={`${success}`}
          close={closeModal}
          svg={Verification()}
        />
      )} */}

      {showModal.modal && (
        <NetWorkErrors
          errMessage={errorMessage}
          serverErr={serverErr}
          // removeLoader={() => (false)}
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
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              // add small loader.
              setShow((state) => {
                return { ...state, loader: true };
              });

              setSuccess((state) => {
                return { ...state, resend: "" };
              });

              resendOtp(comEmail);
              // display response
            }}>
            resend code
            {showModal.loader && <SmallLoader />}
          </span>
          <p className={`${resendOtpResErr ? "text-danger" : "text-success"}`}>
            {success.resend}
          </p>
        </div>
      </Header>
    </Container>
  );
};

export default OTP;
