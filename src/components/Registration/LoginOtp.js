import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import { LoginOTP, ResendLoginOtp } from "../../Actions";
import OTP from "./OTP";

const LoginOtp = ({
  LoginOTP,
  loginOtp,
  loginErr,
  companyEmail,
  ResendLoginOtp,
  resendLoginOtp,
  resendLoginOtpErr,
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
      resendOtp={ResendLoginOtp}
      resendOtpRes={resendLoginOtp}
      resendOtpResErr={resendLoginOtpErr}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loginOtp: state.RegistrationReducer,
    loginErr: state.RegistrationReducer.loginErr,
    companyEmail: state.RegistrationReducer.loginOtp,
    resendLoginOtp: state.DashboardReducer.resendLoginOtp,
    resendLoginOtpErr: state.DashboardReducer.resendLoginOtpErr,
  };
};

export default connect(mapStateToProps, { LoginOTP, ResendLoginOtp })(LoginOtp);
