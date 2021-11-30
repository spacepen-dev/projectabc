import axios from "axios";

export const signIn = (details) => async (dispatch) => {
  const data = await axios.post("", {
    params: { details },
  });
  dispatch({ type: "SIGN_IN", payLoad: data });
};

export const companyRegistration = (values) => async (dispatch) => {
  const {
    name,
    registration,
    about,
    tin,
    state,
    website,
    accountNumber,
    address,
    bank,
    email,
    tax,
    account,
  } = values;
  try {
    const data = await axios.post(
      "https://haypex.com.ng/dev/ABC/webService/registerCompany.php",
      {
        name: name,
        regNo: registration,
        about: about,
        tin: tin,
        state: state,
        website: website,
        accountNo: accountNumber,
        address: address,
        bankName: bank,
        email: email,
        tax: tax,
        accountName: account,
      }
    );
    dispatch({ type: "REGISTER_COMPANY", payLoad: data });
  } catch (error) {
    dispatch({ type: "Error_MESSAGE", payLoad: error });
  }
};
