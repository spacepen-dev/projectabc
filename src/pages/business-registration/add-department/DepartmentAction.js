import swal from "sweetalert";
import BaseURL from "../../../Actions/BasedURL";

const initalValues = {
	isLoading: false,
	success: false,
	error: false,
	message: "",
	networkError: false,
};

export const SubmitDepartment = (values) => async (dispatch) => {
	try {
		const data = await BaseURL.post("/registerDepartment.php", { ...values });
		dispatch({ type: "ADD_DEPARTMENT" });
		if (data) {
			const { error, success } = data.data;
			if (error) {
				dispatch({ type: "ADD_DEPARTMENT_ERROR", payLoad: success });
				swal(error, error, "error");
			} else if (success) {
				dispatch({ type: "ADD_DEPARTMENT_SUCCESS", payLoad: success });
			}
		}
		return;
	} catch (error) {
		swal(error, error, "error");
		dispatch({ type: "ADD_DEPARTMENT_ERR_MESSAGE", payLoad: error });
	}
};

export const AddDepartment = (state = initalValues, action) => {
	switch (action.type) {
		case "ADD_DEPARTMENT":
			return { ...state, isLoading: false };
		case "ADD_DEPARTMENT_SUCCESS":
			return {
				...state,
				isLoading: false,
				success: true,
				message: action.payLoad,
			};
		case "ADD_DEPARTMENT_ERROR":
			return {
				...state,
				isLoading: false,
				error: true,
				message: action.payLoad,
			};
		case "ADD_DEPARTMENT_ERR_MESSAGE":
			return {
				...state,
				isLoading: false,
				networkError: true,
				message: action.payLoad,
			};
		default:
			return state;
	}
};
