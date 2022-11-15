import React, { useState, useEffect } from "react";
import { Form, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import LabelText from "../../../components/Registration/LabelText";
import AddRoles from "./AddRoles";
import LoaderButton from "../../../components/LoaderButton";
import { SubmitDepartment } from "../../../Actions";
import { FormContainer } from "../main/RegistrationFormComp";

const AddDepartment = ({ SubmitDepartment, departmentMessage, departmentErr }) => {
  const navigate = useNavigate();
  const [department, setDepartment] = useState({ department: [] });
  const [request, setRequest] = useState(false);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  // USEEFFECT TO GET DATA FROM CACHE
  // useEffect(() => {
  //   if (
  //     !localStorage.getItem("aminien_token") ||
  //     !localStorage.getItem("aminien_email")
  //   ) {
  //     // SHOW THE WARNING MODAL
  //     setToken("");
  //   } else {
  //     setToken(localStorage.getItem("aminien_token"));
  //     setEmail(localStorage.getItem("aminien_email"));
  //   }
  // }, []);

  // USEEFFECT TO FETCH THE SERVER SUCCESS MESSAGE AND ERROR MESSAGE
  


  const Validation = () => {
    if (department.length === 0) {
      // setStore(true);
      
    } else {
      // setRequest(true);
      SubmitDepartment(department, token, email);
    }
  };

  return <FormContainer name='Add department' pageName='Department' desc='Add department available in your organization'>
    <Container className='add-roles' style={{ maxWidth: "50rem" }}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            Validation();
          }}
          class='d-flex flex-column justify-content-between align-items-start'>
          <AddRoles data={(val) => setDepartment(val)} />
          <div className='button-container w-100 d-flex justify-content-end'>
            <LoaderButton
              btnName='Save'
              btnStyles={"d-block me-auto"}
              request={request}
            />
          </div>
        </Form>
      </Container>
      </FormContainer>

};

const mapStateToProps = (state) => {
  // return {
  //   // registrationToken: state.RegistrationReducer.otp,
  //   departmentMessage: state.RegistrationReducer.department,
  //   departmentErr: state.RegistrationReducer.departmentErr,
  // };
};

export default connect(mapStateToProps, { SubmitDepartment })(AddDepartment);
