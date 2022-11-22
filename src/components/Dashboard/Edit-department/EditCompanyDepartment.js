import React, { useState } from "react";
import Input from "../../Registration/Input";
import { Button, Container, Form } from "react-bootstrap";
import LoaderButton from "../../LoaderButton";
import LabelText from "../../Registration/LabelText";
import { connect } from "react-redux";
import useToken from "../../../hooks/useToken";
import useBusinessToken from "../../../hooks/useBusinessToken";
import { EditDepartment } from "./EditDepartmentReducer";


const AddRoles = ({
  data,
  EditDepartment,
  departments,
  goBack,
}) => {
  const { token } = useToken();
  const { bizToken } = useBusinessToken();

  const [tags, setTags] = useState(() => {
    return departments?.Data.map((element) => {
      return element.companyDepartment;
    });
  });

 

  const [inputData, setInputData] = useState("");
  const [departmentSug, setDepartmentSug] = useState([
    "ICT",
    "Sales",
    "Audit",
    "Account",
    "Inventory",
    "Store",
    "Printing",
    "Control",
    "Engineering",
    "Executive",
    "Security",
    "Adminstration",
    "Teacher",
    "Propietor",
    "Bursar",
  ]);

  const keyPress = (e) => {
    let tag = e.target.value.replace(/\s+/g, " ");
    if (e.code === "Comma" && tag !== "") {
      e.preventDefault();

      setTags([...tags, tag]);
      e.target.value = "";
    }
  };



  const closeTag = (indx) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== indx)]);
    setDepartmentSug([...departmentSug, ...tags.filter((tag) => tags.indexOf(tag) === indx)])

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
          style={{ cursor: "pointer" }}
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

  const removeSuggestion = (tag) => {
    return setDepartmentSug([...departmentSug.filter((cur) => cur !== tag)]);
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
            // company token and old department, new department
            EditDepartment({departments:tags, businessToken: bizToken, userToken: token});
          }}
          className='d-flex flex-column justify-content-between align-items-start'>
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
          <div className='d-flex justify-content-start align-items-center flex-wrap w-100'>{suggestDepartment()}</div>
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
                // request={state.request}
              />
            </div>
          </div>
        </Form>
      </Container>
    </>
   
  );
};

const mapStateToProps = (state) => {
  return {
    departments: state.FetchBusinessDepartment,
  };
};

export default connect(mapStateToProps, { EditDepartment })(AddRoles);
