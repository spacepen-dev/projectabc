import React from "react";

const Error = ({ error }) => {
  return (
    <div className=' text-danger mb-2 pb-0' style={{ fontSize: "0.9rem" }}>
      {error}
    </div>
  );
};

export default Error;
