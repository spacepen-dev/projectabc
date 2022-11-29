import React, { Fragment, useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { CompanyDetails } from "../../../Actions";

import { EyeSVG, EyeSlash } from "../svg/SVG";
import useToken from "../../../hooks/useToken";
import useBusinessToken from "../../../hooks/useBusinessToken";
import { getUserEmail } from "../../../lib/sharedfuntions";
import useHandleResponseObject from "../../../hooks/useHandleResponseObject";

const CompanyWalletPage = ({ CompanyDetails, accountDetails }) => {
	const [companyAccountDetails, setAccoutDetails] = useState("");
	const [active, setActive] = useState(false);
	const { token } = useToken();
	const { bizToken } = useBusinessToken();
	const { data } = useHandleResponseObject(accountDetails);

	const values = useMemo(() => {
		return {
			businessToken: bizToken,
			userToken: token,
			emailAddress: getUserEmail(),
		};
	}, [bizToken, token]);

	useEffect(() => {
		CompanyDetails(values);
	}, [CompanyDetails, values]);

	return (
		<Fragment>
			<div>
				<h4 className="entire-page-headers">COMPANY TOPUP WALLET </h4>
			</div>
			<section className="container mt-5 d-flex flex-column align-items-center justify-content-evenly ">
				<div className="col-8 ">
					<div className="container-page col-8 shadow">
						<span>
							<p className="TB">TOTAL BALANCE</p>
							<div className="money">
								<p className="amt">
									{active.hideAmount
										? new Intl.NumberFormat("en-US", {
												style: "currency",
												currency: "NGN",
										  }).format(data?.balance)
										: "*********"}
								</p>
							</div>
						</span>
						<div
							className="circle"
							style={{ cursor: "pointer" }}
							onClick={() =>
								setActive((prev) => {
									return { ...prev, hideAmount: !active.hideAmount };
								})
							}>
							{active.hideAmount ? EyeSlash() : EyeSVG()}
						</div>
					</div>
				</div>
				<div className="fund-sym col-8">
					<p className="fund">Fund company wallet</p>
				</div>
				<div className="d-flex justify-content-between col-8 ">
					<div
						className="container-2 shadow"
						onClick={() =>
							setActive((prev) => {
								return { ...prev, modal: true };
							})
						}>
						<div className="circle-2"></div>
						<p className="choice">By Bank transfer</p>
					</div>
					{/* <div className='container-2 shadow'>
            <div className='circle-2'></div>
            <p className='choice'>By Credit/Debit Card</p>
          </div> */}
				</div>

				{active.modal && (
					<Modal show={true} centered>
						<div className="col-12">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">
										Your Company Account Details
									</h5>
								</div>
								<div className="modal-body">
									{/* <Input
                    type='text'
                    handleChange={this.onAmountHandle}
                    err={this.state.validation}
                    onFocus={() => this.setState({ validation: "" })}
                    readonly
                    value={}
                  /> */}
									<div className="fund-sym">
										<p className="fund">{data?.vAccount_name}</p>
										<p className="fund">{data?.vBank_name}</p>
										<p className="fund text-dark">{data?.vAccount_number}</p>
									</div>
								</div>
								<Form
									className="button-container double-btns d-flex justify-content-end align-items-end"
									// onSubmit={this.submitAmount}
								>
									<Button
										type="button"
										className="button ms-auto"
										// disabled={this.state.request}
										onClick={() =>
											setActive((prev) => {
												return { ...prev, modal: false };
											})
										}>
										CLOSE
									</Button>
									<Button
										type="button"
										className="button mx-2"
										onClick={() => {
											navigator.clipboard
												.writeText(companyAccountDetails.accountNumber)
												.then(() => {
													alert("copied");
												})
												.catch((err) => {
													alert("Error in copying", err);
												});
										}}>
										COPY
									</Button>
								</Form>
							</div>
						</div>
					</Modal>
				)}
			</section>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		accountDetails: state.CompanyDetailsReducers,
	};
};
export default connect(mapStateToProps, { CompanyDetails })(CompanyWalletPage);
