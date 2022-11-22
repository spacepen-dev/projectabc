import { combineReducers } from "redux";
import DashboardReducer, {CompanyDetailsReducers, FetchWalletHistory, FetchBusinessDepartment, FetchSalaryHistory, FetchTaxHistory} from "./DashboardReducer";
import UserRegistration from './UserRegistration'
import BusinessRegistration, {FetchRegisteredBusinessList} from "./RegisterBusiness";
import AddDepartment from "./AddDepartment";
import { LoginReducers, PasswordLoginReducers, AddEmployeeReducer, UpdateEmployeeReducer } from "./LoginReducers";
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
