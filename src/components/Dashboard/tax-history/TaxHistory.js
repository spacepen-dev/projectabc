import React, { useEffect } from "react";
import { connect } from "react-redux";
import useHandleResponse from "../../../hooks/useHandleResponse";
import DashboardTable from "../DashboardTable";
import { FetchTaxHistory } from "./TaxAction";
import useToken from "../../../hooks/useToken";
import useBusinessToken from "../../../hooks/useBusinessToken";
import { getUserEmail } from "../../../lib/sharedfuntions";

const TaxHistory = ({ FetchTaxHistory, taxHistory }) => {
	const [Data] = useHandleResponse(taxHistory);
	const { bizToken } = useBusinessToken();
	const { token } = useToken();

	console.log(Data);

	useEffect(() => {
		FetchTaxHistory({
			businessToken: bizToken,
			userToken: token,
			emailAddress: getUserEmail(),
		});
	}, [FetchTaxHistory, bizToken, token]);

	const heading = [
		{ name: "DATE", selector: (row) => row.date },
		{ name: "FIRST NAME", selector: (row) => row.employeeFirstname },
		{ name: "LAST NAME", selector: (row) => row.employeeLastname },
		{ name: "EMAIL", selector: (row) => row.email },
		{ name: "ACCOUNT NAME", selector: (row) => row.accountName },
		{ name: "ACCOUNT NUMBER", selector: (row) => row.accountNumber },
		{
			name: "TAX DEDUCTED",
			selector: (row) =>
				new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "NGN",
				}).format(row.employeeTax),
		},
		{
			name: "SALARY PAID",
			selector: (row) =>
				new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "NGN",
				}).format(row.employeeSalary),
		},
		// { name: "DAY", selector: (row) => row.day },
		// { name: "MONTH", selector: (row) => row.month },
		// { name: "YEAR", selector: (row) => row.year },
		{ name: "TRANSACTION ID", selector: (row) => row.transactionId },
		{
			name: "TRANSACTION STATUS",
			// selector: (row) => <Badges row={row.transactionStatus} />,
		},
	];

	return (
		<>
			<DashboardTable heading={heading} data={Data} display="none" />
		</>
	);
};

const mapStateToProps = (state) => {
  return {
    taxHistory: state.FetchTaxHistoryReducer
  }
}

export default connect(mapStateToProps, {FetchTaxHistory})(TaxHistory);
