import { ADD_EMPLOYEE_REDUCER, EDIT_EMPLOYEE_REDUCER, LOGIN_INIT, PASSWORD_INIT } from "./reducer-init-value";


/*******************EMAIL LOGIN REDUCER ********************** */

export const LoginReducers = (state = LOGIN_INIT, action) => {
    switch (action.type) {
        case 'EMAIL_LOGIN':
            return { ...state, isLoading: true }
        case 'LOGIN_SUCCESS_RESPONSE':
            return { ...state, isLoading: false, loginError:false, LoginNetworkError:false, loginSuccess: true, loginMessage: action.payLoad }
        case "LOGIN_ERROR_RESPONSE":
            return { ...state, isLoading: false, loginError: true,loginSuccess:false, loginNetworkError:false, loginMessage: action.payLoad }
        case 'EMAIL_LOGIN_ERR_MESSAGE':
            return { ...state, isLoading: false, loginNetworkError: true, loginError:false, loginSuccess:false, loginMessage: action.payLoad }
        default:
            return state;
    }
};


/*******************PASSWORD LOGIN REDUCER********************** */
export const PasswordLoginReducers = (state=PASSWORD_INIT, action) => {
    switch (action.type) {
        case 'PASSWORD_LOGIN':
            return { ...state, isLoading: true }
        case 'PASSWORD_SUCCESS_RESPONSE':
            return { ...state, isLoading: false, passwordError:false, passwordNetworkError:false, passwordSuccess: true, passwordMessage: action.payLoad }
        case "PASSWORD_ERROR_RESPONSE":
            return { ...state, isLoading: false, passwordError: true,passwordSuccess:false, passwordNetworkError:false, passwordMessage: action.payLoad }
        case 'PASSWORD_LOGIN_ERR_MESSAGE':
            return { ...state, isLoading: false, passwordNetworkError: true, passwordError:false, passwordSuccess:false, passwordMessage: action.payLoad }
        default:
            return state;
    }
}

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