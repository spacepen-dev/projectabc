import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import DashboardTable from "./DashboardTable";

const AccountHistory = ({ companyWallet }) => {
  const [walletData, setwalletData] = useState([]);
  const heading = [
    {
      TransactionRef: "Transaction Ref",
      TransactionStatus: "Transaction Status",
      TransactionAmout: "Transaction Amount",
      // TransactionType: "Transaction Type",
      TransactionDate: "Transaction Date",
    },
  ];

  useEffect(() => {
    if (!companyWallet) {
      return null;
    } else {
      const { success } = companyWallet;
      // console.log(success);
      setwalletData(success);
    }
  }, []);

  return (
    <>
      <DashboardTable heading={heading} tableData={walletData} display='none' />
      {/* <TableController heading={heading} data={tableData} /> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    companyWallet: state.DashboardReducer.companyWallet.data,
    // paymentErrRes: state.DashboardReducer.accountTopUpErr,
    // verifyResponse: state.DashboardReducer.verifyTopUp,
    // verifyErrRes: state.DashboardReducer.verifyTopUpErr,
  };
};

export default connect(mapStateToProps)(AccountHistory);
