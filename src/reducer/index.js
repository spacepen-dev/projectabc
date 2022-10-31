import { combineReducers } from "redux";
import RegistrationReducer from "./RegistrationReducer";
import DashboardReducer from "./DashboardReducer";
// import AppReducers from "./AppReducers";

export default combineReducers({
  RegistrationReducer,
  DashboardReducer,
  // AppReducers,
  // form: formReducer,
});
