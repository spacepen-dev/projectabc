import React from "react";

const SubHeader = ({ children }) => {
  return (
    <>
      <h5
        className=' lh-3 text-center text-left-sm'
        style={{
          fontSize: "1.2rem",
          padding: "0.5rem",
          lineHeight: "1.13rem",
        }}>
        {children}
      </h5>
    </>
  );
};

export default SubHeader;
