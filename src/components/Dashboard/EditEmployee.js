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
  close,
}) => {
  const [employeeData, setEmployeData] = useState(initialValue);
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setEmployeData({ ...employeeData, [name]: value });
  };
  return (
    <>
      <EmployeeRegistration
        onHandleChange={onHandleChange}
        employeeData={employeeData}
        editEmployeeAction={UpdateEmployee}
        editEmployeeErr={updateEmployeeErr}
        editEmployeeSuccess={updateEmployeeSuccess}
        editEmployeeLink='editEmployee'
        close={close}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    updateEmployeeErr: state.DashboardReducer.updateEmployeeErr,
    updateEmployeeSuccess: state.DashboardReducer.updateEmployee,
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
