import { combineReducers } from "redux";
import DashboardReducer, {CompanyDetailsReducers, FetchWalletHistory, FetchBusinessDepartment, FetchSalaryHistory, FetchTaxHistory} from "./DashboardReducer";
import UserRegistration from './UserRegistration'
import { AddDepartment } from "../pages/business-registration/add-department/DepartmentAction";
import BusinessRegistration, {
	FetchRegisteredBusinessList,
} from "./RegisterBusiness";
import { AddEmployeeReducer, UpdateEmployeeReducer } from "./LoginReducers";
import { PasswordLoginReducers } from "../pages/registration/loginpassword/LoginAction";
import { LoginReducers } from "../pages/registration/emailLogin/LoginAction";
// import AppReducers from "./AppReducers";

export default combineReducers({
  DashboardReducer,
  UserRegistration,
  BusinessRegistration,
  AddDepartment,
  LoginReducers,
  PasswordLoginReducers,
  FetchRegisteredBusinessList,
  CompanyDetailsReducers,
  FetchBusinessDepartment,
  FetchWalletHistory,
  FetchSalaryHistory,
  FetchTaxHistoryReducer: FetchTaxHistory,
  AddEmployeeReducer,
  UpdateEmployeeReducer
  // AppReducers,
  // form: formReducer,
});
