import BaseURL from "../../../Actions/BasedURL";
import { TAX_INIT } from "../../../reducer/reducer-init-value";

export const FetchTaxHistory = (values) => async (dispatch) => {
	try {
		const data = await BaseURL.post("/fetchTaxHistory.php", { ...values });
		dispatch({ type: "FETCH_TAX_HISTORY", payLoad: data });
		if (data) {
			const { success, error } = data.data;
			if (error) {
				dispatch({ type: "FETCH_TAX_HISTORY_ERROR", payLoad: error });
			} else if (success) {
				dispatch({ type: "FETCH_TAX_HISTORY_SUCCESS", payLoad: success });
			}
		}
	} catch (error) {
		dispatch({ type: "FETCH_TAX_HISTORY_ERR_MESSAGE", payLoad: error });
	}
};

export const FetchTaxHistoryReducer = (state = TAX_INIT, action) => {
	switch (action.type) {
		case "FETCH_TAX_HISTORY":
			return { ...state };
		case "FETCH_TAX_HISTORY_SUCCESS":
			return {
				...state,
				success: true,
				error: false,
				networkError: false,
				message: "",
				Data: action.payLoad,
			};

		case "FETCH_TAX_HISTORY_ERROR":
			return {
				...state,
				success: false,
				error: true,
				networkError: false,
				message: action.payLoad,
				Data: [],
			};

		case "FETCH_TAX_HISTORY_ERR_MESSAGE":
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
