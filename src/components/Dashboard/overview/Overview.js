import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { EyeSVG, EyeSlash, WhiteWallet, ProfileWhite } from "../svg/SVG";
import {
  FetchWalletHistory,
  FetchDepartment,
  CompanyDetails,
} from "../../../Actions";
import DetailsCard from "../DetailsCard";
import AccountHistory from "../AccountHistory";
import TaxHistory from "../tax-history";
import Slider from "../Slider";
import TableSpinner from "../TableSpinner";
import useBusinessToken from "../../../hooks/useBusinessToken";
import useToken from "../../../hooks/useToken";
import SalariesHistory from "../salary-history";
import { getUserEmail } from "../../../lib/sharedfuntions";

const Overview = ({
  getPageId,
  FetchWalletHistory,
  companyEmployee,
  companyAmount,
  companyWallet,
  CompanyDetails,
  FetchDepartment,
  departmentRes,
}) => {
	const { bizToken } = useBusinessToken();
	const { token } = useToken();
	const [pageId, setId] = useState(4);
	const [small, setSmall] = useState("first");
	const [link, setLink] = useState("");
	const [request, setRequest] = useState(false);
	const [hideAmount, setHideAmount] = useState(false);
	const [cardDetails, setCardDetails] = useState({
		account: 0,
		totalEmployee: 0,
		totalAmount: 0,
	});

	const values = useMemo(() => {
		return {
			businessToken: bizToken,
			userToken: token,
			emailAddress: getUserEmail(),
		};
	}, [bizToken, token]);

	const getId = (e) => {
		setId(Number(e.target.id));
		setSmall(e.target.nextSibling.id);
	};
	// USE EFFECT TO ADD THE LOADER WHEN FETCH DATA FROM THE DATABASE
	useEffect(() => {
		setRequest(true);
		let id = setTimeout(() => {
			setRequest(false);
		}, 3000);
		return () => {
			clearTimeout(id);
		};
	}, [pageId]);

	// GETTING THE TAB ON THE OVERVIEW PAGE THAT WAS SELECTED
	// AND MAKE REQUEST BASED ON THE TAB SELECTED

	const FetchOverviewData = useCallback(() => {
		FetchWalletHistory(values);
	}, [FetchWalletHistory, values]);

	// const FetchCompanyDetails = useCallback(() => {

	// CompanyDetails(values);
	// }, [CompanyDetails, values]);

	const FetchDepartments = useCallback(() => {
		FetchDepartment(values);
	}, [FetchDepartment, values]);

	//FETCH DATA FROM FETCH WALLET ACTION CREATOR

	useEffect(() => {
		// FetchCompanyDetails(values);
		CompanyDetails(values);
	}, [values, CompanyDetails]);

	useEffect(() => {
		FetchDepartments(values);
	}, [values, FetchDepartments]);

	// USE EFFECT TO CHANGE THE LINK ON THE SIDE BAR
	useEffect(() => {
		FetchOverviewData();
		if (pageId === 4) {
			setLink("/dashboard/view/salary/history");
		} else if (pageId === 7) {
			setLink("/dashboard/view/wallet/history");
		} else {
			setLink("/dashboard/view/tax/history");
		}
	}, [FetchOverviewData, pageId]);

	// COMPANY TOTAL EMPLOYEE
	const companyEmployeeFunct = useCallback(() => {
		if (!companyEmployee) {
			return null;
		} else {
			setCardDetails((state) => {
				return {
					...state,
					totalEmployee: companyEmployee.totalEmployees,
					totalAmount: companyEmployee.balance,
					// totalAmount: companyWallet.data.success.length,
				};
			});
		}
	}, [companyEmployee]);

	// COMPANY WALLET/ACCOUNT HISTORY FUNCTION
	const companyAccountFunct = useCallback(() => {
		if (!companyWallet) {
			return null;
		} else {
			const { Data } = companyWallet.Data;
			if (Data > 0) {
				setCardDetails((state) => {
					return {
						...state,
						account: companyWallet.length,
					};
				});
			}
		}
	}, [companyWallet]);

	//  COMPANY WALLET FUNCTION

	// USE EFFECT TO FETCH THE DATA FOR THE TOTAL EMPLOYEE
	useEffect(() => {
		companyAccountFunct();
		// companyTransactionFunct();
		companyEmployeeFunct();
	}, [companyAccountFunct, companyEmployeeFunct]);

	return (
		<Container fluid className="overview h-100">
			<div className="d-flex justify-content-between align-items-center details-container ">
				<div className="details-card d-flex align-items-center justify-content-around px-2">
					<div>
						<span>
							<h3>TOTAL BALANCE</h3>
						</span>
						<span className="d-inline-block w-100">
							<h2>
								{hideAmount
									? new Intl.NumberFormat("en-US", {
											style: "currency",
											currency: "NGN",
									  }).format(cardDetails.totalAmount)
									: "*********"}
							</h2>
						</span>
					</div>
					<div
						onClick={() => setHideAmount(!hideAmount)}
						style={{ cursor: "pointer" }}>
						{hideAmount ? EyeSlash() : EyeSVG()}
					</div>
				</div>
				<DetailsCard
					heading="TOTAL EMPLOYEES"
					number={cardDetails.totalEmployee}
					secondSVG={ProfileWhite()}
				/>
				<DetailsCard
					heading="TOTAL TRANSACTIONS"
					number={cardDetails.account}
					secondSVG={WhiteWallet()}
				/>
			</div>
			<article className="d-flex align-items-center top-tab">
				<div className="h-100 d-flex justify-content-between align-items-center w-100">
					<Slider
						name="ACCOUNT HISTORY"
						id={7}
						small={small}
						getId={getId}
						pageId={pageId}
						smallId="second"
					/>
					<Slider
						name="SALARY HISTORY"
						id={4}
						small={small}
						getId={getId}
						pageId={pageId}
						smallId="first"
					/>

					<Slider
						name="TAX HISTORY"
						id={8}
						small={small}
						getId={getId}
						pageId={pageId}
						smallId="third"
					/>
					<div className="overview-btn">
						<Link
							className="button d-flex text-white align-items-center justify-content-center"
							to={link}
							onClick={() => getPageId(pageId)}>
							View All
						</Link>
					</div>
				</div>
			</article>
			<article className="bottom-tab">
				<i className="bi bi-eyes-slash"></i>
				{request && (
					<div className="loader-container">
						<TableSpinner />
					</div>
				)}
				{pageId === 7 && !request && <AccountHistory />}
				{pageId === 4 && !request && <SalariesHistory />}
				{pageId === 8 && !request && <TaxHistory />}
			</article>
		</Container>
	);
};

const mapStateToProps = (state) => {
  return {
    companyWallet: state.FetchWalletHistory,
    // companyEmployee: state.CompanyDetailsReducers,
    // companyDepartment: state.DashboardReducer.companyAmount.data,
    departmentRes: state.FetchBusinessDepartment,
  };
};

export default connect(mapStateToProps, {
  FetchWalletHistory,
  FetchDepartment,
  CompanyDetails,
})(Overview);
