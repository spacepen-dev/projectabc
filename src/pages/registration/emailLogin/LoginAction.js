import swal from "sweetalert";
import BaseURL from "../../../Actions/BasedURL";
import { LOGIN_INIT } from "../../../reducer/reducer-init-value";

export const EmailLogicRequest = (values) => async (dispatch) => {
	const { email_phone } = values;

	try {
		const data = await BaseURL.post("userEmailLogin.php", {
			email_phone,
		});

		if (data) {
            const { success, error, emailAddress } = data.data;
						console.log(emailAddress);

						if (error) {
							dispatch({
								type: "LOGIN_ERROR_RESPONSE",
								payLoad: error,
							});

							swal(error, error, "error");
						} else if (success) {
							dispatch({
								type: "LOGIN_SUCCESS_RESPONSE",
								payLoad: emailAddress,
							});
						}
		}
	} catch (err) {
		swal("Oops!", err.message, "error");
		dispatch({
			type: "EMAIL_LOGIN_ERR_MESSAGE",
			payLoad: err.message,
		});
	}
};

export const LoginReducers = (state = LOGIN_INIT, action) => {
	switch (action.type) {
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
