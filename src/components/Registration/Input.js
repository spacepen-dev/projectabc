import React from "react";
import Error from "./Error";

const Input = ({
  inputName,
  handleChange,
  type,
  value,
  err,
  onPress,
  pad,
  padTop,
}) => {
  return (
    <React.Fragment>
      <input
        name={inputName}
        type={type}
        value={value}
        onChange={handleChange}
        onInput={onPress}
        className={`w-100 border-1 ${
          err ? "border-danger" : null
        } registration-input rounded-1 px-2 border-1`}
        style={{ paddingBottom: `${pad}rem`, paddingTop: `${padTop}rem` }}
      />
      <Error error={err} />
    </React.Fragment>
  );
};

export default Input;
