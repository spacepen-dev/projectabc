let InitialState = {
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
  removeEmployee: null,
  removeEmployeeErr: "",
};

const DashboardReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "COMPANY-DETAILS":
      return { ...state, dashboardDetails: action.payLoad };
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
    default:
      return state;
  }
};

export default DashboardReducer;
