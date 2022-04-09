import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import DashboardTable from "./DashboardTable";

const AccountHistory = ({ companyWallet }) => {
  const [walletData, setwalletData] = useState([]);

  const heading = [
    { name: "DATE", selector: (row) => row.date },
    { name: "TRANSACTION REF", selector: (row) => row.transactionId },
    { name: "TRANSACTION AMOUNT", selector: (row) => row.amount },
    { name: "MONTH", selector: (row) => row.month },
    { name: "YEAR", selector: (row) => row.year },
    { name: "TRANSACTION STATUS", selector: (row) => row.transactionStatus },
  ];

  useEffect(() => {
    if (!companyWallet) {
      return null;
    } else {
      const { success } = companyWallet;
      setwalletData(success);
    }
  }, []);

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
