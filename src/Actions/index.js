import axios from "axios";

export const signIn = (details) => async (dispatch) => {
  const data = await axios.post("", {
    params: { details },
  });
  dispatch({ type: "SIGN_IN", payLoad: data });
};

export const companyRegistration = (values) => async (dispatch) => {
  console.log(values);
  const data = await axios.post("", {
    params: { details: values },
  });
  dispatch({ type: "REGISTER_COMPANY", payLoad: data });
};
