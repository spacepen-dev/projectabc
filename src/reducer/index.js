import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import RegistrationReducer from "./RegistrationReducer";

export default combineReducers({
  RegistrationReducer,
  form: formReducer,
});
