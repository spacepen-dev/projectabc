import swal from "sweetalert";
import BaseURL from "../../../Actions/BasedURL";

const Types = {
	SUCCESS: "FETCH_COMPANY_EMPLOYEE_SUCCESS",
	ERROR: "FETCH_COMPANY_EMPLOYEE_ERROR",
	NETWORK: "FETCH_COMPANY_EMPLOYEE_ERR_MESSAGE",
	DELETE_SUCCESS: "DELETE_EMPLOYEE_SUCCESS",
	DELETE_ERROR: "DELETE_EMPLOYEE_ERROR",
	DELETE_NETWORK: "DELETE_EMPLOYEE_ERR_MESSAGE",
};

const FETCH_EMPLOYEE_INIT = {
	success: false,
	error: false,
	message: "",
	Data: [],
	networkError: false,
};

const DELETE_EMPLOYEE_INIT = {
	success: false,
	error: false,
	message: "",
	networkError: false,
};

export const FetchCompanyEmployee = (values) => async (dispatch) => {
	try {
		const data = await BaseURL.post("/fetchBusinessEmployee.php", {
			...values,
		});
		if (data) {
			const { error, success } = data.data;
			if (error) {
				dispatch({ type: "FETCH_COMPANY_EMPLOYEE_ERROR", payLoad: error });
			} else if (success) {
				dispatch({ type: "FETCH_COMPANY_EMPLOYEE_SUCCESS", payLoad: success });
			}
		}
	} catch (error) {
		dispatch({ type: "FETCH_COMPANY_EMPLOYEE_ERR_MESSAGE", payLoad: error });
	}
};

export const FetchEmployeeReducer = (state = FETCH_EMPLOYEE_INIT, action) => {
	switch (action.type) {
		case Types.SUCCESS:
			return {
				...state,
				success: true,
				error: false,
				networkError: false,
				Data: action.payLoad,
				message: "",
			};
		case Types.ERROR:
			return {
				...state,
				success: false,
				error: true,
				networkError: false,
				message: action.payLoad,
				Data: [],
			};
		case Types.NETWORK:
			return {
				...state,
				success: false,
				error: false,
				networkError: true,
				message: action.payLoad,
				Data: [],
			};

		default:
			return state;
	}
};

/************DELETE EMPLOYEE DATA******************/

export const DeleteEmployeeAction = (values) => async (dispatch) => {
	try {
		const data = await BaseURL.post("/deleteEmployee.php", { ...values });
		if (data) {
			const { error, success } = data.data;
			if (error) {
				swal(error, error, "error");

				dispatch({ type: Types.DELETE_ERROR, payLoad: error });
			} else if (success) {
				swal(success, success, "success");
				dispatch({ type: Types.DELETE_SUCCESS, payLoad: error });
			}
		}
	} catch (err) {
		swal(err, err.message, "error");

		dispatch({ type: Types.NETWORK, payLoad: err.message });
	}
};

export const DeleteEmployeeReducer = (state = DELETE_EMPLOYEE_INIT, action) => {
	switch (action.type) {
		case Types.DELETE_SUCCESS:
			return {
				...state,
				success: true,
				error: false,
				networkError: false,
				Data: action.payLoad,
				message: action.payLoad,
			};
		case Types.DELETE_ERROR:
			return {
				...state,
				success: false,
				error: true,
				networkError: false,
				message: action.payLoad,
			};
		case Types.DELETE_NETWORK:
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
