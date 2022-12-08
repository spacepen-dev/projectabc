import swal from "sweetalert";
import BaseURL from "../../../Actions/BasedURL";

// UPDATE EMPLOYEE DETAIL ACTION
const Types = {
	SUCCESS: "UPDATE_EMPLOYEE_SUCCESS",
	ERROR: "UPDATE_EMPLOYEE_ERROR",
	NETWORK: "UPDATE_EMPLOYEE_ERR_MESSAGE",
};

const UPDATE_INIT = {
	success: false,
	error: false,
	network: false,
	message: "",
};

export const UpdateEmployee = (values) => async (dispatch) => {
	
	const {
		employeeFirstname,
		employeeLastname,
		employeeEmail,
		employeeAnnualGrossSalary,
		employeeRole,
		employeeDepartment,
		employeeRelives,
		employeeTin,
		employeePhoneNumber,
		employeeState,
		businessToken,
		userToken,
		// accountName,
		// accountNumber,
		employeeAccountNumber,
		employeeAccountName,
		bankcode,
		filterBank,
		employeeToken,
	} = values;
	console.log(values);
	try {
		const data = await BaseURL.post("/updateEmployee.php", {
			employeeFirstname,
			employeeLastname,
			employee_email: employeeEmail,
			employeeRole,
			employeeState,
			employeeDepartment,
			employeeRelieves: employeeRelives,
			employeeTin,
			businessToken,
			userToken,
			employeeAccountName,
			employeePhoneNumber: employeePhoneNumber,
			employeeAccountNumber,
			employeeBankName: filterBank,
			employeeBankCode: bankcode,
			employeeAgs: employeeAnnualGrossSalary,
			employeeMgs: employeeAnnualGrossSalary / "12",
			employeePensionCode: "",
			employeeHousingCode: "",
			employeeNsitfCode: "",
			employeeHealthCode: "",
			employeeCoopCode: "",
			employeeToken,
		});
		if (data) {
			const { error, success } = data.data;
			if (error) {
				swal(error, error, "error");
				dispatch({ type: "UPDATE_EMPLOYEE_ERROR", payLoad: error });
			} else if (success) {
				swal(success, success, "success");
				dispatch({ type: "UPDATE_EMPLOYEE_SUCCESS", payLoad: success });
			}
		}
	} catch (err) {
		swal(err, err.message, "error");
		dispatch({ type: "UPDATE_EMPLOYEE_ERR_MESSAGE", payLoad: err.message });
	}
};

export const UpdateEmployeeReducer = (state = UPDATE_INIT, action) => {
	switch (action.type) {
		case Types.SUCCESS:
			return {
				...state,
				success: true,
				error: false,
				network: false,
				message: action.payLoad,
			};
		case Types.ERROR:
			return {
				...state,
				success: false,
				error: true,
				network: false,
				message: action.payLoad,
			};
		case Types.NETWORK:
			return {
				...state,
				success: false,
				error: false,
				network: true,
				message: action.payLoad,
			};
		default:
			return state;
	}
};
