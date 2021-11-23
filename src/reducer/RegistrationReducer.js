const Initial_State = {
  signIN: null,
  companyRegistration: null,
};

const RegistrationReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case "REGISTER_COMPANY":
      return { ...state, companyRegistration: action.payLoad };
    case "SIGN_IN":
      return { ...state, signIN: action.payLoad };
    default:
      return state;
  }
};
