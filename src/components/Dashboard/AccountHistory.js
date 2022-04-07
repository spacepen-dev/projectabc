import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import DashboardTable from "./DashboardTable";
import { Table } from "react-bootstrap";

const AccountHistory = ({ companyWallet }) => {
  const [walletData, setwalletData] = useState([]);
  const heading = [
    {
      TransactionRef: "Transaction Ref",
      TransactionDate: "Transaction Date",
      TransactionAmout: "Transaction Amount",
      Month: "Month",
      Year: "Year",
      TransactionStatus: "Transaction Status",
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

  const limitDataTable = (TransactionData) => {
    let tdata = [];
    for (let i = 0; i < 8; i++) {
      tdata = [...tdata, TransactionData[i]];
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
          {walletData &&
            limitDataTable(walletData).map((data, index) => {
              return (
                <tr>
                  <td key={index}>{!data ? "Nill" : data.transactionId}</td>
                  <td key={index}>{!data ? "empty" : data.amount}</td>
                  <td key={index}>{!data ? "empty" : data.date}</td>
                  <td key={index}>{!data ? "empty" : data.month}</td>
                  <td key={index}>{!data ? "empty" : data.year}</td>
                  <td key={index}>
                    {!data ? "empty" : data.transactionStatus}
                  </td>
                  {/* <td key={index}>{data.amount}</td> */}
                  {/* <td key={index}>{[3]}</td> */}
                  {/* <td key={index}>{[4]}</td> */}
                  {/* <td key={index}>{[1]}</td> */}
                </tr>
              );
            })}
        </tbody>
      </Table>
      {/* <DashboardTable heading={heading} tableData={walletData} display='none' /> */}
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
