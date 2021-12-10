const Initial_State = {
  signIN: null,
  companyRegistration: null,
  otp: null,
  errMessage: null,
  loginOtp: null,
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
    case "ERROR_MESSAGE":
      return { ...state, errMessage: action.payLoad };
    default:
      return state;
  }
};

export default RegistrationReducer;
