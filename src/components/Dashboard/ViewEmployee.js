import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
// import TableSpinner from "./TableSpinner";
import EditCompanyEmployee from "./EditCompanyEmployee";
import { FetchCompanyEmployee, DeleteEmployeeAction } from "../../Actions";
import DeleteEmployee from "./OptionsModal";
import { EmployeeIcon } from "./svg/SVG";

const ViewEmployee = ({
  FetchCompanyEmployee,
  companyEmployee,
  DeleteEmployeeAction,
}) => {
  const [employeeData, setEmployeeData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [pending, setPending] = useState(false);

  // FETCH ALL COMPANY EMPLOYEE DATA AND FETCH TOKEN FROM CACHE
  useEffect(() => {
    if (!localStorage.getItem("aminien_token")) {
      // SESSION TIME OUT MODAL
      console.log("no token");
    }
    setPending(true);
    FetchCompanyEmployee(localStorage.getItem("aminien_token"));
  }, [FetchCompanyEmployee]);

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
      selector: (row) =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NGN",
        }).format(row.employee_annual_gross_salary),
    },
    {
      name: "RELIEVES",
      selector: (row) =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NGN",
        }).format(row.employee_relives),
    },
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
      name: "EDIT EMPLOYEE ",
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
    setPending(false);
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
      // if (val) {
      //   if (!searchString) {
      //     // return "data";
      //   }
      //   return searchString;
      // } else if (!val) {
      //   return employeeData;
      // }

      return val ? searchString : employeeData;
    });
    return filterData;
  }
  // const filteredItems = employeeData.filter((item) => {
  //   console.log(Object.values(item).includes(filterValue.toUpperCase()));
  // });
  console.log(companyEmployee);
  return (
    <div className='mt-1'>
      <div className='filter-container d-flex align-items-end justify-content-center'>
        <div className='w-100 px-4 py-1'>
          <input
            className='w-100 filter-input px-2'
            type='text'
            placeholder='Search for employees by name, role,department, annual salary, monthly salary...'
            onChange={onFilterChange}
          />
        </div>
      </div>
      <DataTable
        columns={heading}
        data={employeeData}
        progressPending={pending}
        striped
        pagination
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
