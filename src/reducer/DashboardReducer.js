let InitialState = {
  companyDetails: {},
  companyDetailsErr: "",
  dashboardDetails: {},
  registerEmployees: null,
  updateEmployee: null,
  registerEmployeeErr: "",
  updateEmployeeErr: "",
  fetchDepartment: [],
  fetchDepartmentErr: "",
  accountTopUp: null,
  accountTopUpErr: "",
  verifyTopUp: null,
  verifyTopUpErr: "",
  companyEmployee: {},
  companyEmployeeErr: "",
  companyWallet: {},
  companyWalletErr: "",
  companySalary: {},
  companySalaryErr: "",
  removeEmployee: null,
  removeEmployeeErr: "",
  bankList: {},
  bankListErr: "",
  updateCompany: null,
  updateCompanyErr: "",
  resendRegistrationOtp: null,
  resendRegistrationOtpErr: "",
  resendLoginOtp: null,
  resendLoginOtpErr: "",
  editDepartment: null,
  editDepartmentErr: "",
  payEmployee: "",
  payEmployeeErr: "",
};

const DashboardReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "COMPANY_DETAILS":
      return { ...state, companyDetails: action.payLoad };
    case "COMPANY_DETAILS_ERR_MESSAGE":
      return { ...state, companyDetailsErr: action.payLoad };
    case "REGISTER_EMPLOYEE":
      return { ...state, registerEmployees: action.payLoad };
    case "REGISTER_EMPLOYEE_ERR_MESSAGE":
      return { ...state, registerEmployeeErr: action.payLoad };
    case "UPDATE_EMPLOYEE":
      return { ...state, updateEmployee: action.payLoad };
    case "UPDATE_EMPLOYEE_ERR_MESSAGE":
      return { ...state, updateEmployeeErr: action.payLoad };
    case "DELETE_EMPLOYEE":
      return { ...state, removeEmployee: action.payLoad };
    case "DELETE_EMPLOYEE_ERR_MESSAGE":
      return { ...state, removeEmployeeErr: action.payLoad };
    case "FETCH_DEPARTMENT":
      return { ...state, fetchDepartment: action.payLoad };
    case "FETCH_DEPARTMENT_ERR_MESSAGE":
      return { ...state, fetchDepartment: action.payLoad };
    case "ACCOUNT_TOP_UP":
      return { ...state, accountTopUp: action.payLoad };
    case "ACCOUNT_TOP_UP_ERR_MESSAGE":
      return { ...state, accountTopUpErr: action.payLoad };
    case "VERIFY_TOP_UP":
      return { ...state, verifyTopUp: action.payLoad };
    case "VERIFY_TOP_UP_ERR_MESSAGE":
      return { ...state, verifyTopUpErr: action.payLoad };
    case "FETCH_COMPANY_EMPLOYEE":
      return { ...state, companyEmployee: action.payLoad };
    case "FETCH_COMPANY_EMPLOYEE_ERR_MESSAGE":
      return { ...state, companyEmployeeErr: action.payLoad };
    case "FETCH_WALLET_HISTORY":
      return { ...state, companyWallet: action.payLoad };
    case "FETCH_WALLET_HISTORY_ERR_MESSAGE":
      return { ...state, companyWalletErr: action.payLoad };
    case "FETCH_SALARY_HISTORY":
      return { ...state, companySalary: action.payLoad };
    case "FETCH_SALARY_HISTORY_ERR_MESSAGE":
      return { ...state, companySalaryErr: action.payLoad };
    case "FETCH_BANK_LIST":
      return { ...state, bankList: action.payLoad };
    case "FETCH_BANK_LIST_ERR_MESSAGE":
      return { ...state, bankListErr: action.payLoad };
    case "UPDATE_COMPANY_DETAILS":
      return { ...state, updateCompany: action.payLoad };
    case "UPDATE_COMPANY_DETAILS_ERR_MESSAGE":
      return { ...state, updateCompanyErr: action.payLoad };
    case "RESEND_REGISTRATION_OTP":
      return { ...state, resendRegistrationOtp: action.payLoad };
    case "RESEND_REGISTRATION_OTP_ERR_MESSAGE":
      return { ...state, resendRegistrationOtpErr: action.payLoad };
    case "RESEND_LOGIN_OTP":
      return { ...state, resendLoginOtp: action.payLoad };
    case "RESEND_LOGIN_OTP_ERR_MESSAGE":
      return { ...state, resendLoginOtpErr: action.payLoad };
    case "EDIT_DEPARTMENT":
      return { ...state, editDepartment: action.payLoad };
    case "EDIT_DEPARTMENT_ERR_MESSAGE":
      return { ...state, editDepartmentErr: action.payLoad };
    case "PAY_EMPLOYEE_SALARY":
      return { ...state, payEmployee: action.payLoad };
    case "PAY_EMPLOYEE_SALARY_ERR_MESSAGE":
      return { ...state, payEmployeeErr: action.payLoad };
    default:
      return state;
  }
};

export default DashboardReducer;
