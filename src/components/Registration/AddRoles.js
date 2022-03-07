import React, { useState, useEffect } from "react";
import Input from "./Input";

const AddRoles = ({ data }) => {
  const [tags, setTags] = useState([]);
  const [inputData, setInputData] = useState("");
  const [departmentSug, setDepartmentSug] = useState([
    "Marketing",
    "Sales",
    "Engineering",
    "Software",
  ]);

  const keyPress = (e) => {
    let tag = e.target.value.replace(/\s+/g, " ");
    if (e.code === "Comma" && tag !== "") {
      e.preventDefault();
      setTags([...tags, tag]);
      e.target.value = "";
    }
  };

  useEffect(() => {
    data(tags);
  }, [data, tags]);

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

  const removeSuggestion = (tag) => {
    return setDepartmentSug([...departmentSug.filter((cur) => cur !== tag)]);
  };

  return (
    <React.Fragment>
      <div className='w-100 h-25 d-flex justify-content-between align-items-center'>
        <Input type='text' value={inputData} handleChange={onChange} />
        <div className='mx-3 pt-3'>
          <button class=' text-white button ' type='button' onClick={onClick}>
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
    </React.Fragment>
  );
};

export default AddRoles;
