import React from "react";

/**
 * 
 *  height: 5rem;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
 */

const Lines = () => {
  return (
    <div className='lines d-flex flex-column justify-content-end'>
      <span className='d-block ms-auto border border-1  rounded-1 '></span>
      <span className='d-block ms-auto border border-1 rounded-1'></span>
      <span className='d-block ms-auto border border-1 rounded-1'></span>
    </div>
  );
};

export default Lines;
