import React, { useEffect, useState } from "react";
import EmployeeRegistration from "./EmployeeRegistration";
import { RegisterEmployee } from "../../Actions";
import { connect } from "react-redux";

const AddEmployee = ({
  RegisterEmployee,
  registerEmployeeErr,
  registerEmployeeSuccess,
  loginToken,
}) => {
  const [employeeData, setEmployeData] = useState({
    firstName: "",
    LastName: "",
    role: "",
    annual: 0,
    nin: "",
    email: "",
    relieves: 0,
    accountName: "",
    accountNumber: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setEmployeData({ ...employeeData, [name]: value });
  };

  return (
    <div>
      <EmployeeRegistration
        removeBtn='none'
        buttonText='Add'
        onHandleChange={onHandleChange}
        employeeData={employeeData}
        registerEmployeeAction={RegisterEmployee}
        addEmployeeErr={registerEmployeeErr}
        addEmployeeSuccess={registerEmployeeSuccess}
        addEmployeeLink='addEmployee'
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    registerEmployeeErr: state.DashboardReducer.registerEmployeeErr,
    registerEmployeeSuccess: state.DashboardReducer.registerEmployees,
  };
};
export default connect(mapStateToProps, { RegisterEmployee })(AddEmployee);
