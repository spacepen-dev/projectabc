import React, { useEffect, useReducer, useState } from "react";
import Input from "../Registration/Input";
import { Button, Container, Form } from "react-bootstrap";
import LoaderButton from "../LoaderButton";
import LabelText from "../Registration/LabelText";
import { EditDepartment } from "../../Actions";
import { connect } from "react-redux";
import SuccessRequestModal from "./SuccessRequestModal";
import NetWorkErrors from "../NetWorkErrors";

let initState = {
  request: false,
  res: "",
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST":
      return { ...state, request: true };
    case "REQUEST_RESPONSE":
      return { request: false, res: action };
    case "NETWORK_ERROR":
      return { request: false, error: action };
    default:
      break;
  }
};

const localStorageObject = {
  email: localStorage.getItem("aminien_email"),
  companyToken: localStorage.getItem("aminien_token"),
};
const AddRoles = ({
  data,
  EditDepartment,
  updateDepartment,
  updateDepartmentErr,
  goBack,
}) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [token, setToken] = useState(localStorageObject);

  const [modal, setShowModal] = useState({ response: false, error: false });

  //   console.log(data);

  const [tags, setTags] = useState(() => {
    return data.map((element) => {
      return element.companyDepartment;
    });
  });

  useEffect(() => {
    setToken(localStorageObject);
  }, []);

  const [inputData, setInputData] = useState("");
  const [departmentSug, setDepartmentSug] = useState([
    "Marketing",
    "Sales",
    "Engineering",
    "Software",
  ]);

  //   const resolveDepartment = () => {};

  //   console.log(resolveDepartment());
  // const Names = ['Thomas', "Silver", 'Prosper']

  // const a = [...Names, 'Jessica']

  const keyPress = (e) => {
    let tag = e.target.value.replace(/\s+/g, " ");
    if (e.code === "Comma" && tag !== "") {
      e.preventDefault();

      setTags([...tags, tag]);
      e.target.value = "";
    }
  };

  // useEffect(() => {
  //   data(tags);
  // }, [data, tags]);

  const closeTag = (indx) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== indx)]);
  };
  const onChange = (e) => {
    const input = e.target.value;
    setInputData(input);
  };

  const onClick = () => {
    setInputData("");
    if (!inputData) {
      return null;
    } else {
      setTags([...tags, inputData]);
    }
  };
  const tagList = () => {
    return tags.map((tag, index) => {
      return (
        <li key={index} className='btn-add'>
          {tag}
          {
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                closeTag(index);
              }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                fill='currentColor'
                className=''
                viewBox='0 0 16 16'>
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
              </svg>
            </span>
          }
        </li>
      );
    });
  };

  const suggestDepartment = () => {
    return departmentSug.map((tag, index) => {
      return (
        <li
          key={index}
          className='btn-add sug-tag'
          onClick={() => {
            setTags([...tags, tag]);
            removeSuggestion(tag);
          }}>
          {tag}
        </li>
      );
    });
  };

  // RESPONSE FROM THE DATABASE
  useEffect(() => {
    if (!updateDepartment) {
      return null;
    }
    const { success, error } = updateDepartment.data;
    if (error) {
      dispatch({ type: "REQUEST_RESPONSE", payload: error });
      setShowModal((prev) => {
        return { ...prev, response: true };
      });
    }
    dispatch({ type: "REQUEST_RESPONSE", payload: success });
    setShowModal((prev) => {
      return { ...prev, response: true };
    });

    const id = setTimeout(() => {
      dispatch({ type: "REQUEST_RESPONSE", payload: "" });
      setShowModal((prev) => {
        return { ...prev, response: false };
      });
    }, 4000);

    return () => {
      clearTimeout(id);
    };
  }, [updateDepartment]);

  // RESPONSE FORM THE NETWORK

  useEffect(() => {
    if (!updateDepartmentErr) {
      return null;
    }

    dispatch({ type: "NETWORK_ERROR", payload: updateDepartmentErr.message });
    setShowModal((prev) => {
      return { ...prev, errorModal: true };
    });

    let id = setTimeout(() => {
      setShowModal((prev) => {
        return { ...prev, errorModal: false };
      });
    }, 4000);

    return () => {
      clearTimeout(id);
    };
  }, [updateDepartmentErr]);

  const removeSuggestion = (tag) => {
    return setDepartmentSug([...departmentSug.filter((cur) => cur !== tag)]);
  };

  const Validation = () => {
    // if (department.length === 0) {
    //   setStore(true);
    //   setTimeout(() => {
    //     setStore(false);
    //   }, 3000);
    //   setServerErr("Provide the departments available in your organization!");
    // } else {
    //   setRequest(true);
    //   SubmitDepartment(department, token, email);
    // }
  };

  // function

  return (
    <>
      <Container className='add-roles' style={{ maxWidth: "50rem" }}>
        <div className='d-flex align-items-center justify-content-center'>
          {/* <h3 className='text-center'>Edit depart</h3> */}
        </div>
        <div className='mb-3'>
          <LabelText
            name='Edit Departments'
            label='Update the departments in your company'
          />
        </div>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "REQUEST", request: true });
            Validation();
            // company token and old department, new department
            EditDepartment(token.companyToken, tags, token.email);
          }}
          class='d-flex flex-column justify-content-between align-items-start'>
          <div className='w-100 h-25 d-flex justify-content-between align-items-center'>
            <Input type='text' value={inputData} handleChange={onChange} />
            <div className='mx-3 pt-3'>
              <button
                class=' text-white button '
                type='button'
                onClick={onClick}>
                Add
              </button>
            </div>
          </div>
          <div className='d-flex w-100'>{suggestDepartment()}</div>
          <div className='content'>
            <ul>
              {tagList()}
              <input type='text' spellCheck='false' onKeyPress={keyPress} />
            </ul>
          </div>
          <div className='button-container w-100 d-flex justify-content-end'>
            <div className='ms-auto mt-4 double-btns'>
              <Button
                type='button'
                className='button me-3'
                // disabled={this.state.request ? true : false}
                onClick={() => goBack(1)}>
                Back
              </Button>
              <LoaderButton
                btnName='Save'
                btnStyles={"d-block me-auto"}
                request={state.request}
              />
            </div>
          </div>
        </Form>
      </Container>
      {modal.response && <SuccessRequestModal message={state.res.payload} />}
      {state.error.payload && (
        <NetWorkErrors
          errMessage={state.error.payload}
          // serverErr={serverErr}
          close={() => {
            // setStore(null);
          }}
          // removeLoader={() => setRequest(false)}
        />
      )}
    </>
    //   {success && (
    //     <VerificationModal message={`${success}`} close={closeModal} />
    //   )}
    //   {!token && (
    //     <VerificationModal
    //       message={"Session ended! Please sign in."}
    //       close={HomePage}
    //     />
    //   )}
  );
};

const mapStateToProps = (state) => {
  return {
    updateDepartment: state.DashboardReducer.editDepartment,
    updateDepartmentErr: state.DashboardReducer.editDepartmentErr,
    // companyDepartment: state.DashboardReducer.fetchDepartment.data,
    // employeeRoles: state.DashboardReducer.companyEmployee,
  };
};

export default connect(mapStateToProps, { EditDepartment })(AddRoles);
