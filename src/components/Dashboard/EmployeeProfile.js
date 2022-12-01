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
  employeeTin,
  employeeRole,
  employeeDepartment,
  employeePhoneNumber,
  index,
  err,
  nextQuestion,
  onHandleChange,
  FetchBankList,
  departmentRes,
}) => {
  const [validation, setValidation] = useState({});
  const [departmentData] = useState(() =>
    JSON.parse(localStorage.getItem("department"))
  );

  const Validation = () => {
    // let regexp =
    //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!employeeFirstName) {
      setValidation({
        employeeFirstName: "Employee's First name is required!",
      });
    } else if (!employeeLastName) {
      setValidation({ employeeLastName: "Employee's Last name is required!" });
    } else if (!employeePhoneNumber) {
      setValidation({ employeePhoneNumber: "Invalid Phone number!" });
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
        localStorage.getItem("aminien_email"),
        localStorage.getItem("aminien_token")
      );
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [FetchBankList]);

  // GET EMPLOYEE DATA FROM THE REDUCER
  // useEffect(() => {
  //   if (!departmentRes) {
  //     return null;
  //   }
  //   setDepartmentData(departmentRes.success);
  // }, [departmentRes]);

  if (index !== 1) {
    return null;
  }

  return (
    <div className='d-flex flex-column justify-content-center w-100 mx-auto employee-form'>
      <Row>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='First Name'
            label='Enter the name of your company'
          />
          <Input
            inputName='employeeFirstname'
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
            inputName='employeeLastname'
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
          <DashBoardText
            name='Email'
            label='Enter Employee Email Address (Optional)'
          />
          <Input
            inputName='employeeEmail'
            type='text'
            handleChange={onHandleChange}
            value={employeeEmail}
            // err={validation.employeeEmail}
            onPress={() =>
              setValidation({
                employeeEmail: "",
              })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Tax Identification Number'
            label='Enter Tax Indentification Number (Optional)'
          />
          <Input
            inputName='employeeTin'
            type='text'
            handleChange={onHandleChange}
            value={employeeTin}
            err={validation.employeeTin}
            onPress={() =>
              setValidation({
                employeeTin: "",
              })
            }
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText name='Phone Number' label='Enter Phone Number' />
          <Input
            inputName='employeePhoneNumber'
            type='tel'
            handleChange={onHandleChange}
            value={employeePhoneNumber}
            err={validation.employeePhoneNumber}
            onPress={() =>
              setValidation({
                employeePhoneNumber: "",
              })
            }
          />
        </Form.Group>
        <Form.Group as={Col}>
          <DashBoardText name='Role' label='Enter Role ' />
          <Input
            inputName='employeeRole'
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
      <Row>
        <Form.Group as={Col}>
          <DashBoardText name='Department' label='Select employee department' />
          <select
            name='employeeDepartment'
            className='select mt-0'
            onChange={onHandleChange}>
            {!employeeDepartment ? (
              <option>Select department</option>
            ) : (
              <option>{employeeDepartment}</option>
            )}
            {departmentData.map(({ companyDepartment }) => {
              return (
                <option key={companyDepartment} value={companyDepartment}>
                  {companyDepartment}
                </option>
              );
            })}
          </select>
        </Form.Group>
      </Row>
      <Button
        type='button'
        className='button ms-auto mt-3'
        onClick={() => {
          Validation();
        }}>
        Next
      </Button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     departmentRes: state.DashboardReducer.fetchDepartment.data,
//   };
// };

export default connect(null, { FetchBankList })(EmployeeProfile);
