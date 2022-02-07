import React from "react";


export const checkBox = (handelOnChange) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onChange={handelOnChange}
      />
    </div>
  );
};

