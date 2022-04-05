import React, { useMemo, useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Datatable from "./Datatable";
import { AccountData } from "./utils/data";
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
  new Date().getMonth() + 7,
  new Date().getMonth() + 8,
  new Date().getMonth() + 9,
  new Date().getMonth() - 1,
  new Date().getMonth() - 2,
];

const GetMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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

  // const [filterText, setFilterText] = React.useState("");

  // useMemo(() => {}, []);
  const heading = [
    { name: "DATE", selector: (row) => row.date },
    { name: "TRANSACTION REF", selector: (row) => row.transactionId },
    { name: "TRANSACTION AMOUNT", selector: (row) => row.amount },
    { name: "MONTH", selector: (row) => row.month },
    { name: "YEAR", selector: (row) => row.year },
    { name: "TRANSACTION STATUS", selector: (row) => row.transactionStatus },
  ];

  const CallFetchWalletAction = useCallback(() => {
    FetchWalletHistory(
      "ejembithomas61@gmail.com",
      "5245ff745564886c0aadf892117d597601b307acba4f54f55aafc33bb06bbbf6ca803e9a"
    );
  }, []);

  //FETCH DATA FROM FETCH WALLET ACTION CREATOR
  useEffect(() => {
    // CallFetchWalletAction();
  }, []);

  // GET DATA FROM THE FETCH WALLET REDUCER

  useEffect(() => {
    if (!companyWallet) {
      return null;
    } else {
      const { success } = companyWallet;
      // console.log(success);
      setwalletData(success);
    }
    // setwalletData({
    //   ...success,
    //   month: new Date().getMonth(),
    //   year: new Date().getFullYear(),
    // });
  }, []);

  const onDateChange = (e) => {
    const { name, value } = e.target;
    setSelectedDate({ ...selectedDate, [name]: value });
  };

  const filteredItems = walletData.filter(
    (item) => item
    // item.month.includes(selectedDate.month) &&
    // String(item.year).includes(String(selectedDate.year))
  );

  return (
    <div>
      <div className='paySelect mb-4'>
        <Form className='form'>
          {console.log(walletData)}
          <Form.Group className='mb-3 form-group' controlId='formSelect'>
            <Form.Label>Month</Form.Label>
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
            <Form.Label>Year</Form.Label>
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
    // paymentErrRes: state.DashboardReducer.accountTopUpErr,
    // verifyResponse: state.DashboardReducer.verifyTopUp,
    // verifyErrRes: state.DashboardReducer.verifyTopUpErr,
  };
};

export default connect(mapStateToProps, { FetchWalletHistory })(
  ViewAccountHistory
);
