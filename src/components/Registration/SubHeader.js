import React from "react";

const SubHeader = ({ children }) => {
  return (
    <>
      <h5
        className=' lh-3 text-center text-left-sm'
        style={{
          fontSize: "1.87rem",
          padding: "2.25rem",
          lineHeight: "2.25rem",
        }}>
        {children}
      </h5>
    </>
  );
};

export default SubHeader;
