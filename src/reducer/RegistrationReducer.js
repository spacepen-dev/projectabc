const Initial_State = {
  signIN: null,
  companyRegistration: null,
  otp: null,
  signErr: null,
  registrationErr: null,
  otpErr: null,
  loginErr: null,
  department: null,
  departmentErr: null,
  detailsErr: null,
  loginOtp: null,
  resendOtp: null,
  resendOtpErr: null,
};

const RegistrationReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case "REGISTER_COMPANY":
      return { ...state, companyRegistration: action.payLoad };
    case "SIGN_IN":
      return { ...state, signIN: action.payLoad };
    case "OTP":
      return { ...state, otp: action.payLoad };
    case "LOGIN":
      return { ...state, loginOtp: action.payLoad };
    case "DEPARTMENT":
      return { ...state, department: action.payLoad };
    case "SIGN_ERR_MESSAGE":
      return { ...state, signErr: action.payLoad };
    case "REGISTRATION_ERR_MESSAGE":
      return { ...state, registrationErr: action.payLoad };
    case "OTP_ERR_MESSAGE":
      return { ...state, otpErr: action.payLoad };
    case "LOGIN_ERR_MESSAGE":
      return { ...state, loginErr: action.payLoad };
    case "DEPARTMENT_ERR_MESSAGE":
      return { ...state, departmentErr: action.payLoad };
    case "DETAILS_ERR_MESSAGE":
      return { ...state, detailsErr: action.payLoad };
    case "RESEND_OTP":
      return { ...state, resendOtp: action.payLoad };
    case "RESEND_OTP_ERR_MESSAGE":
      return { ...state, resendOtpErr: action.payLoad };
    default:
      return state;
  }
};

export default RegistrationReducer;
