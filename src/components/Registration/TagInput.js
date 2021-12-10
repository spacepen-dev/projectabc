import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import LabelText from "./LabelText";
import AddDepartment from "./AddDepartment";
import AddRoles from "./AddRoles";

const TagInput = () => {
  const [department, setDepartment] = useState({ department: [] });
  const [roles, setRoles] = useState({ role: [] });
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
        <AddDepartment data={(val) => setDepartment(val)} />

        <div className='d-flex align-items-center'>
          <LabelText name='Roles' label='Add the roles in your company' />
        </div>

        {/*  */}
        <AddRoles data={(val) => setRoles(val)} />
        <div className='button-container w-100'>
          <Button
            type='button'
            className='button d-block ms-auto'
            onClick={() => console.log({ department, roles })}>
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default TagInput;
