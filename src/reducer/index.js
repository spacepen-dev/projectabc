import { combineReducers } from "redux";
import RegistrationReducer from "./RegistrationReducer";
import DashboardReducer from "./DashboardReducer";
import UserRegistration from './UserRegistration'
import BusinessRegistration from "./RegisterBusiness";
import AddDepartment from "./AddDepartment";
import { LoginReducers,PasswordLoginReducers } from "./LoginReducers";
// import AppReducers from "./AppReducers";

export default combineReducers({
  RegistrationReducer,
  DashboardReducer,
  UserRegistration,
  BusinessRegistration,
  AddDepartment,
  LoginReducers,
  PasswordLoginReducers
  
  // AppReducers,
  // form: formReducer,
});
