import swal from "sweetalert";
import BaseURL from "../../../Actions/BasedURL";
import { SaveUserEmail } from "../../../lib/sharedfuntions";

const initalValues = {
	isLoading: false,
	success: false,
	error: false,
	message: "",
	networkError: false,
};

export const RegisterBusiness = (values) => async (dispatch) => {
	try {
		const data = await BaseURL.post("registerBusiness.php", { ...values });

		if (data) {
			const { success, error, businessToken } = data.data;
			if (error) {
				swal(error, error, "error");
				dispatch({ type: "REGISTER_BUSINESS_ERROR_RESPONSE", payLoad: error });
			} else if (success) {
				dispatch({
					type: "REGISTER_BUSINESS_SUCCESS_RESPONSE",
					payLoad: businessToken,
				});
			}
		}
	} catch (err) {
		swal("error", `${err.message}`, "error");
		dispatch({ type: "REGISTER_BUSINESS_ERR_MESSAGE", payLoad: err });
	}
};

export const BusinessRegistration = (state = initalValues, action) => {
	switch (action.type) {
		case "REGISTER_BUSINESS_SUCCESS_RESPONSE":
			return {
				...state,
				isLoading: false,
				error: false,
				networkError: false,
				success: true,
				message: action.payLoad,
			};
		case "REGISTER_BUSINESS_ERROR_RESPONSE":
			return {
				...state,
				isLoading: false,
				error: true,
				success: false,
				networkError: false,
				message: action.payLoad,
			};
		case "REGISTER_BUSINESS_ERR_MESSAGE":
			return {
				...state,
				isLoading: false,
				networkError: true,
				error: false,
				success: false,
				messsage: action.payLoad,
			};
		default:
			return state;
	}
};
