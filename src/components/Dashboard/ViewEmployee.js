import React, { useState, useMemo, useEffect } from "react";
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
// import TableSpinner from "./TableSpinner";
import EditCompanyEmployee from "./EditCompanyEmployee";
import { FetchCompanyEmployee, DeleteEmployeeAction } from "../../Actions";
import DeleteEmployee from "./OptionsModal";

const ViewEmployee = ({
  FetchCompanyEmployee,
  companyEmployee,
  DeleteEmployeeAction,
}) => {
  const [employeeData, setEmployeeData] = useState([]);

  // FETCH ALL COMPANY EMPLOYEE DATA AND FETCH TOKEN FROM CACHE
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      // SESSION TIME OUT MODAL
      console.log("no token");
    }
    FetchCompanyEmployee(localStorage.getItem("token"));
  }, []);

  // GET EMPLOYEE DATA

  const heading = [
    { name: "FIRST NAME", selector: (row) => row.employee_firstname },
    { name: "LAST NAME", selector: (row) => row.employee_lastname },
    { name: "EMAIL", selector: (row) => row.employee_email },
    { name: "DEPARTMENT", selector: (row) => row.employee_department },
    { name: "ROLE", selector: (row) => row.employee_role },
    // {
    //   name: "MONTHLY SALARY",
    //   selector: (row) => row.employee_monthly_gross_salary,
    // },
    {
      name: "ANNUAL SALARY",
      selector: (row) => row.employee_annual_gross_salary,
    },
    { name: "RELIEVES", selector: (row) => row.employee_relives },
    { name: "ACCOUNT NAME", selector: (row) => row.employee_bankAccount_name },
    {
      name: "ACCOUNT NUMBER",
      selector: (row) => row.employee_bankAccount_number,
    },
    // { name: "BANK NAME", selector: (row) => row.transactionStatus },
    { name: "EMPLOYEE ID", selector: (row) => row.employee_token },

    {
      cell: (row) => <EditCompanyEmployee data={row} />,
      ignoreRowClick: true,
      allowOverflow: true,
      name: "EDIT EMPLOYEE DETAILS",
    },
    {
      cell: (row) => (
        <DeleteEmployee data={row} deleteAction={DeleteEmployeeAction} />
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      name: "REMOVE EMPLOYEE",
    },
  ];

  // GET EMPLOYEE DATA
  useEffect(() => {
    if (!companyEmployee) {
      return null;
    }
    setEmployeeData(companyEmployee);
  });

  return (
    <div className=' mt-1'>
      <DataTable
        columns={heading}
        // selectableRows
        data={employeeData.success}
        pagination
        // onSelectedRowsChange={checkedEmployeeData}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    companyEmployee: state.DashboardReducer.companyEmployee.data,
    removeEmployeeRes: state.DashboardReducer.removeEmployee,
  };
};

export default connect(mapStateToProps, {
  FetchCompanyEmployee,
  DeleteEmployeeAction,
})(ViewEmployee);
