import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import { LoginOTP, ResendOTP } from "../../Actions";
import OTP from "./OTP";

const LoginOtp = ({
  LoginOTP,
  loginOtp,
  loginErr,
  companyEmail,
  ResendOTP,
}) => {
  const navigate = useNavigate();
  const close = () => {
    navigate("/Dashboard");
  };

  return (
    <OTP
      otpAction={LoginOTP}
      getValues={loginOtp}
      err={loginErr}
      close={close}
      companyEmail={companyEmail}
      resendOtp={ResendOTP}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loginOtp: state.RegistrationReducer,
    loginErr: state.RegistrationReducer.loginErr,
    companyEmail: state.RegistrationReducer.loginOtp,
  };
};

export default connect(mapStateToProps, { LoginOTP, ResendOTP })(LoginOtp);
