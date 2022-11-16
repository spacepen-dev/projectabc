import axios from "axios";
import BasedURL from "./BasedURL";

/**********************NON ASYNC ACTION CREATOR*********************************/





// SUBMIT DEPARTMENT ACTION
export const SubmitDepartment =
  (values) => async (dispatch) => {
    try {
      const data = await BasedURL.post("/registerDepartment.php", {...values});
      dispatch({ type: "ADD_DEPARTMENT", payLoad: data });
      if (data) {
        const { error, success } = data.data;
        if (error) {
          dispatch({ type: "ADD_DEPARTMENT_ERROR", payLoad: error});
        } else if (success) {
          dispatch({ type: "ADD_DEPARTMENT_SUCCESS", payLoad: success});
        }
      } 
      return;
    } catch (error) {
      dispatch({ type: "ADD_DEPARTMENT_ERR_MESSAGE", payLoad: error });
    }
  };

// COMPANY DETAILS ACTION
export const CompanyDetails = (values) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/fetchUserSingleBusiness.php", { ...values });
    dispatch({ type: "COMPANY_DETAILS", payLoad: data });
    if (data) {
      const { error, success } = data.data;
      if (error) {
        dispatch({ type: "COMPANY_DETAILS_ERROR", payLoad: data });
        
      } else if (success.length > 0) {
        
        dispatch({ type: "COMPANY_DETAILS_SUCCESS", payLoad: data });
      }
      
    }

  } catch (error) {
    dispatch({ type: "COMPANY_DETAILS_ERR_MESSAGE", payLoad: error });
  };
};

// REGISTER EMPLOYEE ACTION
export const RegisterEmployee =
  (values, token, accountVerified) => async (dispatch) => {
    
    const {
      employeeFirstname,
      employeeLastname,
      employeeEmail,
      employeeAnnualGrossSalary,
      employeeRole,
      employeeDepartment,
      employeeRelives,
      employeeTin,
      employeePhoneNumber,
      employeeState,

      // accountName,
      // accountNumber,
      employeeAccountNumber,
      // employeeAccountName,
      bankcode,
      filterBank,
    } = values;
    try {
      const data = await BasedURL.post("/registerEmployee.php", {
        employeeFirstname,
        employeeLastname,
        employee_email: employeeEmail,
        employeeRole,
        employeeDepartment,
        employeeRelieves: employeeRelives,
        employeeTin,
        employeeState,
        token,
        employeeAccountName: accountVerified,
        employeePhoneNumber: employeePhoneNumber,
        employeeAccountNumber,
        employeeBankName: filterBank,
        employeeBankCode: bankcode,
        employeeAgs: employeeAnnualGrossSalary,
        employeeMgs: employeeAnnualGrossSalary / "12",
      });
      dispatch({ type: "REGISTER_EMPLOYEE", payLoad: data });
    } catch (error) {
      dispatch({ type: "REGISTER_EMPLOYEE_ERR_MESSAGE", payLoad: error });
    }
  };

