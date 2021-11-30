import React from "react";
import { Field, reduxForm } from "redux-form";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import DashBoardText from "./DashBoardText";

const EmployeeRegistration = ({
  handleSubmit,
  removeBtn,
  buttonText,
  close,
}) => {
  const renderInput = ({ input }) => {
    return (
      <div className='py-1.5'>
        <Form.Control
          name={input.name}
          {...input}
          className={`w-100 border-1 registration-input rounded-1 px-2 border-1 fs-4 my-3`}
        />
      </div>
    );
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Form
      className='d-flex flex-column pt-5  mt-5 justify-content-center w-100 mx-auto employee-form'
      onSubmit={handleSubmit(onSubmit)}>
      <Row className='mb-3 wrap'>
        <Form.Group as={Col} controlId='formGridFirstName'>
          <DashBoardText
            name='First Name'
            label='Enter the name of your company'
          />
          <Field component={renderInput} name='First name' type='text' />
        </Form.Group>

        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText name='Last Name' label='Enter Last name of employee' />
          <Field component={renderInput} name='last name' type='text' />
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='National Identity Number'
            label='Enter National Indentity Number'
          />
          <Field component={renderInput} name='NIN' type='text' />
        </Form.Group>

        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='TIN'
            label='Enter the 
                    TIN of the company'
          />
          <Field component={renderInput} name='tin' type='text' />
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText name='Role' label='Enter Role ' />
          <Field component={renderInput} name='role' type='text' />
        </Form.Group>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText name='Department' label='Enter employee department' />
          <Field name='department' type='text' component={renderInput} />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Annual Gross Salary'
            label='Enter annual gross salary'
          />
          <Field name='annual salary' type='text' component={renderInput} />
        </Form.Group>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Monthly Gross Salary'
            label='Enter employee monthly salary'
          />
          <Field component={renderInput} name='monthly salary' type='text' />
        </Form.Group>
      </Row>
      <Form.Group className='mt-3' controlId='formGrid'>
        <DashBoardText name='Relives' label='Input the TIN of the company ' />
        <Field component={renderInput} name='relives' type='text' />
      </Form.Group>
      <div className='ms-auto mt-5 double-btns'>
        <Button type='button' className={`button ms-auto d-${removeBtn} `}>
          Delete
        </Button>
        <Button
          type='submit'
          className='button ms-4'
          // disabled={pristine || submitting}
        >
          <Spinner as='span' animation='border' size='lg' />
          {buttonText}
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: "ADD-EMPLOYEES",
})(EmployeeRegistration);
