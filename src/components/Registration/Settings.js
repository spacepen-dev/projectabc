import React from "react";
import SubHeader from "./SubHeader";
import { Form, Input, Col, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import InputField from "./InputField";
import LabelText from "./LabelText";
import FormValidation from "./FormValidation";

const Settings = ({
  currentForm,
  prevPage,
  handleSubmit,
  meta,
  pristine,
  submitting,
}) => {
  const onSubmit = (values) => {
    console.log(values);
  };
  // console.log(this.props);
  if (currentForm !== 3) {
    return null;
  }
  return (
    <>
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
              type='text'
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
                  // onChange={onChecked}
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
              disabled={pristine || submitting}>
              FINISH
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default reduxForm({
  form: "COMPANY-REGISTRATION",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: FormValidation,
})(Settings);
