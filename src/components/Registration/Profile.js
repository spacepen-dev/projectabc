import React, { useState } from "react";
import InputField from "./InputField";
import SubHeader from "./SubHeader";
import { Col, FormText, Button, Form } from "react-bootstrap";
import FormValidation from "./FormValidation";
import { reduxForm, Field } from "redux-form";

const Profile = ({ currentForm, handleSubmit, nextPage }) => {
  const states = [
    "Abia State",
    "Adamawa State",
    "Anambra State",
    "Bauchi State",
    "Bayelsa State",
    "Borno State",
    "Delta State",
    "Ebonyi State",
    "Enugu State",
    "Gombe State",
    "Imo State",
    "Jigawa State",
    "Kano State",
    "katsina State",
    "Kebbi State",
    "Kogi State",
    "Kwara State",
    "Nasarawa State",
    "Niger State",
    "Ondo State",
    "Osun State",
    "Plateau State",
    "Sokoto State,",
    "Taraba State",
    "Yobe State",
    "Zamfara State",
    "Ekiti State",
    "Lagos State",
    "Benue State",
    "Oyo State",
    "Ogun State",
    "Cross River State",
    "Rivers State",
    "Akwa Ibom State",
    "Kaduna State",
    "Edo State",
    "Abuja FCT",
  ];

  if (currentForm !== 1) {
    return null;
  }
  return (
    <>
      <div>
        <SubHeader>Fill in Your Company Details</SubHeader>
      </div>
      <div>
        <form className='ms-2' onSubmit={handleSubmit}>
          {/* first input */}
          <div className='field-container'>
            <Field
              component={InputField}
              name='name'
              inputname='Name'
              type='text'
              label='Enter the name of your company'
            />
          </div>

          <div className='field-container'>
            <Field
              component={InputField}
              name='registration'
              inputname='Registration number'
              type='number'
              label='Input the registration number of your company'
            />
          </div>

          {/* Second input */}
          <div className='field-container'>
            <Field
              component={InputField}
              name='tin'
              inputname='TIN'
              id='tin'
              label='Input the TIN of your company'
              type='number'
            />
          </div>
          {/* Third input */}
          <div className='field-container'>
            <Form.Label
              sm='2'
              className='pb-0 w-100'
              style={{
                fontSize: "1.5rem",
                lineHeight: "1.8rem",
                marginBottom: "0.5rem",
              }}>
              About
            </Form.Label>
            <FormText className='mw-100 pb-1 mb-2 border-0 fs-8 lh-2 sub-text'>
              Tell us about your company
            </FormText>
            <Col sm='10' className='field-container'>
              <Field
                component='textarea'
                type='text'
                name='about'
                inputname='About'
                className='w-100 border-1 rounded-2 text-area px-1 mt-2 fs-7'
              />
            </Col>
          </div>
          {/* fifth input */}
          {/* <div> */}
          <Form.Label
            sm='2'
            className='pb-0 lh-0.5 w-100'
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.8rem",
              marginBottom: "0.5rem",
            }}>
            State
          </Form.Label>
          <FormText className='mw-100 pb-1 mb-2 border-0 fs-8 lh-2 sub-text'>
            Select the location of your company in Nigeria
          </FormText>
          <Col sm='10' className='field-container'>
            <Field
              name='state'
              component='select'
              className=' text-center select'>
              {states.map((state) => {
                return (
                  <option key={state} value={state}>
                    {state}
                  </option>
                );
              })}
            </Field>
          </Col>
          {/* </div> */}

          <div className='button-container d-flex justify-content-end align-items-end'>
            <Button
              type='submit'
              className='button ms-4 next'
              // disabled={pristine || submitting}
            >
              NEXT
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default reduxForm({
  form: "companyRegistration",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: FormValidation,
})(Profile);
