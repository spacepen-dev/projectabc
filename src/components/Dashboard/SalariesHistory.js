import React, { useEffect, useState } from "react";
import DashboardTable from "./DashboardTable";
import { FetchSalaryHistory } from "../../Actions";
import { connect } from "react-redux";

const SalariesHistory = ({ FetchSalaryHistory, companySalary }) => {
  const [{ token, email }] = useState(() => {
    return {
      token: localStorage.getItem("aminien_token"),
      email: localStorage.getItem("aminien_email"),
    };
  });

  const [data, setData] = useState([]);

  const heading = [
    { name: "DATE", selector: (row) => row.date },
    { name: "FIRST NAME", selector: (row) => row.employeeFirstname },
    { name: "LAST NAME", selector: (row) => row.employeeLastname },
    { name: "EMAIL", selector: (row) => row.email },
    { name: "ACCOUNT NAME", selector: (row) => row.accountName },
    { name: "ACCOUNT NUMBER", selector: (row) => row.accountNumber },
    {
      name: "TAX DEDUCTED",
      selector: (row) =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NGN",
        }).format(row.employeeTax),
    },
    {
      name: "SALARY PAID",
      selector: (row) =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NGN",
        }).format(row.employeeSalary),
    },
    // { name: "DAY", selector: (row) => row.day },
    // { name: "MONTH", selector: (row) => row.month },
    // { name: "YEAR", selector: (row) => row.year },
    { name: "TRANSACTION ID", selector: (row) => row.transactionId },
    { name: "TRANSACTION STATUS", selector: (row) => row.transactionStatus },
  ];
  useEffect(() => {
    FetchSalaryHistory(email, token);
  }, [token, email, FetchSalaryHistory]);

  useEffect(() => {
    if (!companySalary) {
      return null;
    } else {
      const { success } = companySalary;
      setData(success);
    }
  }, [companySalary]);

  return (
    <>
      <DashboardTable heading={heading} data={data} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    companySalary: state.DashboardReducer.companySalary.data,
    companySalaryErr: state.DashboardReducer.companySalaryErr,
  };
};

export default connect(mapStateToProps, { FetchSalaryHistory })(
  SalariesHistory
);
