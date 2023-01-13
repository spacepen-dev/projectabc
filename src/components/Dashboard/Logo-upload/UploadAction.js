// url: `https://haypex.com.ng/dev/ABC/aimienpay_temp/uploadBusinessLogo.php/${bizToken}/${token}`

import swal from "sweetalert";
import BaseURL from "../../../Actions/BasedURL";

const Types = {
	SUCCESS: "UPLOAD_LOGO_SUCCESS",
	ERROR: "UPLOAD_LOGO_ERROR",
	NETWORK: "UPLOAD_LOGO_ERR_MESSAGE",
};

const InitialValue = {
	success: false,
	error: false,
	network: false,
	message: "",
};

export const UploadImage = (values) => async (dispatch) => {
	console.log(values);
	try {
		const data = await BaseURL.post(
			"https://haypex.com.ng/dev/ABC/aimienpay_live/uploadBusinessLogo.php",
			{
				...values,
			}
		);
		if (data) {
			const { error, success } = data.data;
			if (error) {
				swal(error, error, "error");
				dispatch({ type: Types.ERROR, payLoad: error });
			} else if (success) {
				swal(success, success, "success");

				dispatch({ type: Types.SUCCESS, payLoad: success });
			}
		}
	} catch (err) {
		swal(err, err, "error");

		dispatch({ type: Types.NETWORK, payLoad: err.messages });
	}
};

export const UploadImageReducer = (state = InitialValue, action) => {
	switch (action.type) {
		case Types.ERROR:
			return {
				...state,
				success: false,
				error: true,
				message: action.payLoad,
				network: false,
			};
		case Types.SUCCESS:
			return {
				...state,
				success: true,
				error: false,
				network: false,
				message: action.payLoad,
			};
		case Types.NETWORK:
			return {
				...state,
				success: false,
				error: false,
				network: true,
				message: action.payLoad,
			};

		default:
			return state;
	}
};
