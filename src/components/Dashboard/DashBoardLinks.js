import React from "react";
import Links from "./Links";
import SideBarHeading from "./SideBarHeading";

const DashBoardLinks = ({ heading, name, icon, id, data, none, page }) => {
  return (
    <>
      <SideBarHeading heading={heading} none={none} />
      <div
        className={`dashboard-link ${
          id === page ? "dashboard-link-active" : ""
        }`}
        id={id}
        onClick={() => data(id)}>
        <Links name={name} icon={icon} />
      </div>
    </>
  );
};

export default DashBoardLinks;
