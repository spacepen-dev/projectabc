import axios from "axios";
import BasedURL from "./BasedURL";

/**********************NON ASYNC ACTION CREATOR*********************************/





// SUBMIT DEPARTMENT ACTION

// COMPANY DETAILS ACTION
export const CompanyDetails = (values) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/fetchUserSingleBusiness.php", { ...values });
    dispatch({ type: "COMPANY_DETAILS" });
    if (data) {
      const { error, success } = data.data;
      if (error) {
        dispatch({ type: "COMPANY_DETAILS_ERROR", payLoad: error });
      } else if (success) {        
        dispatch({ type: "COMPANY_DETAILS_SUCCESS", payLoad: success });
      }
      
    }

  } catch (error) {
    dispatch({ type: "COMPANY_DETAILS_ERR_MESSAGE", payLoad: error });
  };
};

// REGISTER EMPLOYEE ACTION




// DELETE EMPLOYEE ACTION


// FETCH DEPARTMENT ACTION
export const FetchDepartment = (values) => async (dispatch) => {
  try {
    const data = await BasedURL.post("/fetchRoleDepartment.php", { ...values });

    dispatch({ type: "FETCH_DEPARTMENT"});

    if (data) {
      const { error, success } = data.data;
      
      if (error) {
        dispatch({ type: "FETCH_DEPARTMENT_ERROR", payLoad: error });
        
      } else if (success) {
        dispatch({ type: "FETCH_DEPARTMENT_SUCCESS", payLoad: success });
        
      }
    }

  } catch (error) {
    dispatch({ type: "FETCH_DEPARTMENT_ERR_MESSAGE", payLoad: error });
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



// FETCH ACCOUNT DETAILS
export const FetchWalletHistory = (values) => async (dispatch) => {
	try {
		const data = await BasedURL.post("/fetchWalletTransactions.php", {
			...values,
		});

		if (data) {
			const { success, error } = data.data;
			if (error) {
				dispatch({ type: "FETCH_WALLET_HISTORY_ERROR", payLoad: error });
			} else if (success.length) {
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

export const bankList = async (funct = (res) => {}) => {
	const data = await axios.post("https://apws.spacepen.tech/fetchbanks.php");
	funct(data);
};
// FETCH ACCOUNT DETAILS

// TAX HISTORY ACTION CREATOR

// SALARY HISTORY ACTION CREATOR
export const FetchSalaryHistory = (value) => async (dispatch) => {
	try {
		const data = await BasedURL.post("fetchSalaryHistory.php", { ...value });

		dispatch({ type: "FETCH_SALARY_HISTORY" });

		if (data) {
			const { success, error } = data.data;
			if (error) {
				dispatch({ type: "FETCH_SALARY_HISTORY_ERROR", payLoad: error });
			} else if (success) {
				dispatch({ type: "FETCH_SALARY_HISTORY_SUCCESS", payLoad: success });
			}
		}
	} catch (error) {
		dispatch({ type: "FETCH_SALARY_HISTORY_ERR_MESSAGE", payLoad: error });
	}
};



export const VerifyAccountName =
	(businessToken, bankCode, accountNumber, userToken) => async (dispatch) => {
		try {
			const data = await BasedURL.post("verifyBankAccount.php", {
				businessToken,
				bankCode,
				accountNumber,
				userToken,
			});
			dispatch({ type: "VERIFY_ACCOUNT_NUMBER", payLoad: data });
		} catch (error) {
			dispatch({ type: "VERIFY_ACCOUNT_NUMBER_ERR_MESSAGE", payLoad: error });
		}
	};

export const AccountName = async (
	{ userToken, bankCode, accountNumber },
	funct = (res, error) => {}
) => {
	try {
		const data = await BasedURL.post("verifyBankAccount.php", {
			userToken,
			bankCode,
			accountNumber,
		});
		funct(data, false);
	} catch (error) {
		funct(error, true);
	}
};

export const SignupRequest =
	(values, callback = (res) => {}) =>
	async (dispatch) => {
		const { firstName, lastName, phoneNumber, emailAddress, password } = values;
		try {
			const data = await BasedURL.post("userRegistration.php", {
				firstName,
				lastName,
				phoneNumber,
				emailAddress,
				password,
			});
			callback(data);
			dispatch({ type: "USER_REGISTRATION", payLoad: data });
		} catch (error) {
			dispatch({ type: "USER_REGISTRATION_ERR_MESSAGE", payLoad: error });
		}
	};

export const SignupVerification =
	(values, callback = (res) => {}) =>
	async (dispatch) => {
		const { otpNumber, email } = values;

		try {
			const data = await BasedURL.post("userAccountVerification.php", {
				email_phone: email,
				verification_code: otpNumber,
			});

			callback(data);
			dispatch({ type: "USER_VERIFICATION", payLoad: data });
		} catch (error) {
			dispatch({ type: "USER_VERIFICATION_ERR_MESSAGE", payLoad: error });
		}
	};

export const ResendSignupOtp = async (email, callback = (res) => {}) => {
	try {
		const data = await BasedURL.post("resendUserAccountVerificationCode.php", {
			email_phone: email,
		});
		callback(data);
	} catch (error) {}
};

export const RegisterBusiness = (values) => async (dispatch) => {
	console.log(values);
	try {
		const data = await BasedURL.post("registerBusiness.php", { ...values });

		dispatch({ type: "REGISTER_BUSINESS" });

		if (data) {
			const { success, error, businessToken } = data.data;
			if (error) {
				dispatch({ type: "REGISTER_BUSINESS_ERROR_RESPONSE", payLoad: error });
			} else if (success) {
				dispatch({
					type: "REGISTER_BUSINESS_SUCCESS_RESPONSE",
					payLoad: businessToken,
				});
			}
		}
	} catch (err) {
		dispatch({ type: "REGISTER_BUSINESS_ERR_MESSAGE", payLoad: err });
	}
};


