import React, { useState } from "react";
import EmployeeRegistration from "./EmployeeRegistration";
import { connect } from "react-redux";
import { UpdateEmployee } from "../../Actions";

const EditEmployee = ({
  initialValue,
  updateEmployeeErr,
  updateEmployeeSuccess,
  UpdateEmployee,
  registrationToken,
}) => {
  const [employeeData, setEmployeData] = useState(initialValue);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setEmployeData({ ...employeeData, [name]: value });
  };
  return (
    <EmployeeRegistration
      onHandleChange={onHandleChange}
      employeeData={employeeData}
      employee={UpdateEmployee}
      employeeErr={updateEmployeeErr}
      employeeSuccess={updateEmployeeSuccess}
      token={registrationToken}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    updateEmployeeErr: state.DashboardReducer.updateEmployeeErr,
    updateEmployeeSuccess: state.DashboardReducer.updateEmployees,
    registrationToken: state.RegistrationReducer.otp,
  };
};
export default connect(mapStateToProps, { UpdateEmployee })(EditEmployee);

/**
 *  const getAnnualRelieves = () => {
    let HighValue = 0;

    let OnePercent = employeeData["annual"] * 0.01;
    let TwentyPercent = employeeData["annual"] * 0.2;

    let FixedAmount = 200000;
    if (!employeeData) {
      return 0;
    } else {
      if (FixedAmount > OnePercent) {
        HighValue = FixedAmount + TwentyPercent;
      } else if (FixedAmount < OnePercent) {
        HighValue = TwentyPercent + TwentyPercent;
      }
    }
 */
