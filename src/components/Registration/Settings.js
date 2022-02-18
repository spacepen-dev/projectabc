import React, { useEffect, useState } from "react";
import SubHeader from "./SubHeader";
import { Form, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { connect } from "react-redux";

import { companyReg } from "../../Actions";
import LabelText from "./LabelText";
import VerificationModal from "../Dashboard/VerificationModal";
import LoaderButton from "../LoaderButton";
import Input from "./Input";
import NetWorkErrors from "../NetWorkErrors";

const Settings = ({
  currentForm,
  handleChange,
  companyReg,
  checkStatus,
  accountName,
  bank,
  salary,
  companySize,
  tax,
  prevPage,
  formData,
  check,
  errMessage,
}) => {
  const [request, setRequest] = useState(false);
  const [errorMessage, setMessage] = useState("");
  const [serverErr, setServerErr] = useState("");
  const [success, setSuccess] = useState("");
  const [showModal, setShow] = useState(false);
  const [accountNameErr, setAccountNameErr] = useState("");
  const [maxSalaryErr, setMaxSalaryErr] = useState("");
  const [bankNameErr, setBankNameErr] = useState("");
  const [showDropDown, setDropDown] = useState(false);

  const companySizes = ["0-5", "6-10", "11-20", "21-30", "31-above"];

  const navigate = useNavigate();

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

    const filterBankName = bankName.filter((name) => name.includes(bank));
    console.log(filterBankName);
  };

  /**
   * .map((banks) => {
      return (
        <li class='bankLinks' onClick={() => {}}>
          {banks}
        </li>
      );
    });
   */
  useEffect(() => {
    if (!checkStatus) {
      return null;
    } else {
      setRequest(false);
      const { error, success } = checkStatus.data;
      if (error) {
        setShow(true);
        setServerErr(error);
        const removeTimeOut = setTimeout(() => {
          setShow(false);
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      } else if (success) {
        setSuccess(success);
        setMessage("");
        setServerErr("");
      }
    }
  }, [checkStatus]);

  useEffect(() => {
    if (!errMessage) {
      return null;
    }
    setRequest(false);
    setShow(true);
    setMessage(errMessage.message);
    const removeTimeOut = setTimeout(() => {
      setShow(false);
    }, 4000);
    return () => {
      clearTimeout(removeTimeOut);
    };
  }, [errMessage]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!accountName) {
      setAccountNameErr("Account name is required!");
    } else if (!bank) {
      setBankNameErr("Bank name is required");
    } else if (!salary) {
      setMaxSalaryErr("Maximum salary is required");
    } else {
      setRequest(true);
      companyReg(formData);
    }
  };

  const closeModal = () => {
    setSuccess("");
    navigate("otp/email-confirmation");
  };
  if (currentForm !== 3) {
    return null;
  }

  return (
    <div className="mx-auto w-75">
      {success && <VerificationModal message={success} close={closeModal} />}

      <div>
        <SubHeader>Fill in your company bank account details</SubHeader>
      </div>

      <div>
        <Form className="ms-2" onSubmit={onSubmit}>
          <LabelText
            label="Select the size range of your company"
            name="Company Size"
          />

          <div sm="10" className="field-container">
            <select
              name="companySize"
              className="text-center select"
              onChange={handleChange}
            >
              {companySizes.map((companySize) => {
                return (
                  <option key={companySize} value={companySize}>
                    {companySize}
                  </option>
                );
              })}
            </select>
          </div>


          <div className="field-container">

          <div className='field-container'>
            <LabelText
              label='Enter the bank official account of your company'
              name='Bank Name'
            />
            <Input
              inputName='bank'
              type='text'
              err={bankNameErr}
              handleChange={handleChange}
              onPress={() => {
                setBankNameErr("");
                setDropDown(true);
              }}
              value={bank}
            />
            {BankList()}
            {/* {!showDropDown && (
              <div id='dropdownList' class='dropdown-content shadow'>
                {BankList()}
              </div> */}
          </div>
          <div className='field-container'>

            <LabelText
              label="Enter the maximun salary of your employee"
              name="Employee Max Salary"
            />

            <Input
              inputName="salary"
              type="number"
              handleChange={handleChange}
              err={maxSalaryErr}
              onPress={() => setMaxSalaryErr("")}
              value={salary}
            />
          </div>
          <Col className="d-flex toggle-input justify-content-between align-items-center">
            <LabelText
              name="PAYE"
              inputname="PAYE Taxes"
              label="
        Do you want to pay/deduct your employee's taxes automatically"
            />
            <div className="toggle-container d-flex justify-content-evenly align-items-center">
              Yes
              <label className="switch">
                <input
                  name="tax"
                  id="tax"
                  inputname="tax"
                  type="checkbox"
                  value={tax}
                  checked={check}
                  onChange={handleChange}
                />
                <span className="slider"></span>
              </label>
              No
            </div>
          </Col>
          <div className="button-container double-btns d-flex justify-content-end align-items-end">
            <Button type="button" className="button ms-auto" onClick={prevPage}>
              Back
            </Button>
            <LoaderButton
              btnName="FINISH"
              btnStyle="ms-4"
              request={request}
              spinnerStyle="bg-transparent"
            />
          </div>
        </Form>
        {showModal && (
          <NetWorkErrors
            errMessage={errorMessage}
            serverErr={serverErr}
            removeLoader={() => setRequest(false)}
          />
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    checkStatus: state.RegistrationReducer.companyRegistration,
    errMessage: state.RegistrationReducer.registrationErr,
  };
};

export default connect(mapStateToProps, { companyReg })(Settings);
