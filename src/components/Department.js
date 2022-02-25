import React from "react";
// import { Button } from "react-bootstrap";
import DepartmentSVG from "./Registration/DepartmentSVG";

const Department = () => {
  return (
    <div className="hand-phone-div">
      <h5 className="department-h3">DEPARTMENTS/ROLES IN YOUR ORGANIZATION</h5>
      <DepartmentSVG />
      <div>
        <p className="paid-success department-p">
          You haven't addded any department or role to your company profile.
        </p>

        {/* <Link
          to="/add-roles"
          type="button"
          className="button ms-4 next d-flex justify-content-center align-items-center"
        >
          ADD
        </Link> */}
      </div>
    </div>
  );
};

export default Department;
