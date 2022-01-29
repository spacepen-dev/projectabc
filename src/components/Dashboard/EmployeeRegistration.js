import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";

import DashBoardText from "./DashBoardText";
import LoaderButton from "../LoaderButton";
import Input from "../Registration/Input";
import NetWorkErrors from "../NetWorkErrors";
import VerificationModal from "./VerificationModal";

const EmployeeRegistration = ({
  removeBtn,
  err,
  onHandleChange,
  employeeData,
  employee,
  employeeErr,
  employeeSuccess,
  token,
}) => {
  const [request, setRequest] = useState(false);
  const [validation, setValidation] = useState({});
  const [errorMessage, setMessage] = useState("");
  const [showModal, setShow] = useState(false);
  const [success, setSuccess] = useState("");
  const [receivedToken, setRecievedToken] = useState("");
  console.log(token);
  // USE EFFECT TO FETCH SUCCESS MESSAGE WHEN THE REQUEST IS SUCCESSFUL
  useEffect(() => {
    if (!employeeSuccess) {
      return null;
    } else {
      setRequest(false);
      const { error, success } = employeeSuccess.data;
      if (error) {
        setShow(true);
        setMessage(error);
        setShow(true);
      } else if (success) {
        setSuccess(success);
      }
    }
  }, [employeeSuccess]);

  // USE EFFECT TO FETCH NETWORK ERROR
  useEffect(() => {
    if (!employeeErr) {
      return null;
    }
    setShow(true);
    setMessage(employeeErr.message);
    const removeTimeOut = setTimeout(() => {
      setShow(false);
    }, 4000);
    return () => {
      clearTimeout(removeTimeOut);
    };
  }, [employeeErr]);

  // USE EFFECT TO FETCH TOKEN FROM REDUX STORE
  useEffect(() => {
    console.log(token);
    if (!token) {
      return null;
    } else {
      localStorage.setItem("token", token);
      // setRecievedToken(token.data.token)
    }
  }, [token]);
  // GETTING MONTHLY SALARY FROM ANNUAL SALARY / 12
  const getMonthlySalary = () => {
    const employeeMonthlySalary = employeeData["annual"] / 12;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(employeeMonthlySalary);
  };

  // GETTING MONTHLY RELIEVES FROM ANNUAL RELIEVES / 12
  const getMonthlyRelieves = () => {
    const employeeMonthlyRelieves = employeeData["relieves"] / 12;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(employeeMonthlyRelieves);
  };

  //  ANNUAL GROSS PAY
  const getAnnualGross = () => {
    const AnnualGross =
      Number(employeeData["relieves"]) + Number(employeeData["annual"]);

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(AnnualGross);
  };

  //MONTHLY GROSS PAY
  const getMonthlyGross = () => {
    let MonthlyGross =
      Number(employeeData["relieves"]) + Number(employeeData["annual"]) / 12;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(MonthlyGross);
  };
  //  ALL INPUT VARIFICATION
  const InputValidation = () => {
    let regexp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!employeeData["firstName"]) {
      setValidation({
        employeeFirstName: "Employee's First name is required!",
      });
    } else if (!employeeData["LastName"]) {
      setValidation({ employeeLastName: "Employee's Last name is required!" });
    } else if (
      !employeeData["email"] ||
      !regexp.test(String(employeeData["email"]).toLowerCase())
    ) {
      setValidation({ employeeEmail: "Invalid email address!" });
    } else if (
      !employeeData["nin"] ||
      employeeData["nin"].length > 11 ||
      employeeData["nin"].length < 11
    ) {
      setValidation({ employeeNin: "Invalid NIN!" });
    } else if (!employeeData["role"]) {
      setValidation({ employeeRole: "Employee's role is required!" });
    } else if (!employeeData["annual"]) {
      setValidation({
        employeeAnnualSalary: "Employee's annual salary is required!",
      });
    } else {
      const getToken = localStorage.getItem("token", token);
      console.log(getToken);
      setRequest(true);
      employee(employeeData, getToken);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    InputValidation();
  };

  const companyDepartment = ["Marketing", "Sales", "Engineering"];

  return (
    <Form
      className='d-flex flex-column pt-5 justify-content-center w-100 mx-auto employee-form'
      onSubmit={onSubmit}>
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
            value={employeeData["firstName"]}
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
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText name='Email' label='Enter Employee Email Address' />
          <Input
            inputName='email'
            type='text'
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
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='National Identity Number'
            label='Enter National Indentity Number'
          />
          <Input
            inputName='nin'
            type='text'
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
          <DashBoardText name='Department' label='Enter employee department' />
          <select
            name='department'
            className=' text-center select mt-0'
            onChange={onHandleChange}>
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
          <DashBoardText name='Role' label='Enter Role ' />

          <Input
            inputName='role'
            type='text'
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
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Annual Gross Salary'
            label='Enter annual gross salary'
          />
          <Input
            inputName='annual'
            type='number'
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
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Monthly Gross Salary'
            label='Enter employee monthly salary'
          />
          <input
            readOnly
            name='monthly'
            value={getMonthlySalary()}
            className='w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input'
          />
        </Form.Group>
      </Row>
      {/* <Row>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Annual Relieves'
            label='Input employee annual relieves '
          />
          <Input
            inputName='relieves'
            type='number'
            handleChange={onHandleChange}
            value={employeeData["relieves"]}
          />
        </Form.Group>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Monthly Relieves'
            label='Enter employee monthly relieves'
          />
          <input
            readOnly
            name='monthly'
            value={getMonthlyRelieves()}
            className='w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input'
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText name='Annual Net ' label='Enter annual gross' />
          <input
            readOnly
            name='annualGross'
            value={getAnnualGross()}
            className='w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input'
          />
        </Form.Group>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Monthly Net'
            label='Enter employee monthly salary'
          />
          <input
            readOnly
            name='monthlyGross'
            value={getMonthlyGross()}
            className='w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input'
          />
        </Form.Group>
      </Row> */}
      <div className='ms-auto mt-4 double-btns'>
        <Button type='button' className={`button ms-auto d-${removeBtn} `}>
          Delete
        </Button>
        <LoaderButton btnName='SAVE' btnStyle='ms-4' request={request} />
      </div>
      {showModal && (
        <NetWorkErrors
          errMessage={errorMessage}
          removeLoader={() => setRequest(false)}
        />
      )}
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    registrationToken: state.RegistrationReducer.otp,
    loginToken: state.RegistrationReducer.loginOtp,
  };
};

export default connect(mapStateToProps)(EmployeeRegistration);
