import React, { useEffect, useState } from "react";
import DashboardTable from "./DashboardTable";
import { FetchSalaryHistory } from "../../Actions";
import { connect } from "react-redux";

const SalariesHistory = ({ FetchSalaryHistory }) => {
  const [{ token, email }] = useState(() => {
    return {
      token: localStorage.getItem("aminien_token"),
      email: localStorage.getItem("aminien_email"),
    };
  });

  const heading = [
    { name: "FIRST NAME", selector: (row) => row.employeeFirstname },
    { name: "LAST NAME", selector: (row) => row.employeeLastname },
    { name: "EMAIL", selector: (row) => row.email },
    { name: "ACCOUNT NAME", selector: (row) => row.accountName },
    { name: "ACCOUNT NUMBER", selector: (row) => row.accountNumber },
    { name: "TAX DEDUCTED", selector: (row) => row.employeeTax },
    { name: "SALARY", selector: (row) => row.employeeSalary },
    { name: "DAY", selector: (row) => row.day },
    { name: "MONTH", selector: (row) => row.month },
    { name: "YEAR", selector: (row) => row.year },
    { name: "TRANSACTION ID", selector: (row) => row.transactionId },
    { name: "TRANSACTION STATUS", selector: (row) => row.transactionStatus },
  ];

  useEffect(() => {
    FetchSalaryHistory(email, token);
  }, [token, email, FetchSalaryHistory]);
  const tableData = [];

  return (
    <>
      <DashboardTable heading={heading} data={tableData} />
    </>
  );
};

export default connect(null, { FetchSalaryHistory })(SalariesHistory);
