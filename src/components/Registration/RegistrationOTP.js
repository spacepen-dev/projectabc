import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import { Otp, ResendOTP } from "../../Actions";

import OTP from "./OTP";

const RegistrationOTP = ({ Otp, resOtp, otpErr, companyEmail, ResendOTP }) => {
  const navigate = useNavigate();

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
    />
  );
};

const mapStateToProps = (state) => {
  return {
    resOtp: state.RegistrationReducer,
    otpErr: state.RegistrationReducer.otpErr,
    companyEmail: state.RegistrationReducer.otp,
  };
};

export default connect(mapStateToProps, { Otp, ResendOTP })(RegistrationOTP);
