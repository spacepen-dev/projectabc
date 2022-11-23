import { NewBackground } from "../ui";
import Library from '../../../assets/img/library.svg';
import Add from '../../../assets/img/add.svg';
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import BusinessList from "./BusinessListComp";
import useToken from "../../../hooks/useToken";
import { FullScreenLoader } from "../ui";
import Logo from "../../../assets/img/logo.svg";
import { useEffect } from "react";
import { getUserEmail } from "../../../lib/sharedfuntions";
import { GetRegisteredBusiness } from "./BusinessListAction";

const RegisteredBusiness = ({
	GetRegisteredBusiness,
	registeredBusinessList,
}) => {
	const email = useLocation();

	const { token } = useToken();
	useEffect(() => {
		GetRegisteredBusiness({
			emailAddress: email.state || getUserEmail(),
			userToken: token,
		});
	}, [GetRegisteredBusiness, token, email]);

	useEffect(() => {
		if (!registeredBusinessList) return null;

		// const { registeredError, registeredNetworkError, registeredMessage } =
		// registeredBusinessList;
		//  console.log(registeredSuccess)
		// if (registeredError) {
		// 	swal("Error!", registeredMessage);
		// } else if (registeredNetworkError) {
		// 	swal("Error!", `${registeredMessage.message} please try again later`);
		// }
	}, [registeredBusinessList]);

	return (
		<NewBackground>
			<main className="mt-2 mt-md-5 container-lg d-flex flex-column justify-content-center align-items-center">
				{registeredBusinessList.registeredRequest && <FullScreenLoader />}
				<article className="py-4 px-2 py-md-5 px-md-4 biz_cont">
					<div className="heading-cont">
						<div className="logo-cont">
							<img src={Logo} className="comp-logo" alt="Orio logo" />
						</div>
						<h2 className="heading-text">Choose A Business Account</h2>
						<p className="mt-3 mb-4 heading-subtext">
							Choose from the list of registered business
						</p>
					</div>

					<div className="row pb-lg-5 justify-content-center">
						{registeredBusinessList.registeredSuccess && (
							<BusinessList business={registeredBusinessList.registeredData} />
						)}
						<div className="col-12 col-sm-6 col-md-4 col-xl-2 mb-4 mb-4-0">
							<Link to="/registration/business">
								<div className="w-100 d-flex flex-column m-auto text-center px-2 position-relative category_businesses">
									<div className="ml-auto mt-3 mr-3 lib_img">
										<img src={Library} alt="" />
									</div>
									<div className="position-absolute add_img">
										<img src={Add} alt="" />
									</div>
									<p className="mt-auto mb-3 text-center add_acct_text">
										Add Account
									</p>
								</div>
							</Link>
						</div>
					</div>
				</article>
				<aside class="sign-up forgot-footer">
					<a href="index.html">SIGN IN&emsp; </a> <span>or</span>{" "}
					<a href="signUp.html" target="_blank">
						&emsp;SIGN UP
					</a>
				</aside>
			</main>
		</NewBackground>
	);
};


const mapStateToProps = (state) => {
    const response = state.FetchRegisteredBusinessList;
    return {
        registeredBusinessList: response,
    }
 }


export default connect(mapStateToProps, {GetRegisteredBusiness})(RegisteredBusiness)