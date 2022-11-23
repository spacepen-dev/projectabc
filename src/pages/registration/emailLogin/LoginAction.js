import swal from "sweetalert";
import BaseURL from "../../../Actions/BasedURL";
import { LOGIN_INIT } from "../../../reducer/reducer-init-value";

export const EmailLogicRequest = (values) => async (dispatch) => {
	const { email_phone } = values;

	try {
		const data = await BaseURL.post("userEmailLogin.php", {
			email_phone,
		});

		dispatch({ type: "EMAIL_LOGIN" });
		if (data) {
			const { success, error, email_address } = data.data;
			if (error) {
				swal(error, error, "error");
			} else if (success) {
				dispatch({ type: "LOGIN_SUCCESS_RESPONSE", payLoad: email_address });
			}
		}
	} catch (error) {
		swal(error, error.message, "error");
	}
};

export const LoginReducers = (state = LOGIN_INIT, action) => {
	switch (action.type) {
		case "EMAIL_LOGIN":
			return { ...state, isLoading: true };
		case "LOGIN_SUCCESS_RESPONSE":
			return {
				...state,
				isLoading: false,
				loginError: false,
				LoginNetworkError: false,
				loginSuccess: true,
				loginMessage: action.payLoad,
			};
		case "LOGIN_ERROR_RESPONSE":
			return {
				...state,
				isLoading: false,
				loginError: true,
				loginSuccess: false,
				loginNetworkError: false,
				loginMessage: action.payLoad,
			};
		case "EMAIL_LOGIN_ERR_MESSAGE":
			return {
				...state,
				isLoading: false,
				loginNetworkError: true,
				loginError: false,
				loginSuccess: false,
				loginMessage: action.payLoad,
			};
		default:
			return state;
	}
};
