let InitialState = {
  dashboardDetails: {},
  registerEmployees: null,
  updateEmployee: null,
  registerEmployeeErr: "",
  updateEmployeeErr: "",
  fetchDepartment: [],
  fetchDepartmentErr: "",
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
    case "FETCH_DEPARTMENT":
      return { ...state, fetchDepartment: action.payLoad };
    case "FETCH_DEPARTMENT_ERR_MESSAGE":
      return { ...state, fetchDepartment: action.payLoad };
    default:
      return state;
  }
};

export default DashboardReducer;
