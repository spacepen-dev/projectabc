import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import useHandleResponse from "../../hooks/useHandleResponse";

import Logo from "../Logo";
import DashBoardLinks from "./DashBoardLinks";
import {
	SVG,
	EmployeeIcon,
	Salary,
	Wallet,
	Tax,
	Profile,
	SignOut,
} from "./svg/SVG";

const SideBar = ({ pageId, page, companyInfo }) => {
	const [Data] = useHandleResponse(companyInfo);
	return (
		<section className="sidebar-container">
			<div className="side-bar h-100 ">
				<div className="sidebar-logo w-100 d-flex flex-column align-items-center justify-content-center pb-3">
					<h1 style={{ fontSize: "1.5rem" }}>
						{!Data.businessName ? "Loading..." : Data?.businessName}
					</h1>
					<Link to="/registered-business">Go back</Link>
					{/* <Logo /> */}
				</div>

				<DashBoardLinks
					none="none"
					name="Overview"
					pathLink="overview"
					icon={SVG()}
					id={1}
					data={(data) => {
						pageId(data);
					}}
					page={page}
				/>
				<DashBoardLinks
					heading="EMPLOYEES"
					name="Add new employees"
					pathLink="add/employee"
					second="View employees"
					icon={EmployeeIcon()}
					id={2}
					data={(data) => {
						pageId(data);
					}}
					page={page}
				/>
				<DashBoardLinks
					none="none"
					name="View employees"
					pathLink="view/employees"
					icon={EmployeeIcon()}
					id={3}
					data={(data) => {
						pageId(data);
					}}
					page={page}
				/>
				<DashBoardLinks
					heading="SALARY"
					id={4}
					name="View salary History"
					pathLink="view/salary/history"
					second="Pay employees salaries"
					icon={Salary()}
					data={(data) => {
						pageId(data);
					}}
					page={page}
				/>
				<DashBoardLinks
					none="none"
					id={5}
					name="Pay employees salaries"
					pathLink="pay/employee/salaries"
					icon={Salary()}
					data={(data) => {
						pageId(data);
					}}
					page={page}
				/>
				<DashBoardLinks
					heading="ACCOUNT"
					name="Top up company wallet"
					second="View wallet History"
					pathLink="top/up"
					icon={Wallet()}
					id={6}
					data={(data) => {
						pageId(data);
					}}
					page={page}
				/>
				<DashBoardLinks
					none="none"
					name="View wallet History"
					icon={Wallet()}
					pathLink="view/wallet/history"
					id={7}
					data={(data) => {
						pageId(data);
					}}
					page={page}
				/>
				<DashBoardLinks
					heading="TAXATION"
					name="
          View tax History"
					second="
          Form H1"
					pathLink="view/tax/history"
					icon={Tax()}
					id={8}
					data={(data) => {
						pageId(data);
					}}
					page={page}
				/>
				{/* <DashBoardLinks
          none='none'
          pathLink='/table'
          name='
          Form H1'
          icon={Tax()}
          id={9}
          data={(data) => {
            pageId(data);
          }}
          page={page}
        /> */}

				<DashBoardLinks
					none="none"
					name="Profile"
					pathLink="company/profile"
					icon={Profile()}
					id={10}
					data={(data) => {
						pageId(data);
					}}
					page={page}
				/>

				<DashBoardLinks
					none="none"
					name="sign-out"
					pathLink="signout"
					icon={SignOut()}
					id={11}
					data={(data) => {
						pageId(data);
					}}
					page={page}
				/>
			</div>
			{console.log(page)}
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		companyInfo: state.CompanyDetailsReducers,
	};
};

export default connect(mapStateToProps)(SideBar);
