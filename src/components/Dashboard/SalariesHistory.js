import React, { useEffect, useState } from "react";
import DashboardTable from "./DashboardTable";

const SalariesHistory = () => {
  const heading = [
    { name: "PAYMENT DATE", selector: (row) => row.paymentDate },
    { name: "PAYMENT REF", selector: (row) => row.paymentRef },
    { name: "TAX REF", selector: (row) => row.tax },
    { name: "NO OF EMPLOYEE", selector: (row) => row.employee },
    { name: "YEAR", selector: (row) => row.years },
    { name: "MONTH", selector: (row) => row.month },
    { name: "TOTAL TAX", selector: (row) => row.tax },
    { name: "TOTAL AMOUNT", selector: (row) => row.amount },
  ];

  const tableData = [];

  return (
    <>
      <DashboardTable heading={heading} data={tableData} />
    </>
  );
};

export default SalariesHistory;
