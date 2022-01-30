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

const TagInput = ({
  SubmitDepartment,
  registrationToken,
  departmentMessage,
  departmentErr,
}) => {
  const navigate = useNavigate();
  const [department, setDepartment] = useState({ department: [] });
  const [request, setRequest] = useState(false);
  const [token, setToken] = useState(null);
  const [success, setSuccess] = useState("");
  const [serverErr, setServerErr] = useState("");
  const [err, setError] = useState("");
  const [errStore, setStore] = useState(false);
  const [noToken, setNoToken] = useState("");

  useEffect(() => {
    let token = null;
    if (registrationToken) {
      token = registrationToken.data.token;
      setToken(token);
    } else {
      console.log("no token");
      setNoToken("Account does not exits. Please sign in!");
      // IF TOKEN NOT AVAILABLE RETURN TO HOME PAGE TO REGISTER.
      return null;
    }
  }, [registrationToken]);

  const OtpResponse = ({ data }) => {
    setRequest(false);
    const { error, success } = data;
    if (error) {
      setStore(true);
      setServerErr(error);
      const removeTimeOut = setTimeout(() => {
        setStore(false);
      }, 400);
      return () => {
        clearTimeout(removeTimeOut);
      };
    } else if (success) {
      setSuccess(success);
      navigate("/Dashboard");
    }
  };

  useEffect(() => {
    console.log(departmentMessage);
    if (!departmentMessage) {
      return null;
    }
    OtpResponse(departmentMessage);
  }, [departmentMessage]);

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
  return (
    <>
      <Container className='add-roles'>
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
            SubmitDepartment(department, token);
            setRequest(true);
          }}>
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
      {console.log(success)}
      {success && (
        <VerificationModal message={`${success}`} close={closeModal} />
      )}
      {noToken && <VerificationModal message={noToken} close={HomePage} />}
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
    registrationToken: state.RegistrationReducer.otp,
    departmentMessage: state.RegistrationReducer.department,
    departmentErr: state.RegistrationReducer.departmentErr,
  };
};

export default connect(mapStateToProps, { SubmitDepartment })(TagInput);
