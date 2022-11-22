import { useNavigate, useLocation } from "react-router-dom";
import { ButtonLoader, Error, Input, NewBackground } from "../ui";
import { useFormik } from 'formik';
import { useEffect, useState } from "react";
import { PasswordLoginSchema } from "../yup";
import { PasswordLogicRequest } from "../../../Actions";
import Logo from '../../../assets/img/logo.svg';
import swal from "sweetalert";
import { connect } from 'react-redux';
import { SaveToken } from "../../../lib/sharedfuntions";

function LoginPassword({PasswordLogicRequest, passwordLogin}) {

  const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            password:'',
        },
        validationSchema: PasswordLoginSchema,
        onSubmit: (values) => {
          PasswordLogicRequest({ password: values.password, emailAddress: location.state });
          setLoading(true);
        },
    })
  
  useEffect(() => {
    if (!passwordLogin) return null;

    setLoading(false);
      const { passwordSuccess, passwordError, passwordNetworkError, passwordMessage } = passwordLogin;
      // setLoading(false)
      if (passwordError) {
          swal("Error!", passwordMessage,"error");
      } else if (passwordSuccess) {
        SaveToken(passwordMessage)
        navigate('/registered-business', { replace: true, state:'' })
      } else if (passwordNetworkError) {
        swal("Error!", `${passwordMessage}! Please, try again later!`, "error");
    };
  }, [passwordLogin, navigate]);
  
  
  
  
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
          <p className="heading-subtext py-3">{location.state}</p>
        </div>

        <form onSubmit={formik.handleSubmit}>
      

          <div className={`${formik.errors.password ? 'input-cont pw-cont error' : 'input-cont pw-cont'}`} >
            <Input type={`${showPassword ? 'password' : 'text'}`} value={formik.values.password} handleChange={formik.handleChange} placeholder="Password" name="password" id="pw" className="pwField" touched={formik.touched.phoneNumber} />

            <label for="pw">
              {showPassword && <i class="bi bi-eye" onClick={() => setShowPassword(!showPassword)}></i>}
              {!showPassword && <i class="bi bi-eye-slash" onClick={() => setShowPassword(!showPassword)}></i>}
            </label>
            {(formik.errors.password && formik.touched.password) && <Error error={formik.errors.password} />}
          </div>

          <a href="forgotPassword.html" className="login-forgot" target="_blank">Forgot Password?</a>
          <ButtonLoader type='submit' styles='login-btn' name='LOG IN' request={loading} />
        </form>
        <aside className="sign-up">
          Don't have an account? <a href="signUp.html" target="_blank">Sign Up</a>
        </aside>
      </article>


    </main>
  </NewBackground>
};

const mapStateToProps = (state) => {
  const res = state.PasswordLoginReducers; 
  return {
      passwordLogin: res,
  };
};

export default connect(mapStateToProps,{PasswordLogicRequest})(LoginPassword)