import React from "react";
import DashboardTable from "./DashboardTable";

const ViewSalaryHisory = () => {
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
  return (
    <div className=' mt-5'>
      <DashboardTable heading={heading} tableData={tableData} display='flex' />
    </div>
  );
};

export default ViewSalaryHisory;