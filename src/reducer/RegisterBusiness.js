const initalValues = {
    isLoading: false,
success: false,
    error: false,
    message: '',
    networkError: false
}


const BusinessRegistration = (state = initalValues, action) => {
    switch (action.type) {
        case 'REGISTER_BUSINESS':
            return { ...state, isLoading: true }
        case 'REGISTER_BUSINESS_SUCCESS_RESPONSE':
            return { ...state, isLoading: false, error: false, networkError: false, success: true, message: action.payLoad }
        case "REGISTER_BUSINESS_ERROR_RESPONSE":
            return { ...state, isLoading: false, error: true, success: false, networkError: false, message: action.payLoad }
        case 'REGISTER_BUSINESS_ERR_MESSAGE':
            return { ...state, isLoading: false, networkError: true, error: false, success: false, messsage: action.payLoad }
        default:
            return state;
    }
};

export default BusinessRegistration;

const init = {
    registeredRequest: true,
    registeredSuccess: false,
    registeredError: false,
    registeredNetworkError: false,
    registeredMessage: '',
    registeredData: [],

}

export const FetchRegisteredBusinessList = (state= init, action) => {
    switch (action.type) {
        case 'REGISTERED_BUSINESS':
            return { ...state,registeredRequest:false }
        case 'REGISTERED_BUSINESS_SUCCESS_RESPONSE':
            return { ...state, registeredRequest:false, registeredError: false, registeredNetworkError: false, registeredSuccess: true, registeredData: action.payLoad }
        case "REGISTERED_BUSINESS_ERROR_RESPONSE":
            return { ...state, registeredRequest:false, registeredError: true,registeredSuccess: false, registeredNetworkError: false, registeredMessage: action.payLoad }
        case 'REGISTERED_BUSINESS_ERR_MESSAGE':
            return { ...state, registeredRequest:false, registeredError: false,registeredSuccess: false, registeredNetworkError: true, registeredMessage: action.payLoad }
        default:
            return state;
    }
}