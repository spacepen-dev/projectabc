import React, { useState, useEffect } from "react";
import { Form, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import LabelText from "./LabelText";
import AddRoles from "./AddRoles";
import LoaderButton from "../LoaderButton";
import NetWorkErrors from "../NetWorkErrors";
import { SubmitDepartment } from "../../Actions";
import VerificationModal from "../Dashboard/VerificationModal";

const TagInput = ({ SubmitDepartment, departmentMessage, departmentErr }) => {
  const navigate = useNavigate();
  const [department, setDepartment] = useState({ department: [] });
  const [request, setRequest] = useState(false);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [success, setSuccess] = useState("");
  const [serverErr, setServerErr] = useState("");
  const [err, setError] = useState("");
  const [errStore, setStore] = useState(false);

  // USEEFFECT TO GET DATA FROM CACHE
  useEffect(() => {
    if (
      !localStorage.getItem("aminien_token") ||
      !localStorage.getItem("aminien_email")
    ) {
      // SHOW THE WARNING MODAL
      setToken("");
    } else {
      setToken(localStorage.getItem("aminien_token"));
      setEmail(localStorage.getItem("aminien_email"));
    }
  }, []);

  // USEEFFECT TO FETCH THE SERVER SUCCESS MESSAGE AND ERROR MESSAGE
  useEffect(() => {
    if (!departmentMessage) {
      return null;
    } else {
      const { error, success } = departmentMessage.data;
      if (error) {
        setStore(true);
        setServerErr(error);
        const removeTimeOut = setTimeout(() => {
          setStore(false);
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      } else if (success) {
        setSuccess(success);
        navigate("/Dashboard");
      }
    }
  }, [departmentMessage, navigate]);

  useEffect(() => {
    if (departmentErr) {
      setRequest(false);
      setStore(true);
      setError(departmentErr.message);
      const removeTimeOut = setTimeout(() => {
        setStore(false);
      }, 4000);
      return () => {
        clearTimeout(removeTimeOut);
      };
    } else {
      return null;
    }
  }, [departmentErr]);

  const closeModal = () => {
    setSuccess("");
    // close();
  };
  const HomePage = () => {
    navigate("/");
  };

  const Validation = () => {
    if (department.length === 0) {
      setStore(true);
      setTimeout(() => {
        setStore(false);
      }, 3000);
      setServerErr("Provide the departments available in your organization!");
    } else {
      setRequest(true);
      SubmitDepartment(department, token, email);
    }
  };

  return (
    <>
      <Container className='add-roles' style={{ maxWidth: "50rem" }}>
        <div className='d-flex align-items-center justify-content-center'>
          <h3 className='text-center'>DEPARTMENTS IN YOUR ORGANIZATION</h3>
        </div>
        <div className='mb-3'>
          <LabelText
            name='Departments'
            label='Add the department in your company'
          />
        </div>

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
      {success && (
        <VerificationModal message={`${success}`} close={closeModal} />
      )}
      {!token && (
        <VerificationModal
          message={"Session ended! Please sign in."}
          close={HomePage}
        />
      )}
      {errStore && (
        <NetWorkErrors
          errMessage={err}
          serverErr={serverErr}
          close={() => {
            setStore(null);
          }}
          removeLoader={() => setRequest(false)}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // registrationToken: state.RegistrationReducer.otp,
    departmentMessage: state.RegistrationReducer.department,
    departmentErr: state.RegistrationReducer.departmentErr,
  };
};

export default connect(mapStateToProps, { SubmitDepartment })(TagInput);
