import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Datatable from "../Datatable";
import { Form } from "react-bootstrap";
import { FetchWalletHistory } from "../../../Actions";
import { Badge } from "react-bootstrap";
import useBusinessToken from "../../../hooks/useBusinessToken";
import useToken from "../../../hooks/useToken";
import useBadge from "../../../hooks/useBadge";

let Months = new Set([
  new Date().getMonth(),
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
]);

Months = Array.from(Months);

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

// function checkMonths() {
//   for (const month of Months) {
//     // console.log(month);
//   }
// }

// checkMonths();

const Year = [
  new Date().getFullYear(),
  new Date().getFullYear() - 1,
  new Date().getFullYear() - 2,
  new Date().getFullYear() - 3,
  new Date().getFullYear() - 4,
];

const currentDate = {
  month: GetMonth[Months],
  year: new Date().getFullYear(),
};

function Badges({ row }) {
  const { bg } = useBadge(row);
  return (
    <Badge bg={bg} className='py-2'>
      {row}
    </Badge>
  );
}

const ViewAccountHistory = ({ FetchWalletHistory, companyWallet }) => {
  const [walletData, setwalletData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const { bizToken } = useBusinessToken;
  const {token} = useToken()

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
      name: "Narration",
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

  const WalletHistoryAction = useCallback(
    (email, token) => {
      return FetchWalletHistory(email, token);
    },
    [FetchWalletHistory]
  );

  const CallFetchWalletAction = useCallback(() => {
    WalletHistoryAction({ userToken: token, businessToken: bizToken });
  }, [WalletHistoryAction, bizToken, token]);

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

  // function sliceMonthText() {
  //   if (!selectedDate.month.slice) {
  //     let currentMonth = new Date().getMonth();
  //     let prevMonth = new Date().getMonth() - 1;

  //     return currentMonth.slice(0, 3) || prevMonth.slice(0, 3);
  //   } else {
  //     return selectedDate.month.slice(0, 3);
  //   }
  // }

  const filteredItems = walletData.filter(
    (item) =>
      item.month.includes(selectedDate.month) &&
      String(item.year).includes(String(selectedDate.year))
  );

  return (
    <div>
      <div>
        <h4 className='entire-page-headers'>COMPANY ACCOUNT HISTORY</h4>
      </div>
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
      {/* {console.log(filteredItems)} */}
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
