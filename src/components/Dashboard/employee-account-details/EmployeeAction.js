import swal from "sweetalert";
import BaseURL from "../../../Actions/BasedURL";

export const RegisterEmployee =
	(values, token, accountVerified) => async (dispatch) => {
		const {
			employeeFirstname,
			employeeLastname,
			employeeEmail,
			employeeAnnualGrossSalary,
			employeeRole,
			employeeDepartment,
			employeeRelives,
			employeeTin,
			employeePhoneNumber,
			employeeState,
			businessToken,
			userToken,
			// accountName,
			// accountNumber,
			employeeAccountNumber,
			employeeAccountName,
			bankcode,
			filterBank,
		} = values;
		try {
			const data = await BaseURL.post("/registerEmployee.php", {
				employeeFirstname,
				employeeLastname,
				employee_email: employeeEmail,
				employeeRole,
				employeeState,
				employeeDepartment,
				employeeRelieves: employeeRelives,
				employeeTin,
				businessToken,
				userToken,
				employeeAccountName,
				employeePhoneNumber: employeePhoneNumber,
				employeeAccountNumber,
				employeeBankName: filterBank,
				employeeBankCode: bankcode,
				employeeAgs: employeeAnnualGrossSalary,
				employeeMgs: employeeAnnualGrossSalary / "12",
				employeePensionCode: "",
				employeeHousingCode: "",
				employeeNsitfCode: "",
				employeeHealthCode: "",
				employeeCoopCode: "",
			});
			dispatch({ type: "REGISTER_EMPLOYEE" });
			if (data) {
				const { error, success } = data.data;
				if (error) {
					dispatch({ type: "REGISTER_EMPLOYEE_ERROR" });
					swal(error, error, "error");
				} else if (success) {
					dispatch({ type: "REGISTER_EMPLOYEE_SUCCESS" });
					swal(success, success, "success");
				}
			}
		} catch (error) {
			swal.error("error", error, "error");
		}
	};
