import React from "react";
import DashboardTable from "./DashboardTable";
import { heading, Data } from "./utils/data";
import { Container, Form, Button } from "react-bootstrap";
const EmployeeSalariesPage = () => {
  // const employeeData = (data) => {
  //   // console.log(data);
  // };
  return (
    <div>
      <div className="paySelect">
        <Form className="form">
          <Form.Group className="mb-3 " controlId="formSelect">
            <Form.Label>Month</Form.Label>
            <Form.Select size="sm">
              <option value="Jan">January</option>
              <option value="Feb">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="Sept">September</option>
              <option value="Oct">October</option>
              <option value="Nov">November</option>
              <option value="Dec">December</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSelect">
            <Form.Label>Year</Form.Label>
            <Form.Select size="sm">
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
              <option value="30">2030</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mt-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Select all" />
          </Form.Group>
        </Form>
        <div className="pBtn">
          <Button variant="primary" type="submit" className="payBtn">
            Pay employees
          </Button>
        </div>
      </div>
      <div className=" mt-5">
        <DashboardTable
          heading={heading}
          tableData={Data}
          // employeeData={employeeData}
          display="none"
        />
      </div>
    </div>
  );
};

export default EmployeeSalariesPage;
