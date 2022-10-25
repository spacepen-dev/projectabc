import React, { useState } from "react";
import Logo from '../../../assets/img/logo.svg';
import { SignupSchema } from "../yup";
import {  useFormik } from "formik";
import { Error, Input } from '../ui';
import { ButtonLoader } from "../ui";
import { SignupRequest } from "../../../Actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NewBackground } from "../ui";

const Signup = ({ SignupRequest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            phoneNumber:'',
        },
      validationSchema: SignupSchema,
        
      onSubmit: (values) => {
        SignupRequest(values, (res) => {
          if (res) {
            
            formik.setSubmitting(false)
            const { status, data } = res;
            if (status !== 200) {
              // error message
              navigate('/user-verification', { replace: true, state: { email:values.email } });
            } else {
              const { error } = data;
              if (error) {
                navigate('/user-verification', { replace: true, state: { email:values.email } });
                console.log(error);
              }
              else navigate('/user-verification', { replace: true, state: { email:values.email } });
            }
          }
        
        });
      }
    }) 


  return <NewBackground>
    <main className="container">
    <article className="login-cont">
      <div className="heading-cont">
        <div className="logo-cont">
          <img src={Logo} class="comp-logo" alt="Orio logo"/>
        </div>
        <h2 className="heading-text">
          Welcome To AimienPay
          </h2>
          
        <p className="heading-subtext">Create an account</p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className={`${formik.errors.fullName ? 'input-cont error': 'input-cont'}`} >
                    <Input type="text" name="fullName" placeholder="Full Name" id="userName" value={formik.values.fullName} handleChange={formik.handleChange} touched={formik.touched.fullName} error={formik.errors.fullName } />
            {(formik.errors.fullName && formik.touched.phoneNumber) && <Error error={formik.errors.fullName} />}
        </div>
  
        <div className={`${formik.errors.phoneNumber ? 'input-cont error': 'input-cont'}`}>
                    <Input type="text" name="phoneNumber" placeholder="Phone number" id="phoneNumber" handleChange={formik.handleChange} value={formik.values.phoneNumber} touched={formik.touched.phoneNumber } />
            {(formik.errors.phoneNumber && formik.touched.phoneNumber) && <Error error={formik.errors.phoneNumber} />}
        </div>
        <div className={`${formik.errors.email ? 'input-cont error': 'input-cont'}`} >
                    <Input type="email" value={formik.values.email} handleChange={formik.handleChange} name="email" placeholder="Email address" id="email" touched={formik.touched.email} />
            {(formik.errors.email && formik.touched.email) && <Error error={formik.errors.email} />}
        </div>

        <div className={`${formik.errors.password ? 'input-cont pw-cont error': 'input-cont pw-cont'}`} >
            <Input type={`${showPassword ? 'password': 'text'}`} value={formik.values.password} handleChange={formik.handleChange} placeholder="Password" name="password" id="pw" className="pwField" touched={formik.touched.phoneNumber}/>

          <label for="pw">
              {showPassword && <i class="bi bi-eye" onClick={() => setShowPassword(!showPassword)}></i>}
              {!showPassword && <i class="bi bi-eye-slash" onClick={() => setShowPassword(!showPassword)}></i> }
                    </label>
            {(formik.errors.password && formik.touched.password) && <Error error={formik.errors.password} />}
        </div>

        <ButtonLoader type='submit' styles='login-btn' name='SIGN UP' request={formik.isSubmitting}/>
      </form>
    <aside className="sign-up">
      Already have an account? <a href="index.html">Sign In</a>
    </aside>
    </article>


  </main>
</NewBackground>
}
const mapStateToProps = (state) => {
  return state;
 }

export default connect(mapStateToProps, {SignupRequest})(Signup);