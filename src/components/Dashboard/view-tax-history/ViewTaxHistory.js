import React, { useEffect } from "react";
import { connect } from "react-redux";
import useHandleResponse from "../../../hooks/useHandleResponse";
import { FetchTaxHistory } from "../tax-history/TaxAction";
import useToken from "../../../hooks/useToken";
import useBusinessToken from "../../../hooks/useBusinessToken";
import { getUserEmail } from "../../../lib/sharedfuntions";
import Datatable from "../Datatable";

const TaxHistory = ({ FetchTaxHistory, taxHistory }) => {
	const [Data] = useHandleResponse(taxHistory);
	const { bizToken } = useBusinessToken();
	const { token } = useToken();

	useEffect(() => {
		FetchTaxHistory({
			businessToken: bizToken,
			userToken: token,
			emailAddress: getUserEmail(),
		});
	}, [FetchTaxHistory, bizToken, token]);

	const heading = [
		{ name: "DATE", selector: (row) => row.date },
		{ name: "TIN", selector: (row) => row.tin },
		{
			name: "TOTAL TAX AMOUNT",
			selector: (row) =>
				new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "NGN",
				}).format(row.total_tax_amount),
		},
		{ name: "TRANSACTION ID", selector: (row) => row.transaction_id },
		{ name: "TAX SALARY_MONTH", selector: (row) => row.tax_salary_month },
		{ name: "TAX_SALARY YEAR", selector: (row) => row.tax_salary_year },
		{
			name: "TAX DEDUCTED",
			selector: (row) =>
				new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "NGN",
				}).format(row.employeeTax),
		},

		{ name: "TRANSACTION STATUS", selector: (row) => row.transaction_status },
	];

	return (
		<div>
			<div>
				<h4 className="entire-page-headers">TAX HISTORY</h4>
			</div>
			<Datatable columns={heading} data={Data} striped />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		taxHistory: state.FetchTaxHistoryReducer,
	};
};

export default connect(mapStateToProps, { FetchTaxHistory })(TaxHistory);
