import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import EmployeeAccountDetails from "./EmployeeAccountDetails";
import EmployeeSalaryInfo from "./EmployeeSalaryInfo";
import EmployeeProfile from "./EmployeeProfile";
// import { Warning } from "./svg/SVG";
// import VerificationModal from "./VerificationModal";
import AddEmployeeForm from "./AddEmployeeForm";

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
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // GET THE TOKEN FROM LOCAL STORAGE
  useEffect(() => {
    if (!localStorage.getItem("aminien_token")) {
      // SET THE SESSTION TIME OUR MODAL TO TRUE
      navigate("/");
      // setRecievedToken("");
    } else {
      setToken(localStorage.getItem("aminien_token"));
    }
  }, [navigate]);

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

  // const HomePage = () => {
  //   navigate("/");
  // };

  return (
    <div>
      <div>
        <h4 className='entire-page-headers'>REGISTER EMPLOYEE</h4>
      </div>
      <div className=' w-100 mx-auto employee-form'>
        <div className='pt-2 pb-5'>
          <AddEmployeeForm currentForm={index} />
          {editEmployeeLink && (
            <div className=' d-flex justify-content-center align-items-center mt-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-2'
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
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </div>
          )}
        </div>
        <div className=' py-1 px-4'>
          <EmployeeProfile
            employeeFirstName={employeeData["employeeFirstname"]}
            employeeLastName={employeeData["employeeLastname"]}
            employeeTin={employeeData["employeeTin"]}
            employeeEmail={employeeData["employeeEmail"]}
            employeeRole={employeeData["employeeRole"]}
            employeeDepartment={employeeData.employeeDepartment}
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

          <EmployeeAccountDetails
            index={index}
            err={err}
            onHandleChange={onHandleChange}
            accountNumber={employeeData["employeeAccountNumber"]}
            prevQuestion={prevQuestion}
            nextQuestion={nextQuestion}
            registerEmployeeAction={registerEmployeeAction}
            editEmployeeAction={editEmployeeAction}
            addEmployeeLink={addEmployeeLink}
            editEmployeeLink={editEmployeeLink}
            addEmployeeErr={addEmployeeErr}
            addEmployeeSuccess={addEmployeeSuccess}
            editEmployeeErr={editEmployeeErr}
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
