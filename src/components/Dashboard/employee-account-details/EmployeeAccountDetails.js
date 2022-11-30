import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import DashBoardText from "../DashBoardText";
import Input from "../../Registration/Input";
import LoaderButton from "../../LoaderButton";
import AccountNameVerification from "../AccountNameVerification";

import useBankList from "../../../hooks/useBankList";
import useBusinessToken from "../../../hooks/useBusinessToken";

const EmployeeAccountDetails = ({
	bankListRes,
	accountName,
	accountNameErr,
	accountNumber,
	index,
	err,
	onHandleChange,
	prevQuestion,
	registerEmployeeAction,
	editEmployeeAction,
	addEmployeeLink,
	editEmployeeLink,
	addEmployeeRes,
	addEmployeeSuccess,
	editEmployeeErr,
	editEmployeeSuccess,
	employeeData,
	token,
	close,
	VerifyAccountName,
}) => {
	const [showDropDown, setDropDown] = useState(false);
	const [filterBank, setFilterBank] = useState(employeeData.employeeBankName);
	const [bankcode, setBankCode] = useState(employeeData.employeeBankCode);
	const [validation, setValidation] = useState({});
	const [request, setRequest] = useState(false);
	const [employeeAccountName, setAccountName] = useState(
		employeeData.employeeAccountName
	);
	const [bankCodeList] = useBankList();
	const { bizToken } = useBusinessToken();

	const navigate = useNavigate();
	// ACCOUNT NAME ON CHANGE

	// GET ACCOUNT NAME
	useEffect(() => {
		if (!accountName) return;
		else {
			const { success, error } = accountName;
			if (error) {
				setAccountName(error);
				// dispatch({ type: "ERROR_RESPONSE", request: false, error: error });
			} else {
				// dispatch({
				setAccountName(success);
				//   type: "SUCCESS_RESPONSE",
				//   request: false,
				//   success: success,
				// });
			}
		}
	}, [accountName]);

	useEffect(() => {
		if (!addEmployeeSuccess) {
			return null;
		}
		setRequest(false);
	}, [addEmployeeSuccess]);

	useEffect(() => {
		if (!editEmployeeSuccess) {
			return null;
		}
		setRequest(false);
	}, [editEmployeeSuccess]);

	const BankList = () => {
		const filterBankName = bankCodeList
			.filter((cur) => cur.bankName.toLowerCase().includes(filterBank))
			.map(({ bankCode, bankName }, index) => {
				return (
					<React.Fragment>
						<li
							key={index}
							class="bankLinks"
							onClick={() => {
								setFilterBank(bankName);
								setDropDown(false);
								setBankCode(bankCode);
							}}>
							{bankName}
						</li>
					</React.Fragment>
				);
			});
		return filterBankName;
	};
	const Validation = () => {
		if (
			!accountNumber ||
			accountNumber.length > 10 ||
			accountNumber.length < 10
		) {
			setValidation({
				accountNumber: "Invalid Employee's account number!",
			});
		}
		//  else if (!filterBank) {
		//   setValidation({
		//     bankName: "Employee's bank name is required!",
		//   });
		// }
		else {
			setRequest(true);
			if (editEmployeeLink) {
				// REGISTRATION EMPLOYEE ACTION CREATOR
				editEmployeeAction({
					...employeeData,
					filterBank,
					bankcode,
					businessToken: bizToken,
					userToken: token,
					employeeAccountName,
				});
			} else if (addEmployeeLink) {
				// EDIT EMPLOYEE ACTIONS
				registerEmployeeAction({
					...employeeData,
					filterBank,
					bankcode,
					businessToken: bizToken,
					userToken: token,
					employeeAccountName,
				});
			}
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		Validation();
	};

	if (index !== 4) {
		return null;
	}
	return (
		<Form className="d-flex flex-column" onSubmit={onSubmit}>
			<Row>
				<Form.Group as={Col}>
					<DashBoardText name="Bank Name" label="Enter Employee Bank Name" />
					<Input
						inputName="employee_bankname"
						type="text"
						handleChange={(e) => {
							setFilterBank(e.target.value);
						}}
						value={filterBank}
						err={validation.bankName}
						onPress={() => {
							setDropDown(true);
							setValidation({
								bankName: "",
							});
						}}
					/>

					{showDropDown && (
						<div id="dropdownList" className="dropdown-content shadow">
							{BankList()}
						</div>
					)}
				</Form.Group>{" "}
			</Row>
			<Row>
				<Form.Group as={Col}>
					<DashBoardText
						name="Account Number"
						label="Enter Employee Account Number"
					/>
					{/* <div className=''> */}
					<Input
						inputName="employeeAccountNumber"
						type="number"
						handleChange={onHandleChange}
						value={accountNumber}
						err={validation.accountNumber}
						onPress={() =>
							setValidation({
								accountNumber: "",
							})
						}
					/>
				</Form.Group>
				<Form.Group as={Col}>
					<DashBoardText
						name="Account Name"
						label="Enter Employee Account Name "
					/>
					<input
						inputName="employeeAccountName"
						type="text"
						className="w-100 border-1 registration-input rounded-1 px-2 border-1"
						readOnly
						value={employeeAccountName}
					/>
				</Form.Group>
				<div className="flex align-items-center justify-content-end">
					<AccountNameVerification
						data={{
							businessToken: bizToken,
							bankcode,
							accountNumber,
							userToken: token,
						}}
					/>
				</div>
			</Row>
			<div className="ms-auto mt-4 double-btns">
				<Button
					type="button"
					className="button ms-auto "
					disabled={request ? true : false}
					onClick={prevQuestion}>
					Back
				</Button>

				<LoaderButton btnName="Finish" btnStyle="ms-4" request={request} />
			</div>
		</Form>
	);
};

const mapStateToProps = (state) => {
	return {
		accountName: state.DashboardReducer.verifyNumber.data,
		accountNameErr: state.DashboardReducer.verifyNumberErr,
	};
};

export default connect(mapStateToProps)(EmployeeAccountDetails);
