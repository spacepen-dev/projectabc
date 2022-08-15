import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import { Otp, ResendOTP } from "../../Actions";

import OTP from "./OTP";

const RegistrationOTP = ({
  Otp,
  resOtp,
  otpErr,
  companyEmail,
  ResendOTP,
  resendOtp,
  resendOtpErr,
}) => {
  const navigate = useNavigate();
  console.log(resendOtp);
  const close = () => {
    navigate("/on-boarding");
  };
  return (
    <OTP
      otpAction={Otp}
      getValues={resOtp}
      err={otpErr}
      close={close}
      companyEmail={companyEmail}
      resendOtp={ResendOTP}
      resendOtpRes={resendOtp}
      resendOtpResErr={resendOtpErr}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    resOtp: state.RegistrationReducer,
    otpErr: state.RegistrationReducer.otpErr,
    companyEmail: state.RegistrationReducer.otp,
    resendOtp: state.RegistrationReducer.resendOtp,
    resendOtpErr: state.RegistrationReducer.resendOtpErr,
  };
};

export default connect(mapStateToProps, { Otp, ResendOTP })(RegistrationOTP);
