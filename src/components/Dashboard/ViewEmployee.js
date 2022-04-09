import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
// import TableSpinner from "./TableSpinner";
import EditCompanyEmployee from "./EditCompanyEmployee";
import { FetchCompanyEmployee, DeleteEmployeeAction } from "../../Actions";
import DeleteEmployee from "./OptionsModal";
import { Button } from "react-bootstrap";

const ViewEmployee = ({
  FetchCompanyEmployee,
  companyEmployee,
  DeleteEmployeeAction,
}) => {
  const [employeeData, setEmployeeData] = useState([]);
  const [filterValue, setFilterValue] = useState("");

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
    {
      name: "MONTHLY SALARY",
      selector: (row) => row.employee_monthly_gross_salary,
    },
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

  const onFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  // GET EMPLOYEE DATA
  useEffect(() => {
    if (!companyEmployee) {
      return null;
    }
    setEmployeeData(companyEmployee.success);
  }, [companyEmployee]);

  // const filteredItems = employeeData.filter((item) => {
  //   return Object.values(item).contains(filterValue);
  // });
  //   "employeeFirstname, employeeLastname, employee_email, token, employeeNin,
  // employeeRole, employeeDepartment, employeeAgs, employee_mogs, employeeRelieves, employeeBankName,  employeeAccountName, employeeAccountNumber, employeeBankCode"

  function searchTable(val) {
    let filterData = employeeData.filter((list) => {
      let values = Object.values(list);
      const searchString = String(values).includes(val.toUpperCase());
      if (val) {
        if (!searchString) {
          // return "data";
        }
        return searchString;
      } else if (!val) {
        return employeeData;
      }
    });
    return filterData;
  }
  // const filteredItems = employeeData.filter((item) => {
  //   console.log(Object.values(item).includes(filterValue.toUpperCase()));
  // });

  return (
    <div className='mt-1'>
      <div className='filter-container d-flex align-items-end'>
        <div className='w-50 rounded ms-auto px-2  d-flex justify-content-end align-items-center py-2'>
          <input
            className=' col-8 filter-input px-2'
            type='text'
            placeholder='Search for employees by name, role,department, annual salary, monthly salary...'
            onChange={onFilterChange}
          />
        </div>
      </div>
      <DataTable columns={heading} data={searchTable(filterValue)} pagination />
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
