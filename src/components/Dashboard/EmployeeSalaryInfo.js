import React, { useCallback, useState } from "react";
import DashBoardText from "./DashBoardText";
import Input from "../Registration/Input";
import { Form, Row, Col, Button } from "react-bootstrap";

const EmployeeSalaryInfo = ({ index, err, nextQuestion, prevQuestion }) => {
  const [validation, setValidation] = useState({});
  const [annualSalary, setAnnualSalary] = useState("");
  const [annualRelieves, setAnnualRelieves] = useState(0);

  const FormatNum = (value) => {
    const formatter = new Intl.NumberFormat();
    return formatter.format(value);
  };

  const onAnnualSalaryChange = (e) => {
    setAnnualSalary(e.target.value);
  };

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
    const employeeMonthlyRelieves = annualSalary / 12;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(employeeMonthlyRelieves);
  }, [annualSalary]);

  //  ANNUAL GROSS PAY
  const getAnnualGross = useCallback(() => {
    const AnnualGross = Number(annualSalary) + Number(annualSalary);

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(AnnualGross);
  }, [annualSalary, annualSalary]);

  //MONTHLY GROSS PAY
  const getMonthlyGross = useCallback(() => {
    let MonthlyGross = Number(annualSalary) + Number(annualSalary) / 12;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(MonthlyGross);
  }, [annualSalary, annualSalary]);

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
        {console.log(typeof annualSalary)}
        <Form.Group as={Col} controlId='formGrid'>
          <DashBoardText
            name='Annual Gross Salary'
            label='Enter annual gross salary'
          />
          <Input
            inputName='annualSalary'
            type='text'
            handleChange={onAnnualSalaryChange}
            value={annualSalary}
            err={validation.employeeAnnualSalary}
            onPress={() =>
              setValidation({
                employeeAnnualSalary: "",
              })
            }
            onBlur={(e) => {
              setAnnualSalary(e.target.value);
            }}
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
            inputName='annualRelieves'
            type='text'
            // handleChange={onAnnualChange}
            // value={annualSalary}
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
