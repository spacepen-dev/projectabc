import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import DashboardTable from "./DashboardTable";

const AccountHistory = ({ companyWallet }) => {
  const [walletData, setwalletData] = useState([]);

  const heading = [
    { name: "DATE", selector: (row) => row.date },
    // { name: "MONTH", selector: (row) => row.month },
    // { name: "YEAR", selector: (row) => row.year },
    { name: "TRANSACTION ID", selector: (row) => row.transactionId },
    {
      name: "TOTAL AMOUNT",
      selector: (row) =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NGN",
        }).format(row.totalAmount),
    },
    { name: "TRANSACTION STATUS", selector: (row) => row.transactionStatus },
    {
      name: "TAXES",
      selector: (row) =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NGN",
        }).format(row.taxes),
    },
    { name: "TRANSACTION NOTE", selector: (row) => row.narration },
  ];

  useEffect(() => {
    if (!companyWallet) {
      return null;
    } else {
      const { success } = companyWallet;
      setwalletData(success);
    }
  }, [companyWallet]);

  // const limitDataTable = (TransactionData) => {
  //   let tdata = [];
  //   for (let i = 0; i < 8; i++) {
  //     tdata = [...tdata, TransactionData[i]];
  //   }
  //   return tdata;
  // };

  return (
    <>
      <DashboardTable heading={heading} data={walletData} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    companyWallet: state.DashboardReducer.companyWallet.data,
  };
};

export default connect(mapStateToProps)(AccountHistory);
