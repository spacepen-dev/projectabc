import React, { useState } from "react";
import DashBoardText from "./DashBoardText";
import Input from "../Registration/Input";
import { Form, Button, Row, Col } from "react-bootstrap";

const EmployeeProfile = ({
  employeeEmail,
  employeeFirstName,
  employeeLastName,
  employeeNin,
  employeeRole,
  employeeDepartment,
  index,
  err,
  nextQuestion,
  onHandleChange,
}) => {
  const companyDepartment = ["Marketing", "Sales", "Engineering"];
  const [validation, setValidation] = useState({});

  const Validation = () => {
    let regexp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!employeeFirstName) {
      setValidation({
        employeeFirstName: "Employee's First name is required!",
      });
    } else if (!employeeLastName) {
      setValidation({ employeeLastName: "Employee's Last name is required!" });
    } else if (
      !employeeEmail ||
      !regexp.test(String(employeeEmail).toLowerCase())
    ) {
      setValidation({ employeeEmail: "Invalid email address!" });
    } else if (
      !employeeNin ||
      employeeNin.length > 11 ||
      employeeNin.length < 11
    ) {
      setValidation({ employeeNin: "Invalid NIN!" });
    } else if (!employeeRole) {
      setValidation({ employeeRole: "Employee's role is required!" });
    } else {
      nextQuestion();
    }
  };

  if (index !== 1) {
    return null;
  }

  return (
    <div className='d-flex flex-column pt-3 justify-content-center w-100 mx-auto employee-form'>
      <Row>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='First Name'
            label='Enter the name of your company'
          />
          <Input
            inputName='firstName'
            type='text'
            handleChange={onHandleChange}
            value={employeeFirstName}
            err={validation.employeeFirstName}
            onPress={() =>
              setValidation({
                employeeFirstName: "",
              })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText name='Last Name' label='Enter Last name of employee' />
          <Input
            inputName='LastName'
            type='text'
            handleChange={onHandleChange}
            value={employeeLastName}
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
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText name='Email' label='Enter Employee Email Address' />
          <Input
            inputName='email'
            type='text'
            handleChange={onHandleChange}
            value={employeeEmail}
            err={validation.employeeEmail}
            onPress={() =>
              setValidation({
                employeeEmail: "",
              })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='National Identity Number'
            label='Enter National Indentity Number'
          />
          <Input
            inputName='nin'
            type='text'
            handleChange={onHandleChange}
            value={employeeNin}
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
          <DashBoardText name='Department' label='Enter employee department' />
          <select
            name='department'
            className=' text-center select mt-0'
            onChange={onHandleChange}>
            {companyDepartment.map((department) => {
              return (
                <option key={department} value={employeeDepartment}>
                  {department}
                </option>
              );
            })}
          </select>
        </Form.Group>
        <Form.Group as={Col}>
          <DashBoardText name='Role' label='Enter Role ' />

          <Input
            inputName='role'
            type='text'
            handleChange={onHandleChange}
            value={employeeRole}
            err={validation.employeeRole}
            onPress={() =>
              setValidation({
                employeeRole: "",
              })
            }
          />
        </Form.Group>{" "}
      </Row>
      <Button
        type='button'
        className='button ms-auto'
        onClick={() => {
          Validation();
        }}>
        Next
      </Button>
    </div>
  );
};

export default EmployeeProfile;
