import swal from "sweetalert";
import BaseURL from "../../../Actions/BasedURL";

export const UpdateCompanyDetails = (values) => async (dispatch) => {
    try {
        const data = await BaseURL.post("/updateCompanyAccount.php", { ...values });
        if (data) {
            const { error, success } = data.data;
            if (success) {
             swal('Success', success, 'success');
             
            } else if (error) {
                swal('Error', error, 'error');
                
            }
        }
    } catch (error) {
        swal('Error', error.message, 'error');

    }
  };