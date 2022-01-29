import { combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";
// import { form as formReducer } from "react-final-form";
import RegistrationReducer from "./RegistrationReducer";
import DashboardReducer from "./DashboardReducer";

export default combineReducers({
  RegistrationReducer,
  DashboardReducer,
  // form: formReducer,
});
