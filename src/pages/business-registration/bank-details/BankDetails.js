import React, { useContext, useEffect, useState } from "react";
import { Button, ButtonLoader, Input, Label } from "../../registration/ui";
import { connect } from "react-redux";
import { RegistrationContext } from "../main/RegistrationForm";
import { FormContainer } from "../main/RegistrationFormComp";
import { AccountName } from "../../../Actions";
import { RegisterBusiness } from "./DetailsAction";
import SmallLoader from "../../../components/Dashboard/SmallLoader";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import useToken from "../../../hooks/useToken";
import useBankList from "../../../hooks/useBankList";
import { SavedBusinessToken } from "../../../lib/sharedfuntions";

function BankDetails({
	businessAccountNumber,
	handleChange,
	getbankcode,
	getaccountname,
	bankDetails,
	handleSubmit,
	formik,
	prevPage,
	RegisterBusiness,
	formValue,
	loader,
	removeLoader,
	businessDetails,
}) {
	const navigate = useNavigate();

	const { token } = useToken();
	const [bank] = useBankList();
	const { page } = useContext(RegistrationContext);
	const [loading, setLoading] = useState(false);

	const [data, setData] = useState({ value: "", show: false });

	useEffect(() => {
		if (!businessDetails) return null;
		const { success, message } = businessDetails;
		removeLoader(false);
		if (success) {
			navigate("/registration/business/complete", { replace: true });
			SavedBusinessToken(message);
		}
		return;
	}, [businessDetails, navigate]);

	const BankList = () => {
		const filterBankName = bank
			.filter((cur) => cur.bankName.toLowerCase().includes(data.value))
			.map(({ bankCode, bankName }) => {
				return (
					<React.Fragment>
						<li
							key={bankCode}
							class="bankLinks py-3 border-bottom"
							onClick={() => {
								getbankcode(bankCode, bankName);

								setData((state) => {
									return { ...state, value: bankName, show: false };
								});
							}}>
							{bankName}
						</li>
					</React.Fragment>
				);
			});
		return filterBankName;
	};

	const accountNumberprops = {
		type: "text",
		styles: "form-control py-2",
		placeholder: "Input account number",
		id: "businessAccountNumber",
		name: "businessAccountNumber",
		value: businessAccountNumber,
		handleChange,
	};

	function getAccountName() {
		const values = {
			accountNumber: accountNumberprops.value,
			bankCode: bankDetails.code,
			userToken: token,
		};
		setLoading(true);
		AccountName(values, (res, error) => {
			// console.log(res) sss
			if (res) {
				setLoading(false);

				getaccountname(res.data.success);
			} else {
				swal(
					error,
					"Network error!, check your network and click on the get account name again."
				);
			}
		});
	}

	if (page !== 9) {
		return null;
	}
	return (
		<FormContainer
			name="Business Bank Account"
			pageName="Validation"
			desc="We will create a bank account for your business to make salary payment transactions.">
			{/* <!-- Heading --> */}
			<p className="text-center  heading-subtext text-black">
				We will only accept bank transfers from this bank account to the wallet
				account we will create for your business.
			</p>
			{/* <!-- Form --> */}
			<form class="px-3 mt-5 pp_form" onSubmit={handleSubmit}>
				<div class="form-group mb-4">
					<Label name="Business Account Number" styles="mb-3" />

					<Input {...accountNumberprops} />
					{/* <Error error={businessError} touched={businessTouched} /> */}
				</div>
				<div class="form-group mb-4">
					<Label name="Choose Bank Name" styles="mb-3" />
					<input
						type="text"
						onChange={(e) => {
							setData((state) => {
								return { ...state, value: e.target.value, show: true };
							});
						}}
						value={data.value}
						className="form-control py-2 "
					/>

					{data.show && (
						<div
							id="dropdownList"
							className="dropdown-content shadow mt-2 h-100 rounded">
							{BankList()}
						</div>
					)}
				</div>
				<div class="form-group mb-4">
					<Label name="Business Account Name" styles="mb-3" />

					<Button
						name="Get account name"
						disabled={!accountNumberprops.value ? true : false}
						onClick={getAccountName}
						type="button"
						styles="btn text-white py-2 px-3"
					/>
					{loading && <SmallLoader />}
					{bankDetails.owner && (
						<input
							className="form-control py-2 mt-2"
							type="text"
							readOnly
							value={bankDetails.owner}
						/>
					)}
				</div>
				<div class="mb-3 mt-5 button_container d-flex justify-content-center">
					<Button
						name="BACK"
						type="button"
						styles="btn bg-white text-black py-3 px-3 category_btn"
						onClick={prevPage}
					/>

					<ButtonLoader
						type="submit"
						disabled={!bankDetails.owner ? true : false}
						styles="btn text-white p-3 category_btn"
						name="FINISH"
						request={loader}
					/>
				</div>
			</form>
		</FormContainer>
	);
}

const mapStateToProps = (state) => {
    const res = state.BusinessRegistration;    
    return {
        businessDetails: res,
    };
};

export default connect(mapStateToProps, { RegisterBusiness })(BankDetails);