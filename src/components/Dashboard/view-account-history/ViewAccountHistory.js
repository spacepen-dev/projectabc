import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Datatable from "../Datatable";
import { Form } from "react-bootstrap";
import { FetchWalletHistory } from "../../../Actions";
// import { Badge } from "react-bootstrap";
import useBusinessToken from "../../../hooks/useBusinessToken";
import useToken from "../../../hooks/useToken";
import useHandleResponse from "../../../hooks/useHandleResponse";

let Months = new Set([
	new Date().getMonth(),
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
]);

Months = Array.from(Months);

const GetMonth = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

// function checkMonths() {
//   for (const month of Months) {
//     // console.log(month);
//   }
// }

// checkMonths();

const Year = [
	new Date().getFullYear(),
	new Date().getFullYear() - 1,
	new Date().getFullYear() - 2,
	new Date().getFullYear() - 3,
	new Date().getFullYear() - 4,
];

const currentDate = {
	month: GetMonth[Months],
	year: new Date().getFullYear(),
};

const ViewAccountHistory = ({ FetchWalletHistory, companyWallet }) => {
	const [selectedDate, setSelectedDate] = useState(currentDate);
	const { bizToken } = useBusinessToken();
	const { token } = useToken();
	const [Data] = useHandleResponse(companyWallet);
	// console.log(Data);

	const heading = [
		{ name: "DATE", selector: (row) => row.date },
		// { name: "MONTH", selector: (row) => row.month },
		// { name: "YEAR", selector: (row) => row.year },
		{ name: "TRANSACTION ID", selector: (row) => row.transactionId },
		{
			name: "TOTAL AMOUNT",
			selector: (row) =>
				new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "NGN",
				}).format(row.amount),
		},
		{
			name: "Narration",
			selector: (row) => row.narration,
		},
		{
			name: "TRANSACTION STATUS",
			// selector: (row) => <Badges row={row.transactionStatus} />,
		},
		// {
		//   name: "TAXES",
		//   selector: (row) =>
		//     new Intl.NumberFormat("en-US", {
		//       style: "currency",
		//       currency: "NGN",
		//     }).format(row.taxes),
		// },
		// { name: "TRANSACTION NOTE", selector: (row) => row.narration },
	];

	const FetchOverviewData = useCallback(() => {
		FetchWalletHistory({ userToken: token, businessToken: bizToken });
	}, [FetchWalletHistory, token, bizToken]);

	//FETCH DATA FROM FETCH WALLET ACTION CREATOR
	useEffect(() => {
		FetchOverviewData();
	}, [FetchOverviewData]);

	const filteredItems = Data?.filter(
		(item) =>
			item.month.includes(selectedDate.month) &&
			String(item.year).includes(String(selectedDate.year))
	);

	const onDateChange = (e) => {
		const { name, value } = e.target;
		setSelectedDate({ ...selectedDate, [name]: value });
	};

	return (
		<div>
			<div>
				<h4 className="entire-page-headers">COMPANY ACCOUNT HISTORY</h4>
			</div>
			<div className="paySelect mb-4">
				<Form className="form">
					<Form.Group className="mb-3 form-group" controlId="formSelect">
						<Form.Label>Select a Month</Form.Label>
						<select size="sm" name="month" onChange={onDateChange}>
							{Months.map((month) => {
								return (
									<React.Fragment key={month}>
										<option value={GetMonth[month]}>{GetMonth[month]}</option>
									</React.Fragment>
								);
							})}
						</select>
					</Form.Group>
					<Form.Group className="mb-3 ms-4 form-group" controlId="formSelect">
						<Form.Label>Select a Year</Form.Label>
						<select size="sm" name="year" onChange={onDateChange}>
							{Year.map((year) => {
								return (
									<React.Fragment>
										<option value={year}>{year}</option>
									</React.Fragment>
								);
							})}
						</select>
					</Form.Group>
				</Form>
			</div>
			{/* {console.log(filteredItems)} */}
			<Datatable columns={heading} data={Data} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		companyWallet: state.FetchWalletHistory,
	};
};

export default connect(mapStateToProps, { FetchWalletHistory })(
	ViewAccountHistory
);
