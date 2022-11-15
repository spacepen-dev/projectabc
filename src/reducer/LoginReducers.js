const loginInit = {
    isLoading:false,
    loginError: false,
    loginSuccess: false,
    LoginMessage: '',
    LoginNetworkerror:false
}

export const LoginReducers = (state = loginInit, action) => {
    switch (action.type) {
        case 'EMAIL_LOGIN':
            return { ...state, isLoading: true }
        case 'LOGIN_SUCCESS_RESPONSE':
            return { ...state, isLoading: false, loginError:false, LoginNetworkError:false, loginSuccess: true, loginMessage: action.payLoad }
        case "LOGIN_ERROR_RESPONSE":
            return { ...state, isLoading: false, loginError: true,loginSuccess:false, loginNetworkError:false, loginMessage: action.payLoad }
        case 'EMAIL_LOGIN_ERR_MESSAGE':
            return { ...state, isLoading: false, loginNetworkError: true, loginError:false, loginSuccess:false, loginMesssage: action.payLoad }
        default:
            return state;
    }
};

const passwordInit = {
    passwordError: false,
    passwordSuccess: false,
    passwordNetworkError: false,
    passwordMessage: '',
    
}

export const PasswordLoginReducers = (state=passwordInit, action) => {
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