// UPDATE EMPLOYEE DETAIL ACTION
export const UpdateEmployee =
  (values, token, accountVerified) => async (dispatch) => {
    const {
      employeeFirstname,
      employeeLastname,
      employeeEmail,
      employeeRole,
      employeeDepartment,
      employeeRelives,
      employeeTin,
      employeeAnnualGrossSalary,
      employeeAccountNumber,
      filterBank,
      bankcode,
      employeePhoneNumber,
      employeeToken,
      employeeState
    } = values;
    try {
      const data = await BasedURL.post("/updateEmployee.php", {
        employeeFirstname,
        employeeLastname,
        employee_email: employeeEmail,
        employeeRole,
        employeeDepartment,
        employeeRelieves: employeeRelives,
        employeeTin,
        employeeState,
        employeeAccountName: accountVerified,
        employeeAccountNumber,
        employeeBankName: filterBank,
        employeeAgs: employeeAnnualGrossSalary,
        employeeMgs: employeeAnnualGrossSalary / "12",
        companyToken: token,
        employeePhoneNumber,
        employeeToken: employeeToken,
        employeeBankCode: bankcode,
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
export const FetchDepartment = (values) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/fetchRoleDepartment.php", { ...values });
    dispatch({ type: "FETCH_DEPARTMENT", payLoad: data });
    if (data) {
      const { error, success } = data.data;

      if (error) {
        dispatch({ type: "FETCH_DEPARTMENT_ERROR", payLoad: data });
        
      } else if (success.length > 0) {

        dispatch({ type: "FETCH_DEPARTMENT_SUCCESSS", payLoad: data });
        
      }
    }

  } catch (error) {
    dispatch({ type: "FETCH_DEPARTMENT_ERR_MESSAGE", payLoad: error });
  }
};

export const EditDepartment =
  (token, departments, email) => async (dispatch) => {
    try {
      const data = await BasedURL.post("/registerDepartment.php	", {
        token: token,
        departments,
        companyEmail: email,
      });
      dispatch({ type: "EDIT_DEPARTMENT", payLoad: data });
    } catch (error) {
      dispatch({ type: "EDIT_DEPARTMENT_ERR_MESSAGE", payLoad: error });
    }
  };

// RESEND REGISTRATION OTP ACTION
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
    const data = await BasedURL.post("/accountLogin.php", { email });
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
export const FetchWalletHistory = (values) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/fetchWalletTransactions.php", { ...values });
    
    dispatch({ type: "FETCH_WALLET_HISTORY", payLoad: data });

    if (data) {
      const { success, error } = data.data;
      if (error) {
        
        dispatch({ type: "FETCH_WALLET_HISTORY_ERROR", payLoad: error });
      
      } else if (success.length > 0) {
        dispatch({ type: "FETCH_WALLET_HISTORY_SUCCESS", payLoad: success });
      }
    }

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


export const bankList = async (funct=(res)=> {}) => {
  const data = await axios.post("https://apws.spacepen.tech/fetchbanks.php");
  funct(data);
}
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
    maximumEmployeeSalary,
    tin,
    phoneNumber,
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
      companyCategory: "School",
      maximumEmployeeSalary,
      companyTin: tin,
      phoneNumber,
    });
    dispatch({ type: "UPDATE_COMPANY_DETAILS", payLoad: data });
  } catch (error) {
    dispatch({ type: "UPDATE_COMPANY_DETAILS_ERR_MESSAGE", payLoad: error });
  }
};

// TAX HISTORY ACTION CREATOR

export const FetchTaxHistory = (email, token) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/fetchTaxHistory.php", {
      companyEmail: email,
      companyToken: token,
    });
    dispatch({ type: "FETCH_TAX_HISTORY", payLoad: data });
  } catch (error) {
    dispatch({ type: "FETCH_TAX_HISTORY_ERR_MESSAGE", payLoad: error });
  }
};

// SALARY HISTORY ACTION CREATOR
export const FetchSalaryHistory = (value) => async (dispatch) => {
  try {
    const data = await BasedURL.post("fetchSalaryHistory.php", { ...value });
    
    dispatch({ type: "FETCH_SALARY_HISTORY" });

    if (data) {
      const { success, error } = data.data;
      if (error) {
        dispatch({ type: "FETCH_SALARY_HISTORY_ERROR", payLoad: error });
      } else if (success.length > 0) {
        dispatch({ type: "FETCH_SALARY_HISTORY_SUCCESS", payLoad: success });
        
      }
      
    }
  } catch (error) {
    dispatch({ type: "FETCH_SALARY_HISTORY_ERR_MESSAGE", payLoad: error });
  }
};

// PAY SALARY ACTION CREATOR
export const PayEmployeeSalary =
  (token, email, employeesData) => async (dispatch) => {
    try {
      const data = await BasedURL.post("bulkSalaryPayment.php", {
        companyToken: token,
        companyEmail: email,
        employees: employeesData,
      });
      dispatch({ type: "PAY_EMPLOYEE_SALARY", payLoad: data });
    } catch (error) {
      dispatch({ type: "PAY_EMPLOYEE_SALARY_ERR_MESSAGE", payLoad: error });
    }
  };

export const VerifyAccountName =
  (companyToken, bankCode, accountNumber) => async (dispatch) => {
    try {
      const data = await BasedURL.post("verifyBankAccount.php", {
        companyToken,
        bankCode,
        accountNumber,
      });
      dispatch({ type: "VERIFY_ACCOUNT_NUMBER", payLoad: data });
    } catch (error) {
      dispatch({ type: "VERIFY_ACCOUNT_NUMBER_ERR_MESSAGE", payLoad: error });
    }
  };

