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

  const companyDepartment = ["Marketing", "Sales", "Engineering"];

  if (index === 0) {
    return (
      <Form
        className="d-flex flex-column pt-5 justify-content-center w-100 mx-auto employee-form"
        onSubmit={onSubmit}
      >
        <Row>
          <Form.Group as={Col} controlId="formGrid">
            <DashBoardText
              name="First Name"
              label="Enter the name of your company"
            />
            <Input
              inputName="firstName"
              type="text"
              handleChange={onHandleChange}
              value={employeeData["firstName"]}
              err={validation.employeeFirstName}
              onPress={() =>
                setValidation({
                  employeeFirstName: "",
                })
              }
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGrid">
            <DashBoardText
              name="Last Name"
              label="Enter Last name of employee"
            />
            <Input
              inputName="LastName"
              type="text"
              handleChange={onHandleChange}
              value={employeeData["LastName"]}
              err={validation["employeeLastName"]}
              onPress={() =>
                setValidation({
                  employeeLastName: "",
                })
              }
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGrid">
            <DashBoardText name="Email" label="Enter Employee Email Address" />
            <Input
              inputName="email"
              type="text"
              handleChange={onHandleChange}
              value={employeeData["email"]}
              err={validation.employeeEmail}
              onPress={() =>
                setValidation({
                  employeeEmail: "",
                })
              }
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGrid">
            <DashBoardText
              name="National Identity Number"
              label="Enter National Indentity Number"
            />
            <Input
              inputName="nin"
              type="text"
              handleChange={onHandleChange}
              value={employeeData["nin"]}
              err={validation.employeeNin}
              onPress={() =>
                setValidation({
                  employeeNin: "",
                })
              }
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <DashBoardText
              name="Department"
              label="Enter employee department"
            />
            <select
              name="department"
              className=" text-left select mt-0"
              onChange={onHandleChange}
            >
              {companyDepartment.map((department) => {
                return (
                  <option key={department} value={employeeData.department}>
                    {department}
                  </option>
                );
              })}
            </select>
          </Form.Group>
          <Form.Group as={Col}>
            <DashBoardText name="Role" label="Enter Role " />

            <Input
              inputName="role"
              type="text"
              handleChange={onHandleChange}
              value={employeeData["role"]}
              err={validation.employeeRole}
              onPress={() =>
                setValidation({
                  employeeRole: "",
                })
              }
            />
          </Form.Group>{" "}
        </Row>
        <Row>
          <Form.Group as={Col}>
            <DashBoardText
              name="Account Name"
              label="Enter Employee Account Name "
            />

            <Input
              inputName="accountName"
              type="text"
              handleChange={onHandleChange}
              value={employeeData["accountName"]}
              err={validation.accountName}
              onPress={() =>
                setValidation({
                  accountName: "",
                })
              }
            />
          </Form.Group>
          <Form.Group as={Col}>
            <DashBoardText name="Bank Name" label="Enter Employee Bank Name" />
            <Input
              inputName="bankName"
              type="text"
              handleChange={onHandleChange}
              value={employeeData["bankName"]}
              err={validation.bankName}
              onPress={() =>
                setValidation({
                  bankName: "",
                })
              }
            />
          </Form.Group>{" "}
        </Row>
        <Row>
          <Form.Group as={Col}>
            <DashBoardText
              name="Account Number"
              label="Enter Employee Account Number"
            />
            <Input
              inputName="accountNumber"
              type="number"
              handleChange={onHandleChange}
              value={employeeData["accountNumber"]}
              err={validation.accountNumber}
              onPress={() =>
                setValidation({
                  accountNumber: "",
                })
              }
            />
          </Form.Group>{" "}
        </Row>
        <Button type="button" className="button ms-auto" onClick={nextQuestion}>
          Continue
        </Button>
      </Form>
    );
  }

  return (
    <Form
      className="d-flex flex-column pt-5 justify-content-center w-100 mx-auto employee-form"
      onSubmit={onSubmit}
    >
      <Row>
        <Form.Group as={Col} controlId="formGrid">
          <DashBoardText
            name="Annual Gross Salary"
            label="Enter annual gross salary"
          />
          <Input
            inputName="annual"
            type="number"
            handleChange={onHandleChange}
            value={employeeData["annual"]}
            err={validation.employeeAnnualSalary}
            onPress={() =>
              setValidation({
                employeeAnnualSalary: "",
              })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGrid">
          <DashBoardText
            name="Monthly Gross Salary"
            label="Enter employee monthly salary"
          />
          <input
            readOnly
            name="monthly"
            value={getMonthlySalary()}
            className="w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input"
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="formGrid">
          <DashBoardText
            name="Annual Relieves"
            label="Input employee annual relieves "
          />
          <Input
            inputName="relieves"
            type="number"
            handleChange={onHandleChange}
            value={employeeData["relieves"]}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGrid">
          <DashBoardText
            name="Monthly Relieves"
            label="Enter employee monthly relieves"
          />
          <input
            readOnly
            name="monthly"
            value={getMonthlyRelieves()}
            className="w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input"
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="formGrid">
          <DashBoardText name="Annual Net " label="Enter annual gross" />
          <input
            readOnly
            name="annualGross"
            value={getAnnualGross()}
            className="w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGrid">
          <DashBoardText
            name="Monthly Net"
            label="Enter employee monthly salary"
          />
          <input
            readOnly
            name="monthlyGross"
            value={getMonthlyGross()}
            className="w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input"
          />
        </Form.Group>
      </Row>
      <div className="ms-auto mt-4 double-btns">
        <Button
          type="button"
          className={`button double-btns ms-auto d-${removeBtn} `}
        >
          Delete
        </Button>
        <Button type="button" className="button ms-auto" onClick={prevQuestion}>
          Back
        </Button>
        <LoaderButton btnName="Register" btnStyle="ms-4" request={request} />
      </div>
      {showModal && (
        <NetWorkErrors
          errMessage={errorMessage}
          removeLoader={() => setRequest(false)}
        />
      )}
    </Form>
  ),

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
