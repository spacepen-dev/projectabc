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
  const {
    employee_firstname,
    employee_lastname,
    employee_email,
    employee_annual_gross_salary,
    employee_role,
    employee_department,
    employee_relives,
    employee_nin,
    employee_bankAccount_name,
    employee_bankAccount_number,
    bankCode,
    filterBank,
  } = values;
  try {
    const data = await BasedURL.post("/registerEmployee.php", {
      employeeFirstname: employee_firstname,
      employeeLastname: employee_lastname,
      employee_email: employee_email,
      employeeRole: employee_role,
      employeeDepartment: employee_department,
      employeeRelieves: employee_relives,
      employeeNin: employee_nin,
      token,
      employeeAccountName: employee_bankAccount_name,
      employeeAccountNumber: employee_bankAccount_number,
      employeeBankName: filterBank,
      employeeBankCode: bankCode,
      employeeAgs: employee_annual_gross_salary,
      employee_mogs: employee_annual_gross_salary / "12",
    });
    dispatch({ type: "REGISTER_EMPLOYEE", payLoad: data });
  } catch (error) {
    dispatch({ type: "REGISTER_EMPLOYEE_ERR_MESSAGE", payLoad: error });
  }
};

// UPDATE EMPLOYEE DETAIL ACTION
export const UpdateEmployee = (values, token) => async (dispatch) => {
  const {
    employee_firstname,
    employee_lastname,
    employee_email,
    employee_role,
    employee_department,
    employee_relives,
    employee_nin,
    employee_annual_gross_salary,
    employee_bankAccount_name,
    employee_bankAccount_number,
    filterBank,
    bankCode,
    employee_token,
  } = values;
  try {
    const data = await BasedURL.post("/updateEmployee.php", {
      employeeFirstname: employee_firstname,
      employeeLastname: employee_lastname,
      employeeEmail: employee_email,
      employeeRole: employee_role,
      employeeDepartment: employee_department,
      employeeRelives: employee_relives,
      employeeNin: employee_nin,
      employeeAccountName: employee_bankAccount_name,
      employeeAccountNumber: employee_bankAccount_number,
      employeeBankName: filterBank,
      employee_ags: employee_annual_gross_salary,
      employee_mogs: employee_annual_gross_salary / "12",
      companyToken: token,
      employeeToken: employee_token,
      employeeBankCode: bankCode,
    });
    dispatch({ type: "UPDATE_EMPLOYEE", payLoad: data });
  } catch (error) {
    dispatch({ type: "UPDATE_EMPLOYEE_ERR_MESSAGE", payLoad: error });
  }
};

// DELETE EMPLOYEE ACTION
export const DeleteEmployeeAction = (token, values) => async (dispatch) => {
  const {
    employee_firstname,
    employee_lastname,
    employee_email,
    employee_token,
  } = values;
  try {
    const data = await BasedURL.post("/deleteEmployee.php", {
      companyToken: token,
      employeeToken: employee_token,
      employeeFirstname: employee_firstname,
      employeeLastname: employee_lastname,
      employeeEmail: employee_email,
    });
    dispatch({ type: "DELETE_EMPLOYEE", payLoad: data });
  } catch (error) {
    dispatch({ type: "DELETE_EMPLOYEE_ERR_MESSAGE", payLoad: error });
  }
};

// FETCH DEPARTMENT ACTION
export const FetchDepartment = (email, token) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/fetchRoleDepartment.php", {
      companyEmail: email,
      companyToken: token,
    });
    dispatch({ type: "FETCH_DEPARTMENT", payLoad: data });
  } catch (error) {
    dispatch({ type: "FETCH_DEPARTMENT_ERR_MESSAGE", payLoad: error });
  }
};

// RESENT REGISTRATION OTP ACTION
export const ResendOTP = (email) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/resendRegistrationOtp.php", {
      companyEmail: email,
    });
    dispatch({ type: "RESEND_OTP", payLoad: data });
  } catch (error) {
    dispatch({ type: "RESEND_OTP_ERR_MESSAGE", payLoad: error });
  }
};

// RESENT LOGIN OTP ACTION
export const ResendLoginOtp = (email) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/resendLoginOtp.php", {
      companyEmail: email,
    });
    dispatch({ type: "RESEND_LOGIN_OTP", payLoad: data });
  } catch (error) {
    dispatch({ type: "RESEND_LOGIN_OTP_ERR_MESSAGE", payLoad: error });
  }
};

//COMPANY TOP UP ACCOUNT ACTION
export const AccountTopUp = (email, token, amount) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/accountTopUp.php", {
      companyEmail: email,
      companyToken: token,
      amount,
    });
    dispatch({ type: "ACCOUNT_TOP_UP", payLoad: data });
  } catch (error) {
    dispatch({ type: "ACCOUNT_TOP_UP_ERR_MESSAGE", payLoad: error });
  }
};

// VERIFY COMPANY TOP UP
export const VerifyTopUp = (transactionId, token) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/verifyAccountTopUpPayment.php", {
      reference: transactionId,
      companyToken: token,
    });
    console.log(transactionId);
    dispatch({ type: "VERIFY_TOP_UP", payLoad: data });
  } catch (error) {
    dispatch({ type: "VERIFY_TOP_UP_ERR_MESSAGE", payLoad: error });
  }
};

// FETCH COMPANY DATA

export const FetchCompanyEmployee = (token) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/fetchCompanyEmployee.php", {
      companyToken: token,
    });
    dispatch({ type: "FETCH_COMPANY_EMPLOYEE", payLoad: data });
  } catch (error) {
    dispatch({ type: "FETCH_COMPANY_EMPLOYEE_ERR_MESSAGE", payLoad: error });
  }
};

// FETCH ACCOUNT DETAILS
export const FetchWalletHistory = (email, token) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/fetchWalletTransactions.php", {
      companyEmail: email,
      companyToken: token,
    });
    dispatch({ type: "FETCH_WALLET_HISTORY", payLoad: data });
  } catch (error) {
    dispatch({ type: "FETCH_WALLET_HISTORY_ERR_MESSAGE", payLoad: error });
  }
};

// FETCH ACCOUNT DETAILS
export const FetchBankList = () => async (dispatch) => {
  try {
    const data = await BasedURL.post("/fetchbanks.php");
    dispatch({ type: "FETCH_BANK_LIST", payLoad: data });
  } catch (error) {
    dispatch({ type: "FETCH_BANK_LIST_ERR_MESSAGE", payLoad: error });
  }
};

// FETCH ACCOUNT DETAILS
export const UpdateCompanyDetails = (data) => async (dispatch) => {
  const {
    CompanyName,
    companyEmail,
    companyToken,
    regNo,
    about,
    address,
    state,
    website,
    companySize,
    maximumEmployeeSalary,
  } = data;
  try {
    const data = await BasedURL.post("/updateCompanyAccount.php", {
      companyName: CompanyName,
      companyEmail,
      companyToken,
      companyRegNo: regNo,
      about,
      companyAddress: address,
      companyState: state,
      companyWebsite: website,
      companySize,
      maximumEmployeeSalary,
    });
    console.log(state);
    dispatch({ type: "UPDATE_COMPANY_DETAILS", payLoad: data });
  } catch (error) {
    dispatch({ type: "UPDATE_COMPANY_DETAILS_ERR_MESSAGE", payLoad: error });
  }
};
