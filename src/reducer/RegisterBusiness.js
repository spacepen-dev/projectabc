const init = {
	registeredRequest: true,
	registeredSuccess: false,
	registeredError: false,
	registeredNetworkError: false,
	registeredMessage: "",
	registeredData: [],
};

export const FetchRegisteredBusinessList = (state = init, action) => {
	switch (action.type) {
		case "REGISTERED_BUSINESS":
			return { ...state, registeredRequest: false };
		case "REGISTERED_BUSINESS_SUCCESS_RESPONSE":
			return {
				...state,
				registeredRequest: false,
				registeredError: false,
				registeredNetworkError: false,
				registeredSuccess: true,
				registeredData: action.payLoad,
			};
		case "REGISTERED_BUSINESS_ERROR_RESPONSE":
			return {
				...state,
				registeredRequest: false,
				registeredError: true,
				registeredSuccess: false,
				registeredNetworkError: false,
				registeredMessage: action.payLoad,
			};
		case "REGISTERED_BUSINESS_ERR_MESSAGE":
			return {
				...state,
				registeredRequest: false,
				registeredError: false,
				registeredSuccess: false,
				registeredNetworkError: true,
				registeredMessage: action.payLoad,
			};
		default:
			return state;
	}
};
