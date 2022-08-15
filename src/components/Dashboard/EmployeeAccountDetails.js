import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";

import DashBoardText from "./DashBoardText";
import Input from "../Registration/Input";
import LoaderButton from "../LoaderButton";
import NetWorkErrors from "../NetWorkErrors";

import SuccessRequestModal from "./SuccessRequestModal";

const EmployeeAccountDetails = ({
  bankListRes,
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
  const [showDropDown, setDropDown] = useState(false);
  const [filterBank, setFilterBank] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [validation, setValidation] = useState({});
  const [request, setRequest] = useState(false);
  const [errorMessage, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShow] = useState(false);
  const [success, setSuccess] = useState("");
  const [receivedToken, setRecievedToken] = useState("");
  const [bankCodeList, setBankCodeList] = useState([]);

  useEffect(() => {
    if (!bankListRes) return null;
    if (bankListRes.error) return null;
    setBankCode(bankListRes.success);
    setBankCodeList(bankListRes.success);
  }, [bankListRes]);
  // FETCH THE TOKEN FROM THE LOCAL STORAGE

  useEffect(() => {
    if (!localStorage.getItem("aminien_token")) {
      setRecievedToken("");
    } else {
      setRecievedToken(localStorage.getItem("aminien_token"));
    }
  }, []);

  // USEEFFECT TO FETCH SUCCESS MESSAGE WHEN THE REQUEST IS SUCCESSFUL FOR ADD EMPLOYEE

  useEffect(() => {
    if (!addEmployeeSuccess) {
      return;
    } else {
      setRequest(false);
      const { error, success } = addEmployeeSuccess.data;

      if (error) {
        setShow(true);
        setError(error);
        const removeTimeOut = setTimeout(() => {
          setShow(false);
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      } else if (success) {
        setSuccess(success);
        const removeTimeOut = setTimeout(() => {
          setSuccess("");
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      }
    }
  }, [addEmployeeSuccess]);

  // USEEFFECT TO FETCH SUCCESS MESSAGE WHEN THE REQUEST IS SUCCESSFUL FOR EDIT EMPLOYEE
  useEffect(() => {
    if (!editEmployeeSuccess) {
      return;
    } else {
      setRequest(false);
      const { error, success } = editEmployeeSuccess.data;
      if (error) {
        setShow(true);
        setError(error);
        const removeTimeOut = setTimeout(() => {
          setShow(false);
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      } else if (success) {
        setSuccess(success);
        const removeTimeOut = setTimeout(() => {
          setSuccess("");
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      }
    }
  }, [editEmployeeSuccess]);

  // USEEFFECT TO FETCH NETWORK ERROR FOR ADD EMPLOYEE
  useEffect(() => {
    if (!addEmployeeErr) {
      return;
    } else {
      setRequest(false);
      setShow(true);
      setMessage(addEmployeeErr.message);

      const removeTimeOut = setTimeout(() => {
        setShow(false);
        setMessage(null);
      }, 4000);
      return () => {
        clearTimeout(removeTimeOut);
      };
    }
  }, [addEmployeeErr]);

  // USEEFFECT TO FETCH NETWORK ERROR FOR EDIT EMPLOYEE
  useEffect(() => {
    if (!editEmployeeErr) {
      return;
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
    const filterBankName = bankCodeList.filter((cur) =>
      cur.name.toLowerCase().includes(filterBank)
    );
    const displayList = filterBankName.map(({ code, name }, index) => {
      return (
        <React.Fragment>
          <li
            key={code}
            class='bankLinks'
            onClick={() => {
              setFilterBank(name);
              setDropDown(false);
              setBankCode(code);
            }}>
            {name}
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
        editEmployeeAction(
          { ...employeeData, filterBank, bankCode, accountName, accountNumber },
          receivedToken
        );
      } else if (addEmployeeLink) {
        // EDIT EMPLOYEE ACTIONs
        registerEmployeeAction(
          { ...employeeData, filterBank, bankCode },
          receivedToken
        );
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Validation();
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
            inputName='employee_bankAccount_name'
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
            inputName='employee_bankAccount_number'
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
            inputName='employee_bankname'
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
            <div id='dropdownList' className='dropdown-content shadow'>
              {BankList()}
            </div>
          )}
        </Form.Group>{" "}
      </Row>
      <div className='ms-auto mt-4 double-btns'>
        <Button
          type='button'
          className='button ms-auto '
          disabled={request ? true : false}
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
      {success && <SuccessRequestModal message={success} />}
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    bankListRes: state.DashboardReducer.bankList.data,
  };
};

export default connect(mapStateToProps)(EmployeeAccountDetails);
