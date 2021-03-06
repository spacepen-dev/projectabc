import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import DashBoardText from "./DashBoardText";
import Input from "../Registration/Input";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FetchBankList } from "../../Actions";

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
  FetchBankList,
  departmentRes,
}) => {
  const [validation, setValidation] = useState({});
  const [departmentData, setDepartmentData] = useState([]);

  const Validation = () => {
    let regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

  // FETCH DEPARTMENT DATA USE EFFECT
  useEffect(() => {
    // ADD FETCH DEPARTMENT ACTION CREATOR
    let timeOut = setTimeout(() => {
      FetchBankList(
        localStorage.getItem("email"),
        localStorage.getItem("token")
      );
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [FetchBankList]);

  // GET EMPLOYEE DATA FROM THE REDUCER
  useEffect(() => {
    if (!departmentRes) {
      return null;
    }
    setDepartmentData(departmentRes.success);
  }, [departmentRes]);

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
            inputName='employee_firstname'
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
            inputName='employee_lastname'
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
            inputName='employee_email'
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
            inputName='employee_nin'
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
          <DashBoardText name='Department' label='Select employee department' />
          <select
            name='employee_department'
            className='select mt-0'
            onChange={onHandleChange}>
            <option>Select department</option>;
            {departmentData.map(({ companyDepartment }) => {
              return (
                <option key={companyDepartment} value={companyDepartment}>
                  {companyDepartment}
                </option>
              );
            })}
          </select>
        </Form.Group>
        <Form.Group as={Col}>
          <DashBoardText name='Role' label='Enter Role ' />

          <Input
            inputName='employee_role'
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

const mapStateToProps = (state) => {
  return {
    departmentRes: state.DashboardReducer.fetchDepartment.data,
  };
};

export default connect(mapStateToProps, { FetchBankList })(EmployeeProfile);
