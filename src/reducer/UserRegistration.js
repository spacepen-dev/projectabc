const initalValues = {
	signupRes: false,
	signupError: false,
	message: "",
};

const UserRegistration = (state = initalValues, action) => {
	switch (action.type) {
		case "USER_REGISTRATION":
			return { ...state, signupRes: true, message: action.payLoad };
		case "USER_REGISTRATON_ERROR_MESSAGE":
			return { ...state, signupError: true, message: action.payLoad };
		default:
			return state;
	}
};

export default UserRegistration;
