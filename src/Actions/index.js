import axios from "axios";

export const signIn = (email) => async (dispatch) => {
  try {
    const data = await axios.post(
      "https://haypex.com.ng/dev/ABC/webService/accountLogin.php",
      { email }
    );
    dispatch({ type: "SIGN_IN", payLoad: data });
  } catch (error) {
    dispatch({ type: "SIGN_ERR_MESSAGE", payLoad: error });
  }
};

export const companyReg = (values) => async (dispatch) => {
  const {
    name,
    registration,
    about,
    tin,
    state,
    website,
    accountName,
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
        accountNo: account,
        address: address,
        bankName: bank,
        email: email,
        tax: tax,
        accountName: accountName,
      }
    );
    dispatch({ type: "REGISTER_COMPANY", payLoad: data });
  } catch (error) {
    dispatch({ type: "REGISTRATION_ERR_MESSAGE", payLoad: error });
  }
};

export const Otp = (code) => async (dispatch) => {
  try {
    const data = await axios.post(
      "https://haypex.com.ng/dev/ABC/webService/verifyAccountOtp.php",

      { otp: code }
    );
    dispatch({ type: "OTP", payLoad: data });
  } catch (error) {
    dispatch({ type: "OTP_ERR_MESSAGE", payLoad: error });
  }
};

export const LoginOTP = (code) => async (dispatch) => {
  try {
    const data = await axios.post(
      "https://haypex.com.ng/dev/ABC/webService/verifyLogin.php",
      { emailOtp: code }
    );
    dispatch({ type: "LOGIN", payLoad: data });
  } catch (error) {
    dispatch({ type: "LOGIN_ERR_MESSAGE", payLoad: error });
  }
};

export const SubmitDepartment = (departments, tokenKey) => async (dispatch) => {
  try {
    const data = await axios.post(
      "https://haypex.com.ng/dev/ABC/webService/role_department.php",
      { tokenKey, departments }
    );
    dispatch({ type: "DEPARTMENT", payLoad: data });
  } catch (error) {
    dispatch({ type: "DEPARTMENT_ERR_MESSAGE", payLoad: error });
  }
};

export const CompanyDetails = (email) => async (dispatch) => {
  try {
    const data = await axios.get(
      "https://haypex.com.ng/dev/ABC/webService/fetchAccount_details.php",
      { emailAddress: email }
    );
    dispatch({ type: "COMPANY-DETAILS", payLoad: data });
  } catch (error) {
    dispatch({ type: "DETAILS_ERR_MESSAGE", payLoad: error });
  }
};
export const RegisterEmployee = (values, token) => async (dispatch) => {
  console.log(token);
  const {
    firstName,
    LastName,
    email,
    annual,
    role,
    department,
    relieves,
    nin,
    accountName,
    accountNumber,
    filterBank,
  } = values;
  try {
    const data = await axios.post(
      "https://haypex.com.ng/dev/ABC/webService/registerEmployee.php",
      {
        employeeFirstname: firstName,
        employeeLastname: LastName,
        employee_email: email,
        employeeRole: role,
        employeeDepartment: department,
        employeeRelieves: relieves,
        employeeNin: nin,
        token,
        employeeAccountName: accountName,
        employeeAccountNumber: accountNumber,
        employeeBankName: filterBank,
        employee_ags: annual,
      }
    );
    dispatch({ type: "REGISTER_EMPLOYEE", payLoad: data });
  } catch (error) {
    dispatch({ type: "REGISTER_EMPLOYEE_ERR_MESSAGE", payLoad: error });
  }
};
export const UpdateEmployee = (values, token) => async (dispatch) => {
  const {
    firstName,
    LastName,
    email,
    role,
    department,
    relieves,
    nin,
    annual,
    accountName,
    accountNumber,
    filterBank,
  } = values;
  try {
    const data = await axios.post(
      "https://haypex.com.ng/dev/ABC/webService/updateEmployee.php",
      {
        employeeFirstname: firstName,
        employeeLastname: LastName,
        employee_email: email,
        employeeRole: role,
        employeeDepartment: department,
        employeeRelieves: relieves,
        employeeNin: nin,
        token,
        employeeAccountName: accountName,
        employeeAccountNumber: accountNumber,
        employeeBankName: filterBank,
        employee_ags: annual,
      }
    );
    dispatch({ type: "UPDATE_EMPLOYEE", payLoad: data });
  } catch (error) {
    dispatch({ type: "UPDATE_EMPLOYEE_ERR_MESSAGE", payLoad: error });
  }
};
