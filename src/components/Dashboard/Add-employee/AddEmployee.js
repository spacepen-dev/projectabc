import React, { useState } from "react";
import { RegisterEmployee } from "../../../Actions";
import { connect } from "react-redux";
import EmployeeRegistration from "../employee-component";

const AddEmployee = ({
  RegisterEmployee,
  registerEmployee
}) => {
  const [employeeData, setEmployeData] = useState({
    employeeFirstname: "",
    employeeLastname: "",
    employeeRole: "",
    employeeTin: "",
    employeeEmail: "",
    employeeSalary: "",
    employeeRelives: "",
    employeePhoneNumber: "",
    employeeState: '',
    companyPensionCode: '',
    employeePensionCode:''
    
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
        addEmployeeSuccess={registerEmployee}
        addEmployeeLink='addEmployee'
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    registerEmployee: state.RegisterEmployeeReducer
  };
};
export default connect(mapStateToProps, { RegisterEmployee })(AddEmployee);
