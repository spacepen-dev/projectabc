import React from "react";
import DashboardTable from "./DashboardTable";

const TaxHistory = () => {
  const heading = [
    {
      TransactionRef: "Transaction Ref",
      GovernmentPaid: "Government Paid",
      Amount: "Amount",
      PaymentDate: "Payment date",
      Employee: "No of employees",
      Month: "Month",
      Form: "Form H1",
    },
  ];

  const TaxData = [
    {
      TransactionRef: "1023498FA",
      GovernmentPaid: "State Government",
      Amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(200000),
      PaymentDate: "20.03.20220",
      Employee: "30",
      Month: "June",
      Form: "Download",
    },
    {
      TransactionRef: "1023498FA",
      GovernmentPaid: "State Government",
      Amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(200000),
      PaymentDate: "20.03.20220",
      Employee: "30",
      Month: "June",
      Form: "Download",
    },
    {
      TransactionRef: "1023498FA",
      GovernmentPaid: "State Government",
      Amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(200000),
      PaymentDate: "20.03.20220",
      Employee: "30",
      Month: "June",
      Form: "Download",
    },
    {
      TransactionRef: "1023498FA",
      GovernmentPaid: "State Government",
      Amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(200000),
      PaymentDate: "20.03.20220",
      Employee: "30",
      Month: "June",
      Form: "Download",
    },
    {
      TransactionRef: "1023498FA",
      GovernmentPaid: "State Government",
      Amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(200000),
      PaymentDate: "20.03.20220",
      Employee: "30",
      Month: "June",
      Form: "Download",
    },
    {
      TransactionRef: "1023498FA",
      GovernmentPaid: "State Government",
      Amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(200000),
      PaymentDate: "20.03.20220",
      Employee: "30",
      Month: "June",
      Form: "Download",
    },
    {
      TransactionRef: "1023498FA",
      GovernmentPaid: "State Government",
      Amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(200000),
      PaymentDate: "20.03.20220",
      Employee: "30",
      Month: "June",
      Form: "Download",
    },
    {
      TransactionRef: "1023498FA",
      GovernmentPaid: "State Government",
      Amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(200000),
      PaymentDate: "20.03.20220",
      Employee: "30",
      Month: "June",
      Form: "Download",
    },
    {
      TransactionRef: "1023498FA",
      GovernmentPaid: "State Government",
      Amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(200000),
      PaymentDate: "20.03.20220",
      Employee: "30",
      Month: "June",
      Form: "Download",
    },
    {
      TransactionRef: "1023498FA",
      GovernmentPaid: "State Government",
      Amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(200000),
      PaymentDate: "20.03.20220",
      Employee: "30",
      Month: "June",
      Form: "Download",
    },
    {
      TransactionRef: "1023498FA",
      GovernmentPaid: "State Government",
      Amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(200000),
      PaymentDate: "20.03.20220",
      Employee: "30",
      Month: "June",
      Form: "Download",
    },
    {
      TransactionRef: "1023498FA",
      GovernmentPaid: "State Government",
      Amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(200000),
      PaymentDate: "20.03.20220",
      Employee: "30",
      Month: "June",
      Form: "Download",
    },
    {
      TransactionRef: "1023498FA",
      GovernmentPaid: "State Government",
      Amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(200000),
      PaymentDate: "20.03.20220",
      Employee: "30",
      Month: "June",
      Form: "Download",
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
        tableData={limitDataTable(TaxData)}
        display='none'
      />
    </>
  );
};

export default TaxHistory;
