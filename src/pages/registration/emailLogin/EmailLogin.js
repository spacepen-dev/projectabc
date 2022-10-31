import { ButtonLoader, Error, NewBackground } from "../ui";
import Logo from '../../../assets/img/logo.svg';
import { EmailLogicRequest } from "../../../Actions";
import { connect } from "react-redux";

import { Input } from "../ui";
import { useFormik } from "formik";
import { EmailLoginSchema } from "../yup";
import { useNavigate } from "react-router-dom";

const EmailLogin = ({ EmailLogicRequest }) => {
    
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email_phone: '',
        },
        validationSchema: EmailLoginSchema,
        onSubmit: (values) => {
            EmailLogicRequest(values, (res) => {

                if (res) {
                    formik.setSubmitting(false)
                    if (res.status !== 200) return;
                    else {
                        const { error, success } = res.data;
                        if (error) navigate('/user-login-password', { replace: true, state: values.email_phone });
                        else navigate('/user-login-password', { replace: true, state: values.email_phone })
                    }
                    
                }

            })
        }
    })

    return <NewBackground>
        <main className="container">
            <article className="login-cont">
                <div className="heading-cont">
                    <div className="logo-cont">
                        <img src={Logo} className="comp-logo" alt="Orio logo" />
                    </div>
                    <h2 className="heading-text">
                        Welcome Back
                    </h2>
                    <p className="heading-subtext py-3">Login to your account</p>
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <div className="input-cont">
                        <Input type="text" value={formik.values.email_phone} handleChange={formik.handleChange} name="email_phone" placeholder="Email address or Phone number" id="email" touched={formik.touched.email_phone} />
                        {(formik.errors.email_phone && formik.touched.email_phone) && <Error error={formik.errors.email_phone} />}
                    </div>

                    <a href="#" className="login-forgot" target="_blank">Forgot Email?</a>
                    <ButtonLoader type='submit' styles='login-btn' name='LOG IN' request={formik.isSubmitting} />
                </form>
                <aside className="sign-up">
                    Don't have an account? <a href="signUp.html" target="_blank">Sign Up</a>
                </aside>
            </article>


        </main>
    </NewBackground>

};


export default connect(null, {EmailLogicRequest}) (EmailLogin);