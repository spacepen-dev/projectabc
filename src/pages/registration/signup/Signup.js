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
import swal from "sweetalert";

const Signup = ({ SignupRequest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
        firstName: '',
        lastName:'',
            emailAddress: '',
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
              // navigate('/user-verification', { replace: true, state: { email:values.email } });
            } else {
              const { error } = data;
              if (error) {
                swal("Error!", error, "error");
                // navigate('/user-verification', { replace: true, state: { email:values.email } });
              }
              else navigate('/user-verification', { state: values.emailAddress});
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
        <div className={`${formik.errors.firstName ? 'input-cont error': 'input-cont'}`} >
                    <Input type="text" name="firstName" placeholder="First Name" id="firstName" value={formik.values.firstName} handleChange={formik.handleChange} touched={formik.touched.firstName} error={formik.errors.firstName } />
            {(formik.errors.firstName && formik.touched.phoneNumber) && <Error error={formik.errors.firstName} />}
          </div>
          
          <div className={`${formik.errors.lastName ? 'input-cont error': 'input-cont'}`} >
                    <Input type="text" name="lastName" placeholder="Last Name" id="lastName" value={formik.values.lastName} handleChange={formik.handleChange} touched={formik.touched.lastName} error={formik.errors.lastName } />
            {(formik.errors.lastName && formik.touched.lastName) && <Error error={formik.errors.lastName} />}
        </div>
  
        <div className={`${formik.errors.phoneNumber ? 'input-cont error': 'input-cont'}`}>
                    <Input type="text" name="phoneNumber" placeholder="Phone number" id="phoneNumber" handleChange={formik.handleChange} value={formik.values.phoneNumber} touched={formik.touched.phoneNumber } />
            {(formik.errors.phoneNumber && formik.touched.phoneNumber) && <Error error={formik.errors.phoneNumber} />}
        </div>
        <div className={`${formik.errors.emailAddress ? 'input-cont error': 'input-cont'}`} >
                    <Input type="emailAddress" value={formik.values.emailAddress} handleChange={formik.handleChange} name="emailAddress" placeholder="Email address" id="emailAddress" touched={formik.touched.emailAddress} />
            {(formik.errors.emailAddress && formik.touched.emailAddress) && <Error error={formik.errors.emailAddress} />}
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