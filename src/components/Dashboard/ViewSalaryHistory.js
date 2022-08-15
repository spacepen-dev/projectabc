import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import Datatable from "./Datatable";
import { SalaryData } from "./utils/data";
import { FetchSalaryHistory } from "../../Actions";

const ViewSalaryHisory = ({ FetchSalaryHistory }) => {
  const [{ token, email }] = useState(() => {
    return {
      token: localStorage.getItem("aminien_token"),
      email: localStorage.getItem("aminien_email"),
    };
  });

  const [pending, setPending] = useState(false);

  const FetchedData = useCallback(() => {
    FetchSalaryHistory(email, token);
  }, [FetchSalaryHistory, email, token]);

  useEffect(() => {
    if (!email && !token) {
      // show the modal of session expire
    }
    FetchedData();
  }, [FetchedData, email, token]);

  const heading = [
    { name: "FIRST NAME", selector: (row) => row.employeeFirstname },
    { name: "LAST NAME", selector: (row) => row.employeeLastname },
    { name: "EMAIL", selector: (row) => row.email },
    { name: "ACCOUNT NAME", selector: (row) => row.accountName },
    { name: "ACCOUNT NUMBER", selector: (row) => row.accountNumber },
    { name: "TAX DEDUCTED", selector: (row) => row.employeeTax },
    { name: "SALARY PAID", selector: (row) => row.employeeSalary },
    { name: "DAY", selector: (row) => row.day },
    { name: "MONTH", selector: (row) => row.month },
    { name: "YEAR", selector: (row) => row.year },
    { name: "TRANSACTION ID", selector: (row) => row.transactionId },
    { name: "TRANSACTION STATUS", selector: (row) => row.transactionStatus },
  ];
  return (
    <div className=''>
      <Datatable
        columns={heading}
        data={SalaryData}
        striped
        progressPending={pending}
        noDataComponent={() => {
          return "Show error";
        }}
      />
    </div>
  );
};
// const mapStateToProps = () => {};

export default connect(null, { FetchSalaryHistory })(ViewSalaryHisory);