export const AccountName = async({userToken, bankCode,accountNumber}, funct=(res,error)=> {} ) => {
  try {
    const data = await BasedURL.post("verifyBankAccount.php", {
      userToken,
      bankCode,
      accountNumber,
    });
  funct(data,false)
  } catch (error) {
    console.log(error);
    funct(error, true)
  }
  }
 


export const SignupRequest = (values, callback=(res)=> {}) => async (dispatch) => {
  const { firstName, lastName, phoneNumber, emailAddress, password } = values;
  try {
    const data = await BasedURL.post("userRegistration.php", {
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      password
    });
    callback(data)
    dispatch({ type: "USER_REGISTRATION", payLoad: data });
  } catch (error) {
    dispatch({ type: "USER_REGISTRATION_ERR_MESSAGE", payLoad: error });
  }
}

export const SignupVerification = (values, callback = (res) => { }) => async (dispatch) => {
  const { otpNumber, email } = values;

  try {
    const data = await BasedURL.post("userAccountVerification.php", {
      email_phone:email,
      verification_code: otpNumber
    });

    callback(data)
    dispatch({ type: "USER_VERIFICATION", payLoad: data });
  } catch (error) {
    dispatch({ type: "USER_VERIFICATION_ERR_MESSAGE", payLoad: error });
  }
}


export const ResendSignupOtp = async (email, callback = (res) => { }) => {
  try {
    
    const data = await BasedURL.post("resendUserAccountVerificationCode.php", {
      email_phone: email,
    });
    callback(data)

  } catch (error) {
  
  }
}

export const EmailLogicRequest = (values, callback = (res) => { }) => async (dispatch) => {
  const { email_phone } = values;
  
  try {
    const data = await BasedURL.post("userEmailLogin.php", {
      email_phone
    
    });

    dispatch({ type: "EMAIL_LOGIN" });
    if (data) {
      const { success, error, email_address } = data.data;
      console.log(data)
      if (error) {
        dispatch({ type: "LOGIN_ERROR_RESPONSE", payLoad: error });
      } else if (success) {
        dispatch({ type: "LOGIN_SUCCESS_RESPONSE", payLoad: email_address });
      }
    }

  } catch (error) {
    dispatch({ type: "EMAIL_LOGIN_ERR_MESSAGE", payLoad: error });
  }
}

export const PasswordLogicRequest = (values) => async (dispatch) => {  
  console.log(values)
  try {
    const data = await BasedURL.post("userPasswordLogin.php", {...values});

    dispatch({ type: "PASSWORD_LOGIN" });
    if (data) {
      const { success, error, user_token } = data.data;
      if (error) {
        dispatch({ type: "PASSWORD_ERROR_RESPONSE", payLoad: error });
      } else if (success) {
        
        dispatch({ type: "PASSWORD_SUCCESS_RESPONSE", payLoad: user_token });
      }
    }
  } catch (error) {
    dispatch({ type: "PASSWORD_LOGIN_ERR_MESSAGE", payLoad: error });
  }
};



export const RegisterBusiness = (values) => async (dispatch) =>
{
  
  console.log(values);
  try {
    const data = await BasedURL.post("registerBusiness.php", { ...values });

    dispatch({ type: "REGISTER_BUSINESS" });

    if (data) {
      const { success, error, businessToken } = data.data;
      if (error) {
        dispatch({ type: "REGISTER_BUSINESS_ERROR_RESPONSE", payLoad: error });
      } else if (success) {
        
        dispatch({ type: "REGISTER_BUSINESS_SUCCESS_RESPONSE", payLoad: businessToken });
      }
    }
  } catch (err) {
    dispatch({ type: "REGISTER_BUSINESS_ERR_MESSAGE", payLoad: err });
  }
};

export const GetRegisteredBusiness = (values) => async (dispatch) =>
{
  try {
    const data = await BasedURL.post("fetchUserBusinesses.php", { ...values });

    dispatch({ type: "REGISTERED_BUSINESS" });

    if (data) {
      const { success, error } = data.data;
      if (error) {
        dispatch({ type: "REGISTERED_BUSINESS_ERROR_RESPONSE", payLoad: error });
      } else if (success) {
        
        dispatch({ type: "REGISTERED_BUSINESS_SUCCESS_RESPONSE", payLoad: success });
      }
    }
  } catch (err) {
    dispatch({ type: "REGISTERED_BUSINESS_ERR_MESSAGE", payLoad: err });
  }
};
