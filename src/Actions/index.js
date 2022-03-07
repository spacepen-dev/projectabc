import axios from "axios";
import BasedURL from "./BasedURL";

// COMPNAY SIGN IN ACTION
export const signIn = (email) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/accountLogin.php", { email });
    dispatch({ type: "SIGN_IN", payLoad: data });
  } catch (error) {
    dispatch({ type: "SIGN_ERR_MESSAGE", payLoad: error });
  }
};

// COMPANY REGISTRATION ACTION

export const companyReg = (values) => async (dispatch) => {
  const {
    name,
    registration,
    about,
    tin,
    location,
    website,
    address,
    email,
    tax,
    maxSalary,
    companySize,
  } = values;
  try {
    const data = await BasedURL.post("/registerCompany.php", {
      name: name,
      regNo: registration,
      about: about,
      tin: tin,
      state: location,
      website: website,
      address: address,
      email: email,
      tax: tax,
      maximumEmployeeSalary: maxSalary,
      companySize,
    });
    dispatch({ type: "REGISTER_COMPANY", payLoad: data });
  } catch (error) {
    dispatch({ type: "REGISTRATION_ERR_MESSAGE", payLoad: error });
  }
};

// REGISTRATION OTP ACTION
export const Otp = (code, email) => async (dispatch) => {
  try {
    const data = await BasedURL.post(
      "/verifyAccountOtp.php",

      { otp: code, companyEmail: email }
    );
    dispatch({ type: "OTP", payLoad: data });
  } catch (error) {
    dispatch({ type: "OTP_ERR_MESSAGE", payLoad: error });
  }
};

// LOGIN OTP REGISTRATION
export const LoginOTP = (code, email) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/verifyLogin.php", {
      emailOtp: code,
      companyEmail: email,
    });
    dispatch({ type: "LOGIN", payLoad: data });
  } catch (error) {
    dispatch({ type: "LOGIN_ERR_MESSAGE", payLoad: error });
  }
};

// SUBMIT DEPARTMENT ACTION
export const SubmitDepartment =
  (departments, tokenKey, email) => async (dispatch) => {
    try {
      const data = await BasedURL.post("/role_department.php", {
        tokenKey,
        departments,
        companyEmail: email,
      });
      dispatch({ type: "DEPARTMENT", payLoad: data });
    } catch (error) {
      dispatch({ type: "DEPARTMENT_ERR_MESSAGE", payLoad: error });
    }
  };

// COMPANY DETAILS ACTION
export const CompanyDetails = (email) => async (dispatch) => {
  try {
    const data = await BasedURL.get("/fetchAccount_details.php", {
      emailAddress: email,
    });
    dispatch({ type: "COMPANY-DETAILS", payLoad: data });
  } catch (error) {
    dispatch({ type: "DETAILS_ERR_MESSAGE", payLoad: error });
  }
};

// REGISTER EMPLOYEE ACTION
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
    const data = await BasedURL.post("/registerEmployee.php", {
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
    });
    dispatch({ type: "REGISTER_EMPLOYEE", payLoad: data });
  } catch (error) {
    dispatch({ type: "REGISTER_EMPLOYEE_ERR_MESSAGE", payLoad: error });
  }
};

// UPDATE EMPLOYEE DETAIL ACTION
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
    const data = await BasedURL.post("/updateEmployee.php", {
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
    });
    dispatch({ type: "UPDATE_EMPLOYEE", payLoad: data });
  } catch (error) {
    dispatch({ type: "UPDATE_EMPLOYEE_ERR_MESSAGE", payLoad: error });
  }
};

// FETCH DEPARTMENT ACTION
export const FetchDepartment = (email, token) => async (dispatch) => {
  console.log(email, token);
  try {
    const data = await BasedURL.get("/fetchRoleDepartment.php", {
      companyEmail: email,
      companyToken: token,
    });
    console.log(data);
    dispatch({ type: "FETCH_DEPARTMENT", payLoad: data });
  } catch (error) {
    dispatch({ type: "FETCH_DEPARTMENT_ERR_MESSAGE", payLoad: error });
  }
};

// RESENT OTP ACTION
export const ResendOTP = (email) => async (dispatch) => {
  try {
    const data = await BasedURL.get("fetchRoleDepartment.php", {
      companyEmail: email,
    });
    dispatch({ type: "RESEND_OTP", payLoad: data });
  } catch (error) {
    dispatch({ type: "RESEND_OTP_ERR_MESSAGE", payLoad: error });
  }
};
