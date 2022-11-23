import { combineReducers } from "redux";
import DashboardReducer, {
	CompanyDetailsReducers,
	FetchWalletHistory,
	FetchBusinessDepartment,
	FetchSalaryHistory,
} from "./DashboardReducer";
import UserRegistration from './UserRegistration'
import { AddDepartment } from "../pages/business-registration/add-department/DepartmentAction";
import { FetchRegisteredBusinessList } from "./RegisterBusiness";
import { BusinessRegistration } from "../pages/business-registration/bank-details/DetailsAction";
import { AddEmployeeReducer, UpdateEmployeeReducer } from "./LoginReducers";
import { PasswordLoginReducers } from "../pages/registration/loginpassword/LoginAction";
import { LoginReducers } from "../pages/registration/emailLogin/LoginAction";
import { FetchTaxHistoryReducer } from "../components/Dashboard/tax-history/TaxAction";
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
	FetchTaxHistoryReducer,
	AddEmployeeReducer,
	UpdateEmployeeReducer,
	// AppReducers,
	// form: formReducer,
});
