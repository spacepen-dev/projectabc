import React, { useMemo, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import DashBoardText from "./DashBoardText";
import Input from "../Registration/Input";

const EmployeeSalaryInfo = ({
  index,
  err,
  nextQuestion,
  prevQuestion,
  annualSalary,
  annualRelieves,
  onHandleChange,
}) => {
  const [validation, setValidation] = useState({});
  /*
   * console.log(num.toFixed(2))
   * function currencyFormat(num) {
   return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
console.log(currencyFormat(2665))
   */
  // function currencyFormat(num = 200000000) {
  //   let numb = num.toFixed(2);
  //   return "NGN" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  // }
  // GETTING MONTHLY SALARY FROM ANNUAL SALARY / 12
  const getMonthlySalary = useMemo(() => {
    const employeeMonthlySalary = annualSalary / 12;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(employeeMonthlySalary);
  }, [annualSalary]);

  // GETTING MONTHLY RELIEVES FROM ANNUAL RELIEVES / 12
  const getMonthlyRelieves = useMemo(() => {
    const employeeMonthlyRelieves = annualRelieves / 12;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(employeeMonthlyRelieves);
  }, [annualRelieves]);

  //  ANNUAL GROSS PAY
  const getAnnualGross = useMemo(() => {
    const AnnualGross = annualSalary + annualRelieves;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(AnnualGross);
  }, [annualSalary, annualRelieves]);

  //MONTHLY GROSS PAY
  const getMonthlyGross = useMemo(() => {
    let MonthlyGross = annualSalary + annualRelieves / 12;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(MonthlyGross);
  }, [annualSalary, annualRelieves]);

  const Validation = () => {
    if (!annualSalary) {
      setValidation({
        employeeAnnualSalary: "Employee's annual salary is required!",
      });
    } else {
      nextQuestion();
    }
  };

  if (index !== 2) {
    return null;
  }
  return (
    <div className='d-flex flex-column'>
      <Row>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Annual Gross Salary'
            label='Enter annual gross salary'
          />
          {/* {currencyFormat()} */}
          <Input
            inputName='employee_annual_gross_salary'
            type='number'
            handleChange={onHandleChange}
            value={annualSalary}
            err={validation.employeeAnnualSalary}
            onPress={() =>
              setValidation({
                employeeAnnualSalary: "",
              })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Monthly Gross Salary'
            label='Enter employee monthly salary'
          />
          <input
            readOnly
            name='monthly'
            value={getMonthlySalary}
            className='w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input'
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Annual Relieves'
            label='Input employee annual relieves '
          />
          <Input
            inputName='employee_relives'
            type='number'
            handleChange={onHandleChange}
            value={annualRelieves}
            err={validation.employeeRelieves}
            onPress={() =>
              setValidation({
                employeeRelieves: "",
              })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Monthly Relieves'
            label='Enter employee monthly relieves'
          />
          <input
            readOnly
            name='monthly'
            value={getMonthlyRelieves}
            className='w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input'
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText name='Annual Net ' label='Enter annual gross' />
          <input
            readOnly
            name='annualGross'
            value={getAnnualGross}
            className='w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input'
          />
        </Form.Group>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Monthly Net'
            label='Enter employee monthly salary'
          />
          <input
            readOnly
            name='monthlyGross'
            value={getMonthlyGross}
            className='w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input'
          />
        </Form.Group>
      </Row>
      {/* <Button
          type='button'
          className='button ms-auto '
          onClick={prevQuestion}>
          Back
        </Button> */}
      <div className='mt-4 ms-auto double-btns '>
        <Button type='button' className='button' onClick={prevQuestion}>
          Back
        </Button>
        <Button
          type='button'
          className='button ms-4'
          onClick={() => {
            Validation();
          }}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default EmployeeSalaryInfo;

/**
 *
 */
