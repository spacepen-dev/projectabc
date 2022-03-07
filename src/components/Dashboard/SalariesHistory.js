import React, { useEffect, useState } from "react";

import DashboardTable from "./DashboardTable";

const SalariesHistory = () => {
  const heading = [
    {
      paymentDate: "Payment date",
      paymentRef: "Payment Ref",
      taxRef: "Tax Ref",
      employee: "No of employees",
      year: "Year",
      month: "Month",
      totalTax: "Total tax",
      totalAmount: "Total amount",
    },
  ];
  const tableData = [
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
    {
      paymentDate: "05-09-2022",
      paymentRef: "1023498FA",
      taxRef: "1023498FA",
      employee: "50",
      years: "2022",
      month: "December",
      tax: "100,000",
      amount: "200,000",
    },
  ];

  const [request, setRequest] = useState(false);

  // USE EFFECT TO ADD THE LOADER ON THE SCREEN AND FETCH THE TABLE DATA

  useEffect(() => {
    setRequest(true);
  }, []);

  /**
   * USE MEMO
   */
  const limitDataTable = (tableData) => {
    let tdata = [];
    for (let i = 0; i < 8; i++) {
      tdata = [...tdata, tableData[i]];
    }
    return tdata;
  };
  return (
    <>
      <DashboardTable
        heading={heading}
        tableData={limitDataTable(tableData)}
        display='none'
      />
      {/* <TableController heading={heading} data={tableData} /> */}
    </>
  );
};

export default SalariesHistory;
