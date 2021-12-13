import React, { useState, useEffect } from "react";

const AddRoles = ({ data }) => {
  const [tags, setTags] = useState([]);

  const keyPress = (e) => {
    let tag = e.target.value.replace(/\s+/g, " ");
    if (e.code === "Enter" && tag !== "") {
      e.preventDefault();
      setTags([...tags, tag]);
      e.target.value = "";
    }
  };

  useEffect(() => {
    data(tags);
  }, [tags]);

  const closeTag = (indx) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== indx)]);
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
                width='25'
                height='25'
                fill='currentColor'
                className='bi bi-x'
                viewBox='0 0 16 16'>
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
              </svg>
            </span>
          }
        </li>
      );
    });
  };

  return (
    <div className='content'>
      <ul>
        {tagList()}
        <input type='text' spellCheck='false' onKeyPress={keyPress} />
      </ul>
    </div>
  );
};

export default AddRoles;
