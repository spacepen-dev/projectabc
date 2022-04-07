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
  const [maxSalary, setMaxSalary] = useState("");
  const [maxSalaryErr, setMaxSalaryErr] = useState("");
  const [companySize, setCompanySize] = useState("1-5");

  const companySizes = ["1-5", "6-10", "11-20", "21-30", "31-above"];

  const navigate = useNavigate();

  const FormatNum = (value) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    if (formatter.format(value) === "NGNNaN") {
      setMaxSalaryErr("Use numbers only! Please clear all before typing.");
      value = "";
    }
    return formatter.format(value);
  };

  const onSalaryChange = (e) => {
    setMaxSalary(e.target.value);
  };
  const onChange = (e) => {
    const employeeSize = e.target.value.split("-")[1];
    setCompanySize(employeeSize);
  };

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
        localStorage.setItem("email", formData.email);
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

  const Validation = () => {
    if (!maxSalary) {
      setMaxSalaryErr("Maximum salary is required!");
    } else {
      setRequest(true);
      companyReg({ ...formData, maxSalary, companySize });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Validation();
  };

  const closeModal = () => {
    setSuccess("");
    navigate("otp/email-confirmation");
  };
  if (currentForm !== 3) {
    return null;
  }

  return (
    <div className='mx-auto w-75'>
      {success && <VerificationModal message={success} close={closeModal} />}
      <div>
        <SubHeader>Fill in your company bank account details</SubHeader>
      </div>
      <div>
        <Form className='ms-2' onSubmit={onSubmit}>
          <div className='select-fields'>
            <LabelText
              label='Select the size range of your company'
              name='Company Size'
            />

            <div sm='10' className='field-container'>
              <select
                name='companySize'
                className='text-left select'
                onChange={onChange}>
                {companySizes.map((size) => {
                  return (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className='field-container'>
            <LabelText
              label='Enter the maximun salary of your employee'
              name='Employee Max Salary'
            />

            <Input
              inputName='maxSalary'
              type='text'
              value={maxSalary}
              handleChange={onSalaryChange}
              err={maxSalaryErr}
              onFocus={() => setMaxSalary("")}
              onPress={() => setMaxSalaryErr("")}
              onBlur={() => setMaxSalary(FormatNum(maxSalary))}
            />
          </div>
          <Col className='d-flex toggle-input justify-content-between align-items-center'>
            <LabelText
              name='PAYE'
              inputname='PAYE Taxes'
              label="Do you want to pay/deduct your employee's taxes automatically"
            />

            <div className='toggle-container d-flex justify-content-evenly align-items-center'>
              No
              <label className='switch mx-1'>
                <input
                  name='tax'
                  id='tax'
                  inputname='tax'
                  type='checkbox'
                  value={tax}
                  checked={check}
                  onChange={handleChange}
                />
                <span className='slider'></span>
              </label>
              Yes
            </div>
          </Col>
          <div className='button-container double-btns d-flex justify-content-end align-items-end'>
            <Button type='button' className='button ms-auto' onClick={prevPage}>
              Back
            </Button>
            <LoaderButton
              btnName='FINISH'
              btnStyle='ms-4'
              request={request}
              spinnerStyle='bg-transparent'
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
const mapStateToProps = (state) => {
  return {
    checkStatus: state.RegistrationReducer.companyRegistration,
    errMessage: state.RegistrationReducer.registrationErr,
  };
};

export default connect(mapStateToProps, { companyReg })(Settings);
