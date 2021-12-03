import React, { useEffect, useState } from "react";
import SubHeader from "./SubHeader";
import { Form, Spinner, Col, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { companyRegistration } from "../../Actions";
import { useNavigate } from "react-router";

import InputField from "./InputField";
import LabelText from "./LabelText";
import FormValidation from "./FormValidation";
import WarningModal from "../Dashboard/WarningModal";

const Settings = ({
  currentForm,
  prevPage,
  handleSubmit,
  companyRegistration,
  checkStatus,
}) => {
  const [request, setRequest] = useState(false);
  const [errorMessage, setMessage] = useState("");
  const navigate = useNavigate();

  const networkError = ({ errMessage }) => {
    if (!errMessage) {
      return null;
    } else {
      setRequest(false);
      setMessage(
        `${errMessage.message}. Check your network connection and try again.`
      );
    }
  };

  const sendOtp = ({ companyRegistration }) => {
    if (!companyRegistration) {
      return null;
    } else {
      setRequest(false);
      const { error, success } = companyRegistration.data;
      if (error) {
        setMessage(error);
      } else if (success) {
        navigate("otp/email-confirmation");
      }
    }
  };

  useEffect(() => {
    sendOtp(checkStatus);
    networkError(checkStatus);
  }, [checkStatus]);

  const onSubmit = (values) => {
    setRequest(true);
    companyRegistration(values);
  };

  const close_reload = () => {
    setMessage("");
  };

  if (currentForm !== 3) {
    return null;
  }
  return (
    <>
      {errorMessage ? (
        <WarningModal closeWarning={close_reload} errorMessage={errorMessage} />
      ) : null}
      <div>
        <SubHeader>Fill in your company bank account details</SubHeader>
      </div>
      <div>
        <Form className='ms-2' onSubmit={handleSubmit(onSubmit)}>
          <div className='field-container'>
            <Field
              component={InputField}
              name='account'
              inputname='Account Name'
              type='text'
              label='Enter the full account name of your company'
            />
          </div>
          <div className='field-container'>
            <Field
              component={InputField}
              name='bank'
              inputname='Bank Name'
              type='text'
              label='Enter the bank official account of your company'
            />
          </div>
          <div className='field-container'>
            <Field
              component={InputField}
              name='accountNumber'
              inputname='Account Number'
              type='number'
              label='Input the official account number of your company'
            />
          </div>
          <Col
            className='d-flex toggle-input justify-content-between align-items-center'
            style={{ width: "100%", maxWidth: "60.5rem" }}>
            <LabelText
              name='PAYE'
              inputname='PAYE Taxes'
              label="
        Do you want to pay/deduct your employee's taxes automatically"
            />
            <div className='toggle-container d-flex justify-content-evenly align-items-center'>
              Yes
              <label className='switch'>
                {/* <div className='field-container'> */}
                <Field
                  name='tax'
                  id='tax'
                  component='input'
                  inputname='tax'
                  type='checkbox'
                />
                {/* </div> */}
                <span className='slider'></span>
              </label>
              No
            </div>
          </Col>
          <div className='button-container double-btns d-flex align-items-end'>
            <Button type='button' className='button ms-auto' onClick={prevPage}>
              BACK
            </Button>
            <Button
              type='submit'
              className='button ms-4'
              disabled={request ? true : false}>
              {!request ? (
                "FINISH"
              ) : (
                <Spinner
                  as='span'
                  className='bg-transparent'
                  animation='border'
                  size='lg'
                />
              )}
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const registrationData = state.RegistrationReducer;
  const formValues = state.form.companyRegistration;

  return {
    checkStatus: registrationData,
    getValues: formValues,
  };
};

export default connect(mapStateToProps, { companyRegistration })(
  reduxForm({
    form: "companyRegistration",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: FormValidation,
  })(Settings)
);
