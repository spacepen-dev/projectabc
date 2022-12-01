import swal from "sweetalert";
import BaseURL from "../../../Actions/BasedURL";

const PAY_EMPLOYEE_INIT = {
	success: false,
	error: false,
	message: "",
	networkError: false,
};

const Types = {
	SUCCESS: "PAY_EMPLOYEE_SALARY_SUCCESS",
	ERROR: "PAY_EMPLOYEE_SALARY_ERROR",
	NETWORK: "PAY_EMPLOYEE_SALARY_ERR_MESSAGE",
};

// PAY SALARY ACTION CREATOR
export const PayEmployeeSalary = (values) => async (dispatch) => {
	try {
		const data = await BaseURL.post("bulkSalaryPayment.php", { ...values });
		if (data) {
			const { success, error } = data.data;
			if (error) {
				swal(error, error, "error");
				dispatch({ type: Types.ERROR, payLoad: error });
			} else if (success) {
				swal(success, success, "success");
				dispatch({ type: Types.SUCCESS, payLoad: success });
			}
		}
	} catch (err) {
		swal(err, err.message, "error");
		dispatch({ type: Types.NETWORK, payLoad: err.message });
	}
};

export const PayEmployeeReducer = (state = PAY_EMPLOYEE_INIT, action) => {
	switch (action.type) {
		case Types.SUCCESS:
			return {
				...state,
				success: true,
				error: false,
				networkError: true,
				message: action.payLoad,
			};
		case Types.ERROR:
			return {
				...state,
				success: false,
				error: true,
				networkError: false,
				message: action.payLoad,
			};
		case Types.NETWORK:
			return {
				...state,
				success: false,
				error: false,
				networkError: true,
				message: action.payLoad,
			};

		default:
			return state;
	}
};
