import {COMPANY_DETAILS_INIT, DEPARTMENT_INIT, SALARY_INIT, TAX_INIT, WALLET_INIT } from "./reducer-init-value";

let InitialState = {
  dashboardDetails: {},
  registerEmployees: null,
  updateEmployee: null,
  registerEmployeeErr: "",
  updateEmployeeErr: "",
  accountTopUp: null,
  accountTopUpErr: "",
  verifyTopUp: null,
  verifyTopUpErr: "",
  companyEmployee: {},
  companyEmployeeErr: "",
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
  verifyNumber: {},
  verifyNumberErr: "",
};


/************************FETCH COMPANY DETAILS REDUCERS********************** */

export const CompanyDetailsReducers = (state=COMPANY_DETAILS_INIT , action) => {
  switch (action.type) {
    case 'COMPANY_DETAILS':
      return { ...state };
    case 'COMPANY_DETAILS_SUCCESS':
      return { ...state, companySuccessRes: true, Data: action.payLoad, companyErrorRes: false, companyNetworkErrorRes: false, companyMessage: '' };
    case 'COMPANY_DETAILS_ERROR':
      return { ...state, companySuccessRes: false, Data: {}, companyErrorRes: true, companyNetworkErrorRes: false, companyMessage: action.payLoad };
    
    case 'COMPANY_DETAILS_ERR_MESSAGE':
      return { ...state, companySuccessRes: false, Data: {}, companyErrorRes: false, companyNetworkErrorRes: true, companyMessage: action.payLoad };
    
    default: return state;
  
  }
}


/**********************FETCH WALLET HISTORY REDUCERS******************************* */

export const FetchWalletHistory = (state=WALLET_INIT, action) => {
  switch (action.type) {
    case "FETCH_WALLET_HISTORY":
      return { ...state, Data: action.payLoad };
    case "FETCH_WALLET_HISTORY_SUCCESS":
      return { ...state, success: true, error:false, networkError:false, message:'', Data: action.payLoad };
      
    case "FETCH_WALLET_HISTORY_ERROR":
      return { ...state, success: false, error:true, networkError:false, walletMessage:action.payLoad, Data: [] };
      
    case "FETCH_WALLET_HISTORY_ERR_MESSAGE":
      return { ...state, success: false, error:false, networkError:true, message:action.payLoad, Data: [] };
  
    default:
      return state;
  }
}


/**********************FETCH BUSINESS DEPARTMENT REDUCERS******************************/

export const FetchBusinessDepartment = (state = DEPARTMENT_INIT, action) => {
  switch (action.type) {
    case "FETCH_DEPARTMENT":
      return { ...state, Data: action.payLoad };
    case "FETCH_DEPARTMENT_SUCCESS":
      return { ...state, departmentSuccess: true, departmentError: false, departmentNetworkError: false, departmentMessage: '', Data: action.payLoad };
      
    case "FETCH_DEPARTMENT_ERROR":
      return { ...state, departmentSuccess: false, departmentError: true, departmentNetworkError: false, departmentMessage: action.payLoad, Data: [] };
      
    case "FETCH_DEPARTMENT_ERR_MESSAGE":
      return { ...state, departmentSuccess: false, departmentError: false, departmentNetworkError: true, departmentMessage: action.payLoad, Data:[] };
  
    default:
      return state;
  };
};

/**********************FETCH SALARY HISTORY REDUCERS******************************/

export const FetchSalaryHistory = (state=SALARY_INIT, action) => {
  switch (action.type) {
    case "FETCH_SALARY_HISTORY":
      return { ...state };
    case "FETCH_SALARY_HISTORY_SUCCESS":
      return { ...state, success: true,error:false, networkError:false, message:'', Data: action.payLoad };
      
    case "FETCH_SALARY_HISTORY_ERROR":
      return { ...state, success: false, error:true, networkError:false, message:action.payLoad, Data: [] };
      
    case "FETCH_SALARY_HISTORY_ERR_MESSAGE":
      return { ...state, success: false, error:false, networkError:true, message:action.payLoad, Data: [] };
  
    default:
      return state;
  }
}

/**********************FETCH ACCOUNT HISTORY REDUCERS******************************/

export const FetchTaxHistory = (state=TAX_INIT, action) => {
  switch (action.type) {
    case "FETCH_TAX_HISTORY":
      return { ...state, };
    case "FETCH_TAX_HISTORY_SUCCESS":
      return { ...state, success: true, error:false, networkError:false, message:'', Data: action.payLoad };
      
    case "FETCH_TAX_HISTORY_ERROR":
      return { ...state, success: false, error:true, networkError:false, message:action.payLoad, Data: [] };
      
    case "FETCH_TAX_HISTORY_ERR_MESSAGE":
      return { ...state, success: false, error:false, networkError:true, message:action.payLoad, Data: [] };
  
    default:
      return state;
  }
}


const DashboardReducer = (state = InitialState, action) => {
  switch (action.type) {
  
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
    case "VERIFY_ACCOUNT_NUMBER":
      return { ...state, verifyNumber: action.payLoad };
    case "VERIFY_ACCOUNT_NUMBER_ERR_MESSAGE":
      return { ...state, verifyNumberErr: action.payLoad };
    default:
      return state;
  }
};

export default DashboardReducer;
