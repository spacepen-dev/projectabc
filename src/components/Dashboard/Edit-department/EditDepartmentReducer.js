import swal from "sweetalert";
import BaseURL from "../../../Actions/BasedURL";


export const EditDepartment =
  (values) => async (dispatch) => {
    try {
        const data = await BaseURL.post("/registerDepartment.php", { ...values });
        if (data) {
            const { success, error } = data.data; 
            if (success) {
                swal('Success', 'Business department added successfully', 'success');
                
            } else if (error) {
                swal('Error', error, 'error');
            }
        }
    } catch (error) {
        
        swal('Error', error.message, 'error');
    }
    };
  