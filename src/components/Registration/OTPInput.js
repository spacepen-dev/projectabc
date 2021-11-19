import React from "react";

const OTPInput = ({ moveToNextInput, id, inputRef }) => {
  return (
    <div>
      <input
        type='text'
        className='text-center'
        maxLength='1'
        id={id}
        onKeyUp={moveToNextInput}
        ref={inputRef}
      />
    </div>
  );
};

export default OTPInput;
