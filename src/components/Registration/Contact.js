import React from "react";
import SubHeader from "./SubHeader";
import { Form, Button } from "react-bootstrap";
import InputField from "./InputField";
import { reduxForm, Field } from "redux-form";
import FormValidation from "./FormValidation";

const Contact = ({
  currentForm,
  handleSubmit,
  prevPage,
  pristine,
  submitting,
}) => {
  if (currentForm !== 2) {
    return null;
  }
  return (
    <>
      <div>
        <SubHeader>How do we reach you?</SubHeader>
      </div>
      <div>
        <Form className='ms-2' onSubmit={handleSubmit}>
          <div className='field-container'>
            <Field
              component={InputField}
              name='address'
              inputname='Address'
              type='text'
              label='Enter the full address of your company'
            />
          </div>
          <div className='field-container'>
            <Field
              component={InputField}
              name='email'
              inputname='Email Address'
              type='email'
              label='Enter the email address of company'
            />
          </div>
          <div className='field-container'>
            <Field
              component={InputField}
              name='website'
              inputname='Website'
              type='text'
              label='Input the official website of your company'
            />
          </div>

          <div className='button-container double-btns d-flex align-items-end'>
            <Button
              type='button'
              className='button ms-auto '
              onClick={prevPage}>
              BACK
            </Button>
            <Button
              type='submit'
              className='button ms-4'
              // disabled={pristine || submitting}
            >
              NEXT
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default reduxForm({
  form: "companyRegistration",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: FormValidation,
})(Contact);
