import React, { useMemo, useState } from "react";
import Datatable from "./Datatable";
import { AccountData } from "./utils/data";
import { Form } from "react-bootstrap";

const ViewAccountHistory = () => {
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

  const [selectedDate, setSelectedDate] = useState(currentDate);
  // const [filterText, setFilterText] = React.useState("");

  // useMemo(() => {}, []);
  const heading = [
    { name: "TRANSACTION REF", selector: (row) => row.transactionRef },
    { name: "TRANSACTION AMOUNT", selector: (row) => row.transactionAmount },
    { name: "TRANSACTION TYPE", selector: (row) => row.transactionType },
    { name: "MONTH", selector: (row) => row.month },
    { name: "YEAR", selector: (row) => row.year },
    { name: "TRANSACTION STATUS", selector: (row) => row.transactionStatus },
  ];

  const onDateChange = (e) => {
    const { name, value } = e.target;
    setSelectedDate({ ...selectedDate, [name]: value });
  };

  const filteredItems = AccountData.filter(
    (item) =>
      item.month.includes(selectedDate.month) &&
      String(item.year).includes(String(selectedDate.year))
  );

  return (
    <div>
      <div className='paySelect mb-4'>
        <Form className='form'>
          {console.log(filteredItems)}
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
      {/* <DashboardTable heading={heading} tableData={tableData} display='flex' /> */}
    </div>
  );
};

export default ViewAccountHistory;
