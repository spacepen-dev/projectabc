import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";

import DashBoardText from "./DashBoardText";
import Input from "../Registration/Input";
import LoaderButton from "../LoaderButton";
import NetWorkErrors from "../NetWorkErrors";
import VerificationModal from "./VerificationModal";

const EmployeeAccountDetails = ({
  accountName,
  accountNumber,
  index,
  err,
  onHandleChange,
  prevQuestion,
  employee,
  employeeErr,
  employeeSuccess,
  token,
}) => {
  const [showDropDown, setDropDown] = useState(false);
  const [filterBank, setFilterBank] = useState("");
  const [validation, setValidation] = useState({});
  const [request, setRequest] = useState(false);
  const [errorMessage, setMessage] = useState("");
  const [showModal, setShow] = useState(false);
  const [success, setSuccess] = useState("");
  const [receivedToken, setRecievedToken] = useState("");

  // useEffect(() => {
  //   console.log(localStorage.getItem("token", token));
  // }, []);
  // FETCH THE TOKEN FROM THE LOCAL STORAGE

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
    if (!localStorage.setItem("token", token)) {
      // SHOW A MODAL THAT WOULD PROMPT THE USER TO SIGN IN
    }
    setRecievedToken(localStorage.setItem("token", token));
  }, [token]);

  const BankList = () => {
    const bankName = [
      "Access Bank Plc",
      "Accion Microfinance Bank",
      "Citibank Nigeria Limited",
      "Covenant Mirofinance Bank Ltd",
      "Ecobank Nigeria Plc",
      "Empire Trust Microfinance Bank",
      "Fidelity Bank Plc",
      "Ecobank Nigeria Plc.",
      "Empire Trust Microfinance Bank",
      "Fidelity Bank Plc",
      "Fina Trust Microfinance Bank",
      "Finca Microfinance Bank Limited",
      "First Bank of Nigeria Limited",
      "First City Monument Bank Limited",
      "Globus Bank Limited",
      "Guaranty Trust Bank Plc",
      "Heritage Banking Company Ltd",
      "Infinity Microfinance Bank",
      "Key Stone Bank",
      "Kuda Bank",
      "Mint Finex MFB",
      "Mkobo MFB",
      "Mutual Trust Microfinance Bank",
      "Parallex Bank Limited",
      "Peace Microfinance Bank",
      "Pearl Microfinance Bank Limited",
      "Polaris Bank",
      "Providus Bank",
      "Rephidim Microfinance Bank",
      "Rubies Bank",
      "Shepherd Trust Microfinance Bank",
      "Sparkle Bank",
      "Stanbic IBTC Bank Ltd",
      "Standard Chartered Bank Nigeria Ltd",
      "Sterling Bank Plc",
      "SunTrust Bank Nigeria Limited",
      "Titan Trust Bank Ltd",
      "Union Bank of Nigeria Plc",
      "United Bank For Africa Plc",
      "Unity Bank Plc",
      "VFD MFB",
      "Wema Bank Plc",
      "Zenith Bank Plc",
    ];
    const filterBankName = bankName.filter((name) =>
      name.toLocaleLowerCase().includes(filterBank)
    );
    const displayList = filterBankName.map((cur, index) => {
      return (
        <React.Fragment>
          <li
            key={cur}
            class='bankLinks'
            onClick={() => {
              setFilterBank(cur);
              setDropDown(false);
            }}>
            {cur}
          </li>
        </React.Fragment>
      );
    });
    return displayList;
  };

  const Validation = () => {
    if (!accountName) {
      setValidation({
        accountName: "Employee's account name is required!",
      });
    } else if (
      !accountNumber ||
      accountNumber.length > 10 ||
      accountNumber.length < 10
    ) {
      setValidation({
        accountNumber: "Invalid Employee's account number!",
      });
    } else if (!filterBank) {
      setValidation({
        bankName: "Employee's bank name is required!",
      });
    } else {
      setRequest(true);
      //   const getToken = localStorage.getItem("token", token);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Validation();
  };

  if (index !== 2) {
    return null;
  }
  return (
    <Form className='d-flex flex-column' onSubmit={onSubmit}>
      <Row>
        <Form.Group as={Col}>
          <DashBoardText
            name='Account Name'
            label='Enter Employee Account Name '
          />

          <Input
            inputName='accountName'
            type='text'
            handleChange={onHandleChange}
            value={accountName}
            err={validation.accountName}
            onPress={() =>
              setValidation({
                accountName: "",
              })
            }
          />
        </Form.Group>
        <Form.Group as={Col}>
          <DashBoardText
            name='Account Number'
            label='Enter Employee Account Number'
          />
          <Input
            inputName='accountNumber'
            type='number'
            handleChange={onHandleChange}
            value={accountNumber}
            err={validation.accountNumber}
            onPress={() =>
              setValidation({
                accountNumber: "",
              })
            }
          />
        </Form.Group>{" "}
      </Row>
      <Row>
        <Form.Group as={Col}>
          <DashBoardText name='Bank Name' label='Enter Employee Bank Name' />
          <Input
            inputName='bankName'
            type='text'
            handleChange={(e) => {
              setFilterBank(e.target.value);
            }}
            value={filterBank}
            err={validation.bankName}
            onPress={() => {
              setDropDown(true);
              setValidation({
                bankName: "",
              });
            }}
          />
          {showDropDown && (
            <div id='dropdownList' class='dropdown-content shadow'>
              {BankList()}
            </div>
          )}
        </Form.Group>{" "}
      </Row>
      <div className='ms-auto mt-4 double-btns'>
        <Button
          type='button'
          className='button ms-auto '
          onClick={prevQuestion}>
          Back
        </Button>
        <LoaderButton btnName='Register' btnStyle='ms-4' request={request} />
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

export default EmployeeAccountDetails;
