import React, { useState, useMemo, useEffect } from "react";
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
// import TableSpinner from "./TableSpinner";
import { FetchCompanyEmployee } from "../../Actions";
import { DeleteEmployee, EditEmployee } from "./OptionsModal";

const ViewEmployee = ({ FetchCompanyEmployee, companyEmployee }) => {
  const [token, setToken] = useState("");
  const [employeeData, setEmployeeData] = useState([]);
  const [showEditModal, setEditModal] = useState(false);

  // FETCH  TOKEN FROM CACHE
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      // SESSION TIME OUT MODAL
      console.log("no token");
    } else {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  // FETCH ALL COMPANY EMPLOYEE DATA
  useEffect(() => {
    FetchCompanyEmployee(
      "5245ff745564886c0aadf892117d597601b307acba4f54f55aafc33bb06bbbf6ca803e9a"
    );
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
      cell: (row) => <EditEmployee data={row} />,
      ignoreRowClick: true,
      allowOverflow: true,
      name: "EDIT EMPLOYEE DETAILS",
      // button: true,
    },
    {
      cell: () => <DeleteEmployee />,
      // ignoreRowClick: true,
      allowOverflow: true,
      name: "REMOVE EMPLOYEE",
      // button: true,
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
      {/* {showEditModal && <OptionsModal data={employeeData} />} */}

      {/* // onSelectedRowsChange={checkedEmployeeData} */}
      {/* <DashboardTable
        heading={heading}
        tableData={data}
        employeeData={employeeData}
        display="flex"
      /> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    companyEmployee: state.DashboardReducer.companyEmployee.data,
  };
};

export default connect(mapStateToProps, { FetchCompanyEmployee })(ViewEmployee);
