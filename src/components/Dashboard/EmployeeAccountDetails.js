import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import DashBoardText from "./DashBoardText";
import Input from "../Registration/Input";
import LoaderButton from "../LoaderButton";
import NetWorkErrors from "../NetWorkErrors";
import VerificationModal from "./VerificationModal";
import Verification from "../Dashboard/svg/Verification";

const EmployeeAccountDetails = ({
  accountName,
  accountNumber,
  index,
  err,
  onHandleChange,
  prevQuestion,
  registerEmployeeAction,
  editEmployeeAction,
  addEmployeeLink,
  editEmployeeLink,
  addEmployeeErr,
  addEmployeeSuccess,
  editEmployeeErr,
  editEmployeeSuccess,
  employeeData,
  token,
}) => {
  const navigate = useNavigate();

  const [showDropDown, setDropDown] = useState(false);
  const [filterBank, setFilterBank] = useState("");
  const [validation, setValidation] = useState({});
  const [request, setRequest] = useState(false);
  const [errorMessage, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShow] = useState(false);
  const [success, setSuccess] = useState("");
  const [receivedToken, setRecievedToken] = useState("");

  // FETCH THE TOKEN FROM THE LOCAL STORAGE
  useEffect(() => {
    if (!token) {
      console.log("no token");
    } else {
      setRecievedToken(token);
    }
  });

  useEffect(() => {
    if (!addEmployeeSuccess) {
      return null;
    } else {
      setRequest(false);
      const { error, success } = addEmployeeSuccess.data;
      if (error) {
        setShow(true);
        setError(error);
        setShow(true);
      } else if (success) {
        setSuccess(success);
      }
    }
  }, [addEmployeeSuccess]);

  // USEEFFECT TO FETCH SUCCESS MESSAGE WHEN THE REQUEST IS SUCCESSFUL FOR EDIT EMPLOYEE

  useEffect(() => {
    if (!editEmployeeSuccess) {
      return null;
    } else {
      setRequest(false);
      const { error, success } = editEmployeeSuccess.data;
      if (error) {
        setShow(true);
        setMessage(error);
        setShow(true);
      } else if (success) {
        setSuccess(success);
      }
    }
  }, [editEmployeeSuccess]);

  // USEEFFECT TO FETCH NETWORK ERROR FOR ADDEMPLOYEE
  useEffect(() => {
    if (!addEmployeeErr) {
      return null;
    } else {
      setRequest(false);
      setShow(true);
      setMessage(addEmployeeErr.message);
      const removeTimeOut = setTimeout(() => {
        setShow(false);
      }, 4000);
      return () => {
        clearTimeout(removeTimeOut);
      };
    }
  }, [addEmployeeErr]);

  // USEEFFECT TO FETCH NETWORK ERROR FOR EDITEMPLOYEE
  useEffect(() => {
    if (!editEmployeeErr) {
      return null;
    } else {
      setRequest(false);

      setShow(true);
      setMessage(editEmployeeErr.message);
      const removeTimeOut = setTimeout(() => {
        setShow(false);
      }, 4000);
      return () => {
        clearTimeout(removeTimeOut);
      };
    }
  }, [editEmployeeErr]);

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
      if (editEmployeeLink) {
        // REGISTRATION EMPLOYEE ACTION CREATOR
        editEmployeeAction({ ...employeeData, filterBank }, receivedToken);
      } else if (addEmployeeLink) {
        // EDIT EMPLOYEE ACTION CREATOR
        registerEmployeeAction({ ...employeeData, filterBank }, receivedToken);
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Validation();
  };

  const refreshPage = () => {
    // window.location.reload();
  };

  if (index !== 3) {
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
          serverErr={error}
          removeLoader={() => setRequest(false)}
        />
      )}

      {success && (
        <VerificationModal
          message={"Employee Registration successful!"}
          close={refreshPage}
          svg={Verification()}
        />
      )}
    </Form>
  );
};

export default EmployeeAccountDetails;
