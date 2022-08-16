import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import VerificationModal from "./VerificationModal";

import { Form, Button } from "react-bootstrap";
import Loaderbutton from "../LoaderButton";
import { connect } from "react-redux";
import { FetchCompanyEmployee, PayEmployeeSalary } from "../../Actions";
// import { useCallback } from "react";

const EmployeeSalariesPage = ({
  companyEmployee,
  FetchCompanyEmployee,
  PayEmployeeSalary,
}) => {
  const Months = [
    new Date().getMonth(),
    new Date().getMonth() + 1,
    new Date().getMonth() + 2,
    new Date().getMonth() + 3,
    new Date().getMonth() + 4,
    // new Date().getMonth() + 5,
    // new Date().getMonth() + 6,
    // new Date().getMonth() + 7,
    // new Date().getMonth() + 8,
    // new Date().getMonth() + 9,
    // new Date().getMonth() - 1,
    // new Date().getMonth() - 2,
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

  // MAKE REQUEST TO FETCH EMPLOYEE DATA

  useEffect(() => {
    if (!localStorage.getItem("aminien_token")) {
      // SESSION TIME OUT MODAL
      console.log("no token");
    }
    FetchCompanyEmployee(
      localStorage.getItem("aminien_token"),
      localStorage.getItem("aminien_email")
    );
  }, [FetchCompanyEmployee]);

  // FETCH DATA FROM THE REDUX STORE
  useEffect(() => {
    if (!companyEmployee) {
      return null;
    }
    setTableData(companyEmployee.success);
  }, [companyEmployee]);

  const columns = [
    { name: "First Name", selector: (row) => row.employee_firstname },
    { name: "Last Name", selector: (row) => row.employee_lastname },
    { name: "Roles", selector: (row) => row.employee_role },
    {
      name: "Account number",
      selector: (row) => row.employee_bankAccount_number,
    },
    { name: "Bank Name", selector: (row) => row.employee_bank_name },
    {
      name: "Monthly Gross",
      selector: (row) => row.employee_monthly_gross_salary,
    },
    // { name: "Tax", selector: (row) => row.tax },
  ];

  const checkedEmployeeData = ({ selectedRows, selectedCount }) => {
    setSelectedData(selectedRows, selectedCount);
  };

  const onDateChange = (e) => {
    const { name, value } = e.target;
    setSelectedDate((state) => {
      return { ...state, [name]: value };
    });
  };

  const sumSelectedSalary = (data) => {
    const sumTax = data.reduce((acc, cur) => {
      // TAX SHOULD BE SUBTRACTED FROM THE MONTHLY SALARY
      return acc + cur.tax;
    }, 0);
    return sumTax;
  };

  const sumMonthlySalary = (data) => {
    return data.reduce((acc, cur) => {
      return acc + parseFloat(cur.employee_monthly_gross_salary);
    }, 0);
  };

  return (
    <div>
      <div className='paySelect'>
        <Form className='form'>
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

        <div className='pBtn'>
          <div className='pBtn'>
            <Button
              type='submit'
              className='payBtn py-2 px-3'
              onClick={function () {
                setPayment((state) => {
                  return {
                    ...state,
                    tax: sumSelectedSalary(selectedData),
                    month: sumMonthlySalary(selectedData),
                  };
                });
                setmodalState(true);
              }}>
              Pay employees
            </Button>
          </div>
        </div>
      </div>

      <div className=' mt-5'>
        <DataTable
          columns={columns}
          selectableRows
          data={tableData}
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
          payEmployee={PayEmployeeSalary}
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
  payEmployee,
}) => {
  const { tax, month } = payment;

  const onConfirm = (e) => {
    e.preventDefault();
    onRequestClick(true);
    payEmployee();
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
          <div class='column second-column'>
            <p class='second-column-paragraph'>{date.month}</p>
            <p class='second-column-paragraph'>{date.year}</p>
            <p class='second-column-paragraph'>{`${data.length} Employees`}</p>
            <p class='second-column-paragraph'>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "NGN",
              }).format(0)}
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
};

const mapStateToProps = (state) => {
  return {
    companyEmployee: state.DashboardReducer.companyEmployee.data,
  };
};

export default connect(mapStateToProps, {
  FetchCompanyEmployee,
  PayEmployeeSalary,
})(EmployeeSalariesPage);
