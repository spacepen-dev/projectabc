import React, { useState } from "react";

import EmployeeAccountDetails from "./EmployeeAccountDetails";
import EmployeeSalaryInfo from "./EmployeeSalaryInfo";
import EmployeeProfile from "./EmployeeProfile";

const EmployeeRegistration = ({
  // removeBtn,
  err,
  onHandleChange,
  employeeData,
  employee,
  employeeErr,
  employeeSuccess,
  token,
  // filterBankList,
}) => {
  const [index, setIndex] = useState(0);

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
    <div className='d-flex flex-column pt-5 justify-content-center w-100 mx-auto employee-form'>
      <EmployeeProfile
        employeeFirstName={employeeData["firstName"]}
        employeeLastName={employeeData["LastName"]}
        employeeNin={employeeData["nin"]}
        employeeEmail={employeeData["email"]}
        employeeRole={employeeData["role"]}
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
        annualSalary={employeeData["annual"]}
        annualRelieves={employeeData["relieves"]}
        prevQuestion={prevQuestion}
        nextQuestion={nextQuestion}
      />
      <EmployeeAccountDetails
        index={index}
        err={err}
        onHandleChange={onHandleChange}
        accountName={employeeData["accountName"]}
        accountNumber={employeeData["accountNumber"]}
        prevQuestion={prevQuestion}
        nextQuestion={nextQuestion}
        employee={employee}
        employeeErr={employeeErr}
        employeeSuccess={employeeSuccess}
        token={token}
      />
    </div>
  );
};

export default EmployeeRegistration;
