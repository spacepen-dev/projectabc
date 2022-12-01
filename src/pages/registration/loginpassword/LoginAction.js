import swal from "sweetalert";
import BaseURL from "../../../Actions/BasedURL";
import { PASSWORD_INIT } from "../../../reducer/reducer-init-value";

export const PasswordLogicRequest = (values) => async (dispatch) => {
	try {
		const data = await BaseURL.post("userPasswordLogin.php", { ...values });

		dispatch({ type: "PASSWORD_LOGIN" });
		if (data) {
			const { success, error, user_token } = data.data;
			if (error) {
				dispatch({
					type: "PASSWORD_ERROR_RESPONSE",
					payLoad: error,
				});

				swal(error, error, "error");
			} else if (success) {
				dispatch({
					type: "PASSWORD_SUCCESS_RESPONSE",
					payLoad: user_token,
				});
			}
		}
	} catch (error) {
		swal(error, error.message, "error");
		dispatch({ type: "PASSWORD_LOGIN_ERR_MESSAGE", payLoad: error.message });
	}
};

/*******************PASSWORD LOGIN REDUCER********************** */
export const PasswordLoginReducers = (state = PASSWORD_INIT, action) => {
	switch (action.type) {
		case "PASSWORD_LOGIN":
			return { ...state, isLoading: true };
		case "PASSWORD_SUCCESS_RESPONSE":
			return {
				...state,
				isLoading: false,
				passwordError: false,
				passwordNetworkError: false,
				passwordSuccess: true,
				passwordMessage: action.payLoad,
			};
		case "PASSWORD_ERROR_RESPONSE":
			return {
				...state,
				isLoading: false,
				passwordError: true,
				passwordSuccess: false,
				passwordNetworkError: false,
				passwordMessage: action.payLoad,
			};
		case "PASSWORD_LOGIN_ERR_MESSAGE":
			return {
				...state,
				isLoading: false,
				passwordNetworkError: true,
				passwordError: false,
				passwordSuccess: false,
				passwordMessage: action.payLoad,
			};
		default:
			return state;
	}
};
