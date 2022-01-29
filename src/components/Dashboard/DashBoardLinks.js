import React from "react";
import SideBarHeading from "./SideBarHeading";
import { Link } from "react-router-dom";

const DashBoardLinks = ({
  heading,
  name,
  icon,
  id,
  data,
  none,
  page,
  pathLink,
}) => {
  return (
    <>
      <SideBarHeading heading={heading} none={none} />
      <Link
        to={pathLink}
        className={`dashboard-link ${
          id === page ? "dashboard-link-active" : ""
        }`}
        id={id}
        onClick={() => data(id)}>
        <small to={`$name`} className='links'>
          {icon}
          {name}
        </small>
      </Link>
    </>
  );
};

export default DashBoardLinks;
