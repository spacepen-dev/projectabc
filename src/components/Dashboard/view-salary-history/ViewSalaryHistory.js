import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import Datatable from "../Datatable";
import { FetchSalaryHistory } from "../../../Actions";
import useBusinessToken from "../../../hooks/useBusinessToken";
import useToken from "../../../hooks/useToken";
import useHandleResponse from "../../../hooks/useHandleResponse";

const ViewSalaryHisory = ({ FetchSalaryHistory, companySalary }) => {
	const { bizToken } = useBusinessToken();
	const { token } = useToken();
	const [Data] = useHandleResponse(companySalary);

	console.log(companySalary);
	const FetchedData = useCallback(() => {
		// FetchSalaryHistory(businessToken, userToken);
		FetchSalaryHistory({ businessToken: bizToken, userToken: token });
	}, [FetchSalaryHistory, bizToken, token]);

	useEffect(() => {
		FetchedData();
	}, [FetchedData]);

	// EFFECT FOR NETWORK ERROR

	const heading = [
		{ name: "DATE", selector: (row) => row.date },
		{ name: "FIRST NAME", selector: (row) => row.employeeFirstname },
		{ name: "LAST NAME", selector: (row) => row.employeeLastname },
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

		{ name: "TRANSACTION ID", selector: (row) => row.transactionId },
	];
	return (
		<div>
			<div>
				<h4 className="entire-page-headers">SALARY HISTORY</h4>
			</div>
			<Datatable
				columns={heading}
				data={Data}
				striped
				// progressPending={pending}
				// noDataComponent={() => {
				//   return "Show error";
				// }}
			/>
			{/* {state.modal && (
        <VerificationModal
          message={`oops! Something Went Wrong`}
          close={closeModal}
        />
      )} */}
		</div>
	);
};

const mapStateToProps = (state) => {
  return {
    companySalary: state.FetchSalaryHistory,
  };
};
export default connect(mapStateToProps, { FetchSalaryHistory })(
  ViewSalaryHisory
);
