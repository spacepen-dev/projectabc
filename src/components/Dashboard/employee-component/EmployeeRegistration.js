import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddEmployeeForm from "../AddEmployeeForm";
import useToken from "../../../hooks/useToken";
import useBusinessToken from "../../../hooks/useBusinessToken";
import EmployeeProfile from "../employee-profile";
import EmployeeSalaryInfo from "../Employee-salary";
import EmployeePension from "../Employee-pension";
import EmployeeAccountDetails from "../employee-account-details";

const EmployeeRegistration = ({
  err,
  onHandleChange,
  employeeData,
  registerEmployeeAction,
  editEmployeeAction,
  addEmployeeLink,
  editEmployeeLink,
  addEmployeeErr,
  addEmployeeSuccess,
  editEmployeeErr,
  editEmployeeSuccess,
  getEmployeeData,
  close,
}) => {
  const [index, setIndex] = useState(1);
	const { token } = useToken();



  //  ALL INPUT VARIFICATION

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      return oldIndex + 1;
    });
  };

  const prevQuestion = () => {
    setIndex((oldIndex) => {
      return oldIndex - 1;
    });
  };


  return (
		<div>
			<div>
				<h4 className="entire-page-headers">REGISTER EMPLOYEE</h4>
			</div>
			<div className=" w-100 mx-auto employee-form">
				<div className="pt-2 pb-5">
					<AddEmployeeForm currentForm={index} />
					{editEmployeeLink && (
						<div className=" d-flex justify-content-center align-items-center mt-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="h-2"
								style={{
									position: "absolute",
									top: "3rem",
									right: "3rem",
									// fontSize: "0.1rem",
									width: "2rem",
									cursor: "pointer",
								}}
								onClick={() => close()}>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</div>
					)}
				</div>
				<div className=" py-1 px-4">
					<EmployeeProfile
						employeeFirstName={employeeData["employeeFirstname"]}
						employeeLastName={employeeData["employeeLastname"]}
						employeeTin={employeeData["employeeTin"]}
						employeeEmail={employeeData["employeeEmail"]}
						employeeRole={employeeData["employeeRole"]}
						employeeDepartment={employeeData.employeeDepartment}
						employeestate={employeeData.employeestate}
						employeePhoneNumber={employeeData["employeePhoneNumber"]}
						index={index}
						err={err}
						nextQuestion={nextQuestion}
						onHandleChange={onHandleChange}
					/>

					<EmployeeSalaryInfo
						index={index}
						onHandleChange={onHandleChange}
						err={err}
						prevQuestion={prevQuestion}
						nextQuestion={nextQuestion}
						annualSalary={employeeData["employeeAnnualGrossSalary"]}
						annualReliefs={employeeData["employeeRelives"]}
						getEmployeeData={getEmployeeData}
						data={employeeData}
					/>
					<EmployeePension
						index={index}
						onHandleChange={onHandleChange}
						data={employeeData}
						err={err}
						prevQuestion={prevQuestion}
						companyPensionCode={employeeData["companyPensionCode"]}
						employeePensionCode={employeeData["employeePensionCode"]}
						nextQuestion={nextQuestion}
					/>

					<EmployeeAccountDetails
						index={index}
						err={err}
						onHandleChange={onHandleChange}
						accountNumber={employeeData["employeeAccountNumber"]}
						// accountName={employeeData.employeeAccountName}
						accountName={employeeData["employeeAccountName"]}
						prevQuestion={prevQuestion}
						nextQuestion={nextQuestion}
						registerEmployeeAction={registerEmployeeAction}
						editEmployeeAction={editEmployeeAction}
						addEmployeeLink={addEmployeeLink}
						editEmployeeLink={editEmployeeLink}
						addEmployeeErr={addEmployeeErr}
						addEmployeeSuccess={addEmployeeSuccess}
						editEmployeeSuccess={editEmployeeSuccess}
						token={token}
						employeeData={employeeData}
						close={close}
					/>

					{/* {!token && (
            <VerificationModal
              message={"Session timeout. Please sign in!"}
              close={HomePage}
              svg={Warning()}
            />
          )} */}
				</div>
			</div>
		</div>
	);
};

export default EmployeeRegistration;
