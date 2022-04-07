import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

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

  const limitDataTable = (tableData) => {
    let tdata = [];
    for (let i = 0; i < 8; i++) {
      tdata = [...tdata, tableData[i]];
    }
    return tdata;
  };
  return (
    <>
      <Table
        className='hover table table-borderless'
        responsive='sm'
        style={{ height: "200px" }}>
        <thead className=''>
          {heading.map((cur, index) => {
            let objValues = Object.values(cur);
            return (
              <tr key={index}>
                {objValues.map((cur, index) => {
                  return <th key={index}>{cur}</th>;
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {limitDataTable(tableData).map((data, index) => {
            return (
              <tr>
                <td key={index}>{!data ? "empty" : data.paymentDate}</td>
                <td key={index}>{!data ? "Nill" : data.paymentRef}</td>
                <td key={index}>{!data ? "empty" : data.taxRef}</td>
                <td key={index}>{!data ? "empty" : data.employee}</td>
                <td key={index}>{!data ? "empty" : data.years}</td>
                <td key={index}>{!data ? "empty" : data.month}</td>
                <td key={index}>{!data ? "empty" : data.amount}</td>
                <td key={index}>{!data ? "empty" : data.tax}</td>
                {/* <td key={index}>{!data ? "empty" : data.year}</td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default SalariesHistory;
