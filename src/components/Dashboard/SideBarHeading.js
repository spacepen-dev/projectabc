import React from "react";

const SideBarHeading = ({ heading, none }) => {
  return (
    <div className={`sidebar-heading d-flex align-items-center d-${none} `}>
      <h3>{heading}</h3>
    </div>
  );
};

export default SideBarHeading;
