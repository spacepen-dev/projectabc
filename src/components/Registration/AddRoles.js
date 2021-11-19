import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import LabelText from "./LabelText";

const AddRoles = () => {
  return (
    <Container className='add-roles'>
      <div className='d-flex align-items-center justify-content-center'>
        <h3>DEPARTMENTS/ROLES IN YOUR ORGANIZATION</h3>
      </div>
      <div className='mb-3'>
        <LabelText
          name='Departments'
          label='Add the department in your company'
        />
      </div>
      <Form className=''>
        <div className=''>
          {/* <textarea data-allow-plan-increase='true'></textarea> */}
        </div>
        <div className='d-flex align-items-center'>
          <LabelText name='Roles' label='Add the roles in your company' />
        </div>
        <div className='btn-add w-100 h-100'>
          <button type='button'>Marketing</button>
        </div>
        <div className=''>
          <textarea data-allow-plan-increase='true'></textarea>
        </div>
        <div className='button-container w-100'>
          <Button type='submit' className='button d-block ms-auto'>
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddRoles;
