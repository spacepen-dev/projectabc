import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import EmployeeAccountDetails from "./EmployeeAccountDetails";
import EmployeeSalaryInfo from "./EmployeeSalaryInfo";
import EmployeeProfile from "./EmployeeProfile";
import { Warning } from "./svg/SVG";
import VerificationModal from "./VerificationModal";
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
}) => {
  const [index, setIndex] = useState(1);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // GET THE TOKEN FROM LOCAL STORAGE
  useEffect(() => {
    if (!localStorage.getItem("aminien_token")) {
      // SET THE SESSTION TIME OUR MODAL TO TRUE
      setToken("");
      // setRecievedToken("");
    } else {
      setToken(localStorage.getItem("aminien_token"));
    }
  }, []);

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

  const HomePage = () => {
    navigate("/");
  };

  return (
    <div>
      <div className=' w-100 mx-auto employee-form'>
        <div className='pt-5 pb-5'>
          <AddEmployeeForm currentForm={index} />
        </div>
        <div className=' py-1 px-4'>
          <EmployeeProfile
            employeeFirstName={employeeData["employee_firstname"]}
            employeeLastName={employeeData["employee_lastname"]}
            employeeNin={employeeData["employee_nin"]}
            employeeEmail={employeeData["employee_email"]}
            employeeRole={employeeData["employee_role"]}
            employeeDepartment={employeeData.department}
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
            annualSalary={employeeData["employee_annual_gross_salary"]}
            annualReliefs={employeeData["employee_reliefs"]}
            getEmployeeData={getEmployeeData}
            data={employeeData}
          />
          <EmployeeAccountDetails
            index={index}
            err={err}
            onHandleChange={onHandleChange}
            accountName={employeeData["employee_bankAccount_name"]}
            accountNumber={employeeData["employee_bankAccount_number"]}
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
          />
          {!token && (
            <VerificationModal
              message={"Session timeout. Please sign in!"}
              close={HomePage}
              svg={Warning()}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeRegistration;
