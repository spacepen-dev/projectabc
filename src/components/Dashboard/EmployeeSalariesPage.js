import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";

import { Data } from "./utils/data";
import { Form, Button } from "react-bootstrap";
import Loaderbutton from "../LoaderButton";

const EmployeeSalariesPage = () => {
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
  const [tableData, setTableData] = useState([]);
  const [modalState, setmodalState] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [payment, setPayment] = useState({});
  const [request, setRequest] = useState(false);

  useEffect(() => {
    setTableData(Data);
  }, []);

  const columns = [
    { name: "S/N", selector: (row) => row.id },
    { name: "First Name", selector: (row) => row.firstName },
    { name: "Last Name", selector: (row) => row.lastName },
    { name: "Roles", selector: (row) => row.role },
    { name: "Account number", selector: (row) => row.accountNumber },
    { name: "Bank Name", selector: (row) => row.bankName },
    { name: "Monthly Gross", selector: (row) => row.month },
    { name: "Tax", selector: (row) => row.tax },
  ];

  const checkedEmployeeData = ({ selectedRows, selectedCount }) => {
    setSelectedData(selectedRows, selectedCount);
  };

  const onDateChange = (e) => {
    const { name, value } = e.target;
    setSelectedDate({ ...selectedDate, [name]: value });
  };

  const sumSelectedSalary = (data) => {
    const sumTax = data.reduce((acc, cur) => {
      return acc + cur.tax;
    }, 0);
    return sumTax;
  };

  const sumMonthlySalary = (data) => {
    const sumMonth = data.reduce((acc, cur) => {
      return acc + cur.month;
    }, 0);
    return sumMonth;
  };

  return (
    <div>
      <div className="paySelect">
        <Form className="form">
          <Form.Group className="mb-3 form-group" controlId="formSelect">
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

        <div className="pBtn">
          <div className="pBtn">
            <Button
              type="submit"
              className="payBtn py-2 px-3"
              onClick={function (e) {
                setPayment({
                  ...payment,
                  tax: sumSelectedSalary(selectedData),
                  month: sumMonthlySalary(selectedData),
                });
                setmodalState(true);
              }}
            >
              Pay employees
            </Button>
          </div>
        </div>
      </div>

      <div className=' mt-5'>
        <DataTable
          columns={columns}
          selectableRows
          data={Data}
          pagination
          onSelectedRowsChange={checkedEmployeeData}
        />
      </div>
      {modalState && (
        <ModalPayEmployee
          date={selectedDate}
          payment={payment}
          data={selectedData}
          onCloseModal={() => setmodalState(false)}
          request={request}
          onRequestClick={(value) => setRequest(value)}
        />
      )}
    </div>
  );
};




const ModalPayEmployee = ({
  date,
  payment,
  data,
  onCloseModal,
  request,
  onRequestClick,
}) => {
  const { tax, month } = payment;

  const onConfirm = (e) => {
    e.preventDefault();
    onRequestClick(true);
    // console.log(request);
  };
  return ReactDOM.createPortal(
    <div>
      <div class='backdrop hidden'></div>
      <div class='modal-1 hidden'>
        <div class='modal-row'>
          <div class='column first-column'>
            <p class='first-column-paragraph'>Month</p>
            <p class='first-column-paragraph'>Year</p>
            <p class='first-column-paragraph'>Number of Employees</p>
            <p class='first-column-paragraph'>Tax deductions</p>
            <p class='first-column-paragraph'>Amount</p>
          </div>
          <div class='column '>
            <p class='second-column-paragraph'>{date.month}</p>
            <p class='second-column-paragraph'>{date.year}</p>
            <p class='second-column-paragraph'>{`${data.length} Employees`}</p>
            <p class='second-column-paragraph'>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "NGN",
              }).format(tax)}
            </p>
            <p class='second-column-paragraph'>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "NGN",
              }).format(month)}
            </p>
          </div>
        </div>
        <Form
          className='button-container double-btns d-flex justify-content-start align-items-center'
          onSubmit={onConfirm}>
          <Button
            type='button'
            className='button ms-auto'
            onClick={onCloseModal}>
            Close
          </Button>
          <Loaderbutton
            btnName='CONFIRM'
            request={request}
            btnStyle={" ms-4 me-3 next"}
          />
        </Form>
      </div>
    </div>,
    document.querySelector("#ModalPayEmployee")
  );
}

export default EmployeeSalariesPage;
