import React, { useEffect, useState } from "react";
import SubHeader from "./SubHeader";
import { Form, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { connect } from "react-redux";

import { companyReg } from "../../Actions";
import LabelText from "./LabelText";
import VerificationModal from "../Dashboard/VerificationModal";
import LoaderButton from "../LoaderButton";
import Input from "./Input";
import NetWorkErrors from "../NetWorkErrors";
import DashBoardText from "../Dashboard/DashBoardText";

const Settings = ({
  currentForm,
  handleChange,
  companyReg,
  checkStatus,
  tax,
  website,
  prevPage,
  formData,
  check,
  errMessage,
  onCategoryChange,
  category,
}) => {
  const [request, setRequest] = useState(false);
  const [errorMessage, setMessage] = useState("");
  const [serverErr, setServerErr] = useState("");
  const [success, setSuccess] = useState("");
  const [showModal, setShow] = useState(false);
  // const [maxSalary, setMaxSalary] = useState({ formated: "", value: 0 });
  // const [maxSalaryErr, setMaxSalaryErr] = useState("");
  const [List] = useState([
    "--- Select Category ---",
    "Telecommunication",
    "Hotel services",
    "Security",
    "Adminstration",
    "Rental services",
    "School",
    "Bank",
    "General services",
    "Supplies service",
    "Information and Communication Technology",
    "Government MDA",
    " Realtor",
    "Auto sales",
    "General Sales",
    "Property Sales",
  ]);

  const navigate = useNavigate();

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
        localStorage.setItem("aminien_email", formData.email);
        setMessage("");
        setServerErr("");
      } else {
        setShow(true);
        setServerErr(checkStatus.data);
        const removeTimeOut = setTimeout(() => {
          setShow(false);
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      }
    }
  }, [checkStatus, formData.email]);

  useEffect(() => {
    if (!errMessage) {
      return null;
    }
    setRequest(false);
    // setShow(true);
    setMessage(errMessage);
    const removeTimeOut = setTimeout(() => {
      setShow(false);
      setMessage("");
    }, 4000);
    return () => {
      clearTimeout(removeTimeOut);
    };
  }, [errMessage]);

  // SET COMPANY Category TO NUMBER
  // const validation = () => {
  //   if (!category.value) {
  //     // setCategory((prev) => {
  //     //   return { ...prev, error: "Company Category is required" };
  //     // });
  //   } if() {

  //   }
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    // validation();
    setRequest(true);
    companyReg({ ...formData, companyCategory: category });
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
      {console.log(category)}
      {success && <VerificationModal message={success} close={closeModal} />}
      <div>
        <SubHeader>Fill in your company bank account details</SubHeader>
      </div>

      <div>
        <Form className='ms-2' onSubmit={onSubmit}>
          <div className='field-container'>
            <LabelText
              label='Input the official website of your company (Optional)'
              name='Website'
            />
            <Input
              inputName='website'
              type='text'
              handleChange={handleChange}
              value={website}
              placeholder='www.yourwebsite.com'
            />
          </div>
          <div className='field-container'>
            <Form.Group as={Col}>
              <DashBoardText
                name='Company Category'
                label='Enter Company Category'
              />
              <div sm='10' className='field-container mt-3'>
                <select
                  name='location'
                  className='text-left select'
                  onChange={onCategoryChange}>
                  {List.map((category) => {
                    return (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    );
                  })}
                </select>
              </div>
            </Form.Group>
          </div>
          {/* <Col className='d-flex toggle-input justify-content-between align-items-center'>
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
          </Col> */}
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
        {errorMessage && <NetWorkErrors errMessage={errorMessage.message} />}
        {showModal && <NetWorkErrors serverErr={serverErr} />}
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
