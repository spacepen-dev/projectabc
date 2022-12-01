import { ButtonLoader, Error, NewBackground } from "../ui";
import Logo from '../../../assets/img/logo.svg';
import { bankList } from "../../../Actions";
import { connect } from "react-redux";

import { Input } from "../ui";
import { useFormik } from "formik";
import { EmailLoginSchema } from "../yup";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { EmailLogicRequest } from "./LoginAction";
import { SaveUserEmail } from "../../../lib/sharedfuntions";

const EmailLogin = ({ EmailLogicRequest, login }) => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const formik = useFormik({
		initialValues: {
			email_phone: "",
		},
		validationSchema: EmailLoginSchema,
		onSubmit: (values) => {
			bankList((res) => {
				if (res) {
					localStorage.setItem("BankList", JSON.stringify(res.data.success));

					if (res.status !== 200) {
						return;
					}
					localStorage.setItem("BankList", JSON.stringify(res.data.success));
				}
			});
			EmailLogicRequest(values);
			setLoading(true);
		},
	});

	useEffect(() => {
		if (!login) return null;
		const { loginSuccess, loginMessage } = login;
		setLoading(false);
		if (loginSuccess) {
			navigate("/user-login-password", { state: loginMessage });
			SaveUserEmail(loginMessage);
		}
		return;
	}, [login, navigate]);

	return (
		<NewBackground>
			<main className="container">
				<article className="login-cont">
					<div className="heading-cont">
						<div className="logo-cont">
							<img src={Logo} className="comp-logo" alt="Orio logo" />
						</div>
						<h2 className="heading-text">Welcome Back</h2>
						<p className="heading-subtext py-3">Login to your account</p>
					</div>

					<form onSubmit={formik.handleSubmit}>
						<div className="input-cont">
							<Input
								type="text"
								value={formik.values.email_phone}
								handleChange={formik.handleChange}
								name="email_phone"
								placeholder="Email address or Phone number"
								id="email"
								touched={formik.touched.email_phone}
							/>
							{formik.errors.email_phone && formik.touched.email_phone && (
								<Error error={formik.errors.email_phone} />
							)}
						</div>

						<Link to="/" className="login-forgot" target="_blank">
							Forgot Email?
						</Link>
						<ButtonLoader
							type="submit"
							styles="login-btn"
							name="LOG IN"
							request={loading}
						/>
					</form>
					<aside className="sign-up">
						Don't have an account? <Link to="/sign-up">Sign Up</Link>
					</aside>
				</article>
			</main>
		</NewBackground>
	);
};

const mapStateToProps = (state) => {
    const res = state.LoginReducers;    
    return {
        login: res,
    };
};
export default connect(mapStateToProps, {EmailLogicRequest}) (EmailLogin);