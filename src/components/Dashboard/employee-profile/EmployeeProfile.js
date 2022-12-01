import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FetchBankList, FetchDepartment } from "../../../Actions";
import Input from "../../Registration/Input";
import DashBoardText from "../DashBoardText";
import useHandleResponse from "../../../hooks/useHandleResponse";
import useBusinessToken from "../../../hooks/useBusinessToken";
import useToken from "../../../hooks/useToken";

const EmployeeProfile = ({
	employeeEmail,
	employeeFirstName,
	employeeLastName,
	employeeTin,
	employeeRole,
	employeeDepartment,
	employeeState,
	employeePhoneNumber,
	index,
	err,
	nextQuestion,
	onHandleChange,
	FetchBankList,
	department,
	FetchDepartment,
}) => {
	const [validation, setValidation] = useState({});
	const [dep] = useHandleResponse(department);
	const { bizToken } = useBusinessToken();
	const { token } = useToken();

	const states = [
		"--- SELECT STATE ---",
		"Abia ",
		"Adamawa ",
		"Anambra ",
		"Bauchi ",
		"Bayelsa ",
		"Borno ",
		"Delta ",
		"Ebonyi ",
		"Enugu ",
		"Gombe ",
		"Imo ",
		"Jigawa ",
		"Kano ",
		"katsina ",
		"Kebbi ",
		"Kogi ",
		"Kwara ",
		"Nasarawa ",
		"Niger ",
		"Ondo ",
		"Osun ",
		"Plateau ",
		"Sokoto ,",
		"Taraba ",
		"Yobe ",
		"Zamfara ",
		"Ekiti ",
		"Lagos ",
		"Benue ",
		"Oyo ",
		"Ogun ",
		"Cross River ",
		"Rivers ",
		"Akwa Ibom ",
		"Kaduna ",
		"Edo ",
		"Abuja FCT",
	];

	const Validation = () => {
		if (!employeeFirstName) {
			setValidation({
				employeeFirstName: "Employee's First name is required!",
			});
		} else if (!employeeLastName) {
			setValidation({ employeeLastName: "Employee's Last name is required!" });
		} else if (!employeePhoneNumber) {
			setValidation({ employeePhoneNumber: "Invalid Phone number!" });
		} else if (!employeeRole) {
			setValidation({ employeeRole: "Employee's role is required!" });
		} else {
			nextQuestion();
		}
	};
	const FetchDepartments = useCallback(() => {
		FetchDepartment({ businessToken: bizToken, userToken: token });
	}, [FetchDepartment, bizToken, token]);

	// FETCH DEPARTMENT DATA USE EFFECT
	useEffect(() => {
		FetchDepartments();
	}, [FetchDepartments]);

	if (index !== 1) {
		return null;
	}

	return (
		<div className="d-flex flex-column justify-content-center w-100 mx-auto employee-form">
			<Row>
				<Form.Group as={Col} controlId="formGrid">
					<DashBoardText
						name="First Name"
						label="Enter the name of your company"
					/>
					<Input
						inputName="employeeFirstname"
						type="text"
						handleChange={onHandleChange}
						value={employeeFirstName}
						err={validation.employeeFirstName}
						onPress={() =>
							setValidation({
								employeeFirstName: "",
							})
						}
					/>
				</Form.Group>
				<Form.Group as={Col} controlId="formGrid">
					<DashBoardText name="Last Name" label="Enter Last name of employee" />
					<Input
						inputName="employeeLastname"
						type="text"
						handleChange={onHandleChange}
						value={employeeLastName}
						err={validation["employeeLastName"]}
						onPress={() =>
							setValidation({
								employeeLastName: "",
							})
						}
					/>
				</Form.Group>
			</Row>
			<Row>
				<Form.Group as={Col} controlId="formGrid">
					<DashBoardText
						name="Email"
						label="Enter Employee Email Address (Optional)"
					/>
					<Input
						inputName="employeeEmail"
						type="text"
						handleChange={onHandleChange}
						value={employeeEmail}
						// err={validation.employeeEmail}
						onPress={() =>
							setValidation({
								employeeEmail: "",
							})
						}
					/>
				</Form.Group>
				<Form.Group as={Col} controlId="formGrid">
					<DashBoardText
						name="Tax Identification Number"
						label="Enter Tax Indentification Number (Optional)"
					/>
					<Input
						inputName="employeeTin"
						type="text"
						handleChange={onHandleChange}
						value={employeeTin}
						err={validation.employeeTin}
						onPress={() =>
							setValidation({
								employeeTin: "",
							})
						}
					/>
				</Form.Group>
			</Row>
			<Row>
				<Form.Group as={Col} controlId="formGrid">
					<DashBoardText name="Phone Number" label="Enter Phone Number" />
					<Input
						inputName="employeePhoneNumber"
						type="tel"
						handleChange={onHandleChange}
						value={employeePhoneNumber}
						err={validation.employeePhoneNumber}
						onPress={() =>
							setValidation({
								employeePhoneNumber: "",
							})
						}
					/>
				</Form.Group>
				<Form.Group as={Col}>
					<DashBoardText name="Role" label="Enter Role " />
					<Input
						inputName="employeeRole"
						type="text"
						handleChange={onHandleChange}
						value={employeeRole}
						err={validation.employeeRole}
						onPress={() =>
							setValidation({
								employeeRole: "",
							})
						}
					/>
				</Form.Group>{" "}
			</Row>
			<Row>
				<Form.Group as={Col}>
					<DashBoardText name="Department" label="Select employee department" />
					{dep && (
						<select
							name="employeeDepartment"
							className="select mt-2"
							onChange={onHandleChange}>
							{!employeeDepartment ? (
								<option>Select department</option>
							) : (
								<option>{employeeDepartment}</option>
							)}
							{dep.map(({ companyDepartment }) => {
								return (
									<option key={companyDepartment} value={companyDepartment}>
										{companyDepartment}
									</option>
								);
							})}
						</select>
					)}
				</Form.Group>
				<Form.Group as={Col}>
					<DashBoardText
						name="State of origin"
						label="Select state of origin"
					/>
					<select
						name="employeeState"
						className="select mt-2"
						onChange={onHandleChange}>
						{!employeeDepartment ? (
							<option>Select state </option>
						) : (
							<option>{employeeState}</option>
						)}
						{states.map((cur, id) => {
							return (
								<option key={id} value={cur}>
									{cur}
								</option>
							);
						})}
					</select>
				</Form.Group>
			</Row>
			<Button
				type="button"
				className="button ms-auto mt-3"
				onClick={() => {
					Validation();
				}}>
				Next
			</Button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		department: state.FetchBusinessDepartment,
	};
};

export default connect(mapStateToProps, { FetchBankList, FetchDepartment })(
	EmployeeProfile
);
