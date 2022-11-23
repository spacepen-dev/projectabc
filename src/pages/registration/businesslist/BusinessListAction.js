import swal from "sweetalert";
import BaseURL from "../../../Actions/BasedURL";

export const GetRegisteredBusiness = (values) => async (dispatch) => {
	try {
		const data = await BaseURL.post("fetchUserBusinesses.php", { ...values });

		if (data) {
			const { success, error } = data.data;
			if (error) {
				swal(error, error, "error");
				dispatch({
					type: "REGISTERED_BUSINESS_ERROR_RESPONSE",
					payLoad: error,
				});
			} else if (success) {
				dispatch({
					type: "REGISTERED_BUSINESS_SUCCESS_RESPONSE",
					payLoad: success,
				});
			}
		}
	} catch (err) {
		swal("error", err, "error");

		dispatch({ type: "REGISTERED_BUSINESS_ERR_MESSAGE", payLoad: err });
	}
};
