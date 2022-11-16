import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Badge } from "react-bootstrap";
import DashboardTable from "./DashboardTable";
import useBadge from "../../hooks/useBadge";

function Badges({ row }) {
  const { bg } = useBadge(row);
  return (
    <Badge bg={bg} className='py-2'>
      {row}
    </Badge>
  );
}

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
        }).format(row.amount),
    },
    {
      name: "NARRATION",
      selector: (row) => row.narration,
    },
    {
      name: "TRANSACTION STATUS",
      selector: (row) => <Badges row={row.transactionStatus} />,
    },
    // {
    //   name: "TAXES",
    //   selector: (row) =>
    //     new Intl.NumberFormat("en-US", {
    //       style: "currency",
    //       currency: "NGN",
    //     }).format(row.taxes),
    // },
    // { name: "TRANSACTION NOTE", selector: (row) => row.narration },
  ];

  useEffect(() => {
    if (!companyWallet) {
      console.log(companyWallet)
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
    companyWallet: state.FetchWalletHistory,
  };
};

export default connect(mapStateToProps)(AccountHistory);
