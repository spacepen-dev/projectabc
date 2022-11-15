import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function useRequest(state, to) {

    const navigate = useNavigate();

    useEffect(() => {
        if (!state) return null;
        console.log(state);
        const { success, error, networkError, message } = state;
        if (error) {
            swal("Error!", message);
        } else if (success) {
            navigate(to, { replace: true });
            console.log(success)
        } else if (networkError) {
            swal("Error!", message);
            
        };

       },[state,navigate,to])
}