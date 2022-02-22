import React, { useCallback, useState } from "react";
import DashBoardText from "./DashBoardText";
import Input from "../Registration/Input";
import { Form, Row, Col, Button } from "react-bootstrap";

const EmployeeSalaryInfo = ({
  onHandleChange,
  index,
  annualSalary,
  annualRelieves,
  err,
  nextQuestion,
  prevQuestion,
}) => {
  const [validation, setValidation] = useState({});

  // GETTING MONTHLY SALARY FROM ANNUAL SALARY / 12
  const getMonthlySalary = useCallback(() => {
    const employeeMonthlySalary = annualSalary / 12;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(employeeMonthlySalary);
  }, [annualSalary]);

  // GETTING MONTHLY RELIEVES FROM ANNUAL RELIEVES / 12
  const getMonthlyRelieves = useCallback(() => {
    const employeeMonthlyRelieves = annualRelieves / 12;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(employeeMonthlyRelieves);
  }, [annualRelieves]);

  //  ANNUAL GROSS PAY
  const getAnnualGross = useCallback(() => {
    const AnnualGross = Number(annualRelieves) + Number(annualSalary);

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(AnnualGross);
  }, [annualRelieves, annualSalary]);

  //MONTHLY GROSS PAY
  const getMonthlyGross = useCallback(() => {
    let MonthlyGross = Number(annualRelieves) + Number(annualSalary) / 12;

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

  if (index !== 1) {
    return null;
  }
  return (
    <React.Fragment>
      <Row>
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Annual Gross Salary'
            label='Enter annual gross salary'
          />
          <Input
            inputName='annual'
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
            value={getMonthlySalary()}
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
            inputName='relieves'
            type='number'
            handleChange={onHandleChange}
            value={annualRelieves}
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
            value={getMonthlyRelieves()}
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
            value={getAnnualGross()}
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
            value={getMonthlyGross()}
            className='w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input'
          />
        </Form.Group>
      </Row>
      <div className='mt-4 ms-auto double-btns'>
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
    </React.Fragment>
  );
};

export default EmployeeSalaryInfo;

/**
 *
 */
