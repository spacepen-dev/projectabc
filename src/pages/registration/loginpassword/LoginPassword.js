import { useNavigate, useLocation } from "react-router-dom";
import { ButtonLoader, Error, Input, NewBackground } from "../ui";
import { useFormik } from 'formik';
import { useState } from "react";
import { PasswordLoginSchema } from "../yup";
import { PasswordLogicRequest } from "../../../Actions";
import Logo from '../../../assets/img/logo.svg';
import swal from "sweetalert";

function LoginPassword() {

  const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();

    const formik = useFormik({
        initialValues: {
            password:'',
        },
        validationSchema: PasswordLoginSchema,
        onSubmit: (values) => {
            PasswordLogicRequest(values, (res) => {
                if (res) {
                    formik.setSubmitting(false)
                    if (res.status !== 200) return;
                    else {
                        const { error } = res.data;
                        if (error) swal("Error!", error, "error");

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
          <img src={Logo} className="comp-logo" alt="Orio logo"/>
        </div>
        <h2 className="heading-text">
          Welcome Back
        </h2>
        <p className="heading-subtext py-3">{ location.state}</p>
      </div>

      <form onSubmit={formik.handleSubmit}>
      

<div className={`${formik.errors.password ? 'input-cont pw-cont error': 'input-cont pw-cont'}`} >
            <Input type={`${showPassword ? 'password': 'text'}`} value={formik.values.password} handleChange={formik.handleChange} placeholder="Password" name="password" id="pw" className="pwField" touched={formik.touched.phoneNumber}/>

          <label for="pw">
              {showPassword && <i class="bi bi-eye" onClick={() => setShowPassword(!showPassword)}></i>}
              {!showPassword && <i class="bi bi-eye-slash" onClick={() => setShowPassword(!showPassword)}></i> }
                    </label>
            {(formik.errors.password && formik.touched.password) && <Error error={formik.errors.password} />}
        </div>

        <a href="forgotPassword.html" className="login-forgot" target="_blank">Forgot Password?</a>
                    <ButtonLoader type='submit' styles='login-btn' name='LOG IN' request={formik.isSubmitting} />
                </form>
    <aside className="sign-up">
      Don't have an account? <a href="signUp.html" target="_blank">Sign Up</a>
    </aside>
    </article>


  </main>
    </NewBackground> 
};


export default LoginPassword;