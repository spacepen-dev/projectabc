import { combineReducers } from "redux";
import RegistrationReducer from "./RegistrationReducer";
import DashboardReducer from "./DashboardReducer";
import UserRegistration from './UserRegistration'
// import AppReducers from "./AppReducers";

export default combineReducers({
  RegistrationReducer,
  DashboardReducer,
  UserRegistration
  // AppReducers,
  // form: formReducer,
});
