import React, { useEffect, useMemo, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import DashBoardText from "../DashBoardText";
import Input from "../../Registration/Input";
import { payTax } from "../utils/personalIncomeTax";
import { Tax } from "../utils/NewTaxCalculation";
import { useDebounce } from "../../../hooks/useDebounce";
import axios from "axios";
import BaseURL from "../../../Actions/BasedURL";

const EmployeeSalaryInfo = ({
	index,
	err,
	nextQuestion,
	prevQuestion,
	annualSalary,
	annualReliefs,
	onHandleChange,
}) => {
	const [validation, setValidation] = useState({});
	const { debouncedValue } = useDebounce(annualSalary);
	const [annualEmployeeTax, setAnnualTax] = useState(0);

	useEffect(() => {
		let subscribe = false;
		const data = { annualSalary: debouncedValue };
		(async function getData() {
			subscribe = true;
			const response = await BaseURL.post(
				"/calculateAnnualSalaryTax.php",
				data
			);
			if (subscribe) {
				setAnnualTax(response.data.success);
			}
		})();
		return () => (subscribe = false);
	}, [debouncedValue]);
	// GETTING MONTHLY SALARY FROM ANNUAL SALARY / 12
	const getMonthlySalary = useMemo(() => {
		const employeeMonthlySalary = annualSalary / 12;

		const formatter = new Intl.NumberFormat("NGN", {
			style: "currency",
			currency: "NGN",
		});
		return formatter.format(employeeMonthlySalary);
	}, [annualSalary]);

	// GETTING MONTHLY Reliefs FROM ANNUAL Reliefs / 12
	const getMonthlyReliefs = useMemo(() => {
		const employeeMonthlyReliefs = Number(annualReliefs) / 12;

		const formatter = new Intl.NumberFormat("NGN", {
			style: "currency",
			currency: "NGN",
		});
		return formatter.format(employeeMonthlyReliefs);
	}, [annualReliefs]);

	//  ANNUAL TAX DEDUCTION
	const getAnnualTax = useMemo(() => {
		// const calcualatedTax = payTax(annualSalary);
		// let MonthlyTax = Number(annualSalary) + Number(annualReliefs) / 12;

		const formatter = new Intl.NumberFormat("NGN", {
			style: "currency",
			currency: "NGN",
		});
		return formatter.format(annualEmployeeTax);
	}, [annualEmployeeTax]);

	//MONTHLY GROSS PAY

	const getMonthlyTax = useMemo(() => {
		const calculatedTax = annualEmployeeTax / 12;

		const formatter = new Intl.NumberFormat("NGN", {
			style: "currency",
			currency: "NGN",
		});
		return formatter.format(calculatedTax);
	}, [annualEmployeeTax]);

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
		<div className="d-flex flex-column">
			<Row>
				<Form.Group as={Col} controlId="formGrid">
					<DashBoardText
						name="Annual Gross Salary"
						label="Enter annual gross salary"
					/>
					<Input
						inputName="employeeAnnualGrossSalary"
						type="number"
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
				<Form.Group as={Col} controlId="formGrid">
					<DashBoardText
						name="Monthly Gross Salary"
						label="Enter employee monthly salary"
					/>
					<input
						readOnly
						name="monthly"
						value={getMonthlySalary}
						className="w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input"
					/>
				</Form.Group>
			</Row>
			<Row>
				<Form.Group as={Col} controlId="formGrid">
					<DashBoardText
						name="Annual Reliefs/Allowance"
						label="Enter employee annual reliefs/allowance"
					/>
					<Input
						inputName="employeeRelives"
						type="number"
						handleChange={onHandleChange}
						value={annualReliefs}
						err={validation.employeeReliefs}
						onPress={() =>
							setValidation({
								employeeReliefs: "",
							})
						}
					/>
				</Form.Group>
				<Form.Group as={Col} controlId="formGrid">
					<DashBoardText
						name="Monthly Reliefs/Allowance"
						label="Employee monthly reliefs/allowance"
					/>
					<input
						readOnly
						name="monthly"
						value={getMonthlyReliefs}
						className="w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input"
					/>
				</Form.Group>
				{/* {Tax(600000)} */}
			</Row>
			<Row>
				<Form.Group as={Col} controlId="formGrid">
					<DashBoardText
						name="Annual tax deduction "
						label="Annual tax deduction"
					/>
					<input
						readOnly
						name="annualTax"
						value={getAnnualTax}
						className="w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input"
					/>
				</Form.Group>
				<Form.Group as={Col} controlId="formGrid">
					<DashBoardText
						name="Monthly Tax Deduction"
						label="Employee monthly tax deduction"
					/>
					<input
						readOnly
						name="monthlyTax"
						value={getMonthlyTax}
						className="w-100 border-1
          registration-input rounded-1 px-2 border-1 fs-4 employer-input"
					/>
				</Form.Group>
			</Row>
			{/* <Button
          type='button'
          className='button ms-auto '
          onClick={prevQuestion}>
          Back
        </Button> */}
			<div className="mt-4 ms-auto double-btns ">
				<Button type="button" className="button" onClick={prevQuestion}>
					Back
				</Button>
				<Button
					type="button"
					className="button ms-4"
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
