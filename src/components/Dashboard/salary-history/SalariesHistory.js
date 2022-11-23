import React, { useEffect } from "react";
import DashboardTable from "../DashboardTable";
import { FetchSalaryHistory } from "../../../Actions";
import { connect } from "react-redux";
import { Badge } from "react-bootstrap";
import useBusinessToken from "../../../hooks/useBusinessToken";
import useToken from "../../../hooks/useToken";
import useBadge from "../../../hooks/useBadge";
import useHandleResponse from "../../../hooks/useHandleResponse";

// function Badges({ row }) {
//   // const { bg } = useBadge(row);

//  return (
//     // <Badge bg={bg} className='py-2'>
//     //   {row}
//     // </Badge>
//   );
// }

const SalariesHistory = ({ FetchSalaryHistory, companySalary }) => {
  const { bizToken } = useBusinessToken();
  const { token } = useToken();
  const [Data] = useHandleResponse(companySalary)

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


  useEffect(() => {
    FetchSalaryHistory({ businessToken: bizToken, userToken: token });
  }, [FetchSalaryHistory, bizToken, token]);


  // useEffect(() => {
  //   if (!companySalary) {
  //     return null;
  //   } else {
  //     const { Data } = companySalary;
  //     setData(Data);
  //   }
  // }, [companySalary]);

  return (
    <>
      <DashboardTable heading={heading} data={Data} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    companySalary: state.FetchSalaryHistory
  };
};

export default connect(mapStateToProps, { FetchSalaryHistory })(
  SalariesHistory
);
