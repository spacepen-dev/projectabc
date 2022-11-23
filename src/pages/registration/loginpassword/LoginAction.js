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
				swal(error, error, "error");
			} else if (success) {
				dispatch({ type: "PASSWORD_SUCCESS_RESPONSE", payLoad: user_token });
			}
		}
	} catch (error) {
		swal(error, error.message, "error");
	}
};

/*******************PASSWORD LOGIN REDUCER********************** */
export const PasswordLoginReducers = (state = PASSWORD_INIT, action) => {
	switch (action.type) {
		case "PASSWORD_SUCCESS_RESPONSE":
			return {
				...state,
				isLoading: false,
				passwordError: false,
				passwordNetworkError: false,
				passwordSuccess: true,
				passwordMessage: action.payLoad,
			};
		default:
			return state;
	}
};
