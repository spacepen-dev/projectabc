import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Datatable from "./Datatable";
import { Form } from "react-bootstrap";
import { FetchWalletHistory } from "../../Actions";

const Months = [
  new Date().getMonth(),
  new Date().getMonth() + 1,
  new Date().getMonth() + 2,
  new Date().getMonth() + 3,
  new Date().getMonth() + 4,
  new Date().getMonth() + 5,
  new Date().getMonth() + 6,
  // new Date().getMonth() + 7,
  // new Date().getMonth() + 8,
  // new Date().getMonth() + 9,
  new Date().getMonth() - 1,
  new Date().getMonth() - 2,
];

// function checkMonths() {
//   for (const month of Months) {
//     // console.log(month);
//   }
// }

// checkMonths();

const GetMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const Year = [
  new Date().getFullYear(),
  new Date().getFullYear() - 1,
  new Date().getFullYear() - 2,
  new Date().getFullYear() - 3,
  new Date().getFullYear() - 4,
];

const currentDate = {
  month: GetMonth[new Date().getMonth()],
  year: new Date().getFullYear(),
};

const ViewAccountHistory = ({ FetchWalletHistory, companyWallet }) => {
  const [walletData, setwalletData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(currentDate);

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

  const WalletHistoryAction = useCallback(
    (email, token) => {
      return FetchWalletHistory(email, token);
    },
    [FetchWalletHistory]
  );

  const CallFetchWalletAction = useCallback(() => {
    const email = localStorage.getItem("aminien_email");
    const companyToken = localStorage.getItem("aminien_token");
    WalletHistoryAction(email, companyToken);
  }, [WalletHistoryAction]);

  //FETCH DATA FROM FETCH WALLET ACTION CREATOR
  useEffect(() => {
    CallFetchWalletAction();
  }, [CallFetchWalletAction]);

  // GET DATA FROM THE FETCH WALLET REDUCER

  useEffect(() => {
    if (!companyWallet) {
      return null;
    } else {
      const { success, error } = companyWallet;
      if (error) return;
      else if (success) setwalletData(success);
    }
  }, [companyWallet]);

  const onDateChange = (e) => {
    const { name, value } = e.target;
    setSelectedDate({ ...selectedDate, [name]: value });
  };

  const filteredItems = walletData.filter(
    (item) =>
      item.month.includes(selectedDate.month) &&
      String(item.year).includes(String(selectedDate.year))
  );

  return (
    <div>
      <div className='paySelect mb-4'>
        <Form className='form'>
          <Form.Group className='mb-3 form-group' controlId='formSelect'>
            <Form.Label>Select a Month</Form.Label>
            <select size='sm' name='month' onChange={onDateChange}>
              {Months.map((month) => {
                return (
                  <React.Fragment key={month}>
                    <option value={GetMonth[month]}>{GetMonth[month]}</option>
                  </React.Fragment>
                );
              })}
            </select>
          </Form.Group>
          <Form.Group className='mb-3 ms-4 form-group' controlId='formSelect'>
            <Form.Label>Select a Year</Form.Label>
            <select size='sm' name='year' onChange={onDateChange}>
              {Year.map((year) => {
                return (
                  <React.Fragment>
                    <option value={year}>{year}</option>
                  </React.Fragment>
                );
              })}
            </select>
          </Form.Group>
        </Form>
      </div>
      <Datatable columns={heading} data={filteredItems} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    companyWallet: state.DashboardReducer.companyWallet.data,
  };
};

export default connect(mapStateToProps, { FetchWalletHistory })(
  ViewAccountHistory
);
