import React from "react";
import DashboardTable from "./DashboardTable";

const AccountHistroy = () => {
  const heading = [
    {
      TransactionRef: "Transaction Ref",
      TransactionDate: "Transaction Date",
      TransactionAmout: "Transaction Amount",
      TransactionType: "Transaction Type",
      TransactionStatus: "Transaction Status",
    },
  ];

  const TransactionData = [
    {
      TransactionRef: "1023498FA",
      TransactionDate: "20.03.2022",
      TransactionAmount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(500000),
      TransactionType: "Credit",
      TransactionStatus: "Successful",
    },
    {
      TransactionRef: "1023498FA",
      TransactionDate: "20.03.2022",
      TransactionAmount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(500000),
      TransactionType: "Credit",
      TransactionStatus: "Successful",
    },
    {
      TransactionRef: "1023498FA",
      TransactionDate: "20.03.2022",
      TransactionAmout: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(500000),
      TransactionType: "Credit",
      TransactionStatus: "Successful",
    },
    {
      TransactionRef: "1023498FA",
      TransactionDate: "20.03.2022",
      TransactionAmout: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(500000),
      TransactionType: "Credit",
      TransactionStatus: "Successful",
    },
    {
      TransactionRef: "1023498FA",
      TransactionDate: "20.03.2022",
      TransactionAmout: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(500000),
      TransactionType: "Credit",
      TransactionStatus: "Successful",
    },
    {
      TransactionRef: "1023498FA",
      TransactionDate: "20.03.2022",
      TransactionAmout: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(500000),
      TransactionType: "Credit",
      TransactionStatus: "Successful",
    },
    {
      TransactionRef: "1023498FA",
      TransactionDate: "20.03.2022",
      TransactionAmout: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(500000),
      TransactionType: "Credit",
      TransactionStatus: "Successful",
    },
    {
      TransactionRef: "1023498FA",
      TransactionDate: "20.03.2022",
      TransactionAmout: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(500000),
      TransactionType: "Credit",
      TransactionStatus: "Successful",
    },
    {
      TransactionRef: "1023498FA",
      TransactionDate: "20.03.2022",
      TransactionAmout: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(500000),
      TransactionType: "Credit",
      TransactionStatus: "Successful",
    },
  ];
  const limitDataTable = (TransactionData) => {
    let tdata = [];
    for (let i = 0; i < 8; i++) {
      tdata = [...tdata, TransactionData[i]];
    }
    return tdata;
  };
  return (
    <>
      <DashboardTable
        heading={heading}
        tableData={limitDataTable(TransactionData)}
        display='none'
      />
      {/* <TableController heading={heading} data={tableData} /> */}
    </>
  );
};

export default AccountHistroy;
