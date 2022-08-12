import React, { useState } from "react";
import EmployeeRegistration from "./EmployeeRegistration";
import { RegisterEmployee } from "../../Actions";
import { connect } from "react-redux";

const AddEmployee = ({
  RegisterEmployee,
  registerEmployeeErr,
  registerEmployeeSuccess,
}) => {
  const [employeeData, setEmployeData] = useState({
    employee_firstname: "",
    employee_lastname: "",
    employee_role: "",
    employee_nin: "",
    employee_email: "",
    employee_annual_gross_salary: "",
    employee_annual_reliefs: "",
  });

  // function currencyFormat(num) {
  //   return 'NGN' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  // }

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
