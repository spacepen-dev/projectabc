import { ADD_EMPLOYEE_REDUCER, EDIT_EMPLOYEE_REDUCER, LOGIN_INIT, PASSWORD_INIT } from "./reducer-init-value";








/********************REGISTER EMPLOYEE REDUCER********************** */


export const AddEmployeeReducer = (state=ADD_EMPLOYEE_REDUCER, action) => {
    switch (action.type) {
        case 'REGISTER_EMPLOYEE':
            return { ...state, isLoading: true }
        case 'REGISTER_EMPLOYEE_SUCCESS':
            return { ...state, isLoading: false, registerError:false, registerNetworkError:false, registerSuccess: true, registerMessage: action.payLoad }
        case "REGISTER_EMPLOYEE_ERROR":
            return { ...state, isLoading: false, registerError: true,registerSuccess:false, registerNetworkError:false, registerMessage: action.payLoad }
        case 'REGISTER_EMPLOYEE_ERR_MESSAGE':
            return { ...state, isLoading: false, registerNetworkError: true, registerError:false, registerSuccess:false, registerMessage: action.payLoad }
        default:
            return state;
    }
}

/********************UPDATE EMPLOYEE REDUCER********************** */


export const UpdateEmployeeReducer = (state =
    EDIT_EMPLOYEE_REDUCER, action) => {
    switch (action.type) {
        case 'EDIT_EMPLOYEE':
            return { ...state, isLoading: true }
        case 'EDIT_EMPLOYEE_SUCCESS':
            return { ...state, isLoading: false,editError:false, editNetworkError:false, editSuccess: true, editMessage: action.payLoad }
        case "EDIT_EMPLOYEE_ERROR":
            return { ...state, isLoading: false, editError: true,editSuccess:false, editNetworkError:false, editMessage: action.payLoad }
        case 'EDIT_EMPLOYEE_ERR_MESSAGE':
            return { ...state, isLoading: false, editNetworkError: true, editError:false, editSuccess:false, editMessage: action.payLoad }
        default:
            return state;
    }
}