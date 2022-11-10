import React, {lazy, Suspense} from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
const SignIn = lazy(()=> import( "./SignIn"))
const Registration = lazy(()=> import( "./Registration/Registration"))
const OTP = lazy(()=> import( "./Registration/RegistrationOTP"))
const OnBoarding = lazy(()=> import( "./Registration/OnBoarding"))
const Dashboard = lazy(()=> import( "./Dashboard/Dashboard"))
const LoginOtp = lazy(()=> import( "./Registration/LoginOtp"))
const TagInput = lazy(()=> import( "./Registration/TagInput"))
const SalariesPage = lazy(()=> import( "./Dashboard/EmployeeSalariesPage"))
const NoPage = lazy(()=> import( "./NoPage"))
const VerifyUser = lazy(()=> import( "./Registration/VerifyUser"))
const Signup = lazy(()=> import( "../pages/registration/signup"))
 const Welcome = lazy(()=> import( "../pages/registration/welcome"))
const Verification = lazy(()=> import("../pages/registration/verification/Verification")) ;
const LoginPassword =  lazy(()=> import("../pages/registration/loginpassword/LoginPassword")) ;
const  AddBusiness = lazy(()=> import("../pages/registration/addbusiness"));
const RegisteredBusiness = lazy(() => import("../pages/registration/businesslist/RegisteredBusiness"));
const RegistraionFormController = lazy(()=> import("../pages/business-registration/main"))
const EmailLogin = lazy(() => import("../pages/registration/emailLogin"));



// import { NotificationProvider } from "./Dashboard/Notification/NotificationContainer";

// CHECK FOR THE WIDTH OF THE DEVICE BEEN USED TO VISIT THE APP

// const checkDeviceWidth = () => {};

const App = () => {
  // const Pages = useRoutes([
  //   {
  //     path: '/',
  //     element: <EmailLogin />,
  //   },
  //   {
  //     path:'/register-business',
  //     element:< AddBusiness />
  //   },
  //   {
  //     path:'/registered-business',
  //     element:< RegisteredBusiness />
  //   },
  //   {
  //     path:'/sign-up',
  //     element:< Signup />
  //   },
  //   {
  //     path:'/user-login-password ',
  //     element:< LoginPassword />
  //   },
  //   {
  //     path:'/user-welcome ',
  //     element:< Welcome />
  //   },
  //   {
  //     path:'/user-verification ',
  //     element:< Verification />
  //   },
  //   {
  //     path:'/registration/business ',
  //     element:< RegistraionFormController />
  //   },
  // ])
  return (
    <Container fluid className='' style={{ minHeight: "100vh" }}>
      <Suspense fallback={<div>Loading...</div>}>
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />}></Route>
            <Route path='/register-business' element={<AddBusiness />}></Route>
            <Route path='/registered-business' element={<RegisteredBusiness />}></Route>
            <Route path='/sign-up' element={<Signup />}></Route>
            <Route path='/user-login' element={<EmailLogin />}></Route>
            <Route path='/user-login-password' element={<LoginPassword />}></Route>
          
            <Route path='/user-welcome' element={<Welcome />}></Route>
            <Route path='/user-verification' element={<Verification />}></Route>
            <Route path='registration/business' element={<RegistraionFormController />}></Route>







          

          
            <Route path='login/otp' element={<LoginOtp />}></Route>
            <Route path='registration/company' element={<Registration />}></Route>
            <Route
              path='registration/company/otp/email-confirmation'
              element={<OTP />}></Route>
            <Route path='on-Boarding' element={<OnBoarding />}></Route>
            <Route path='add-roles' element={<TagInput />}></Route>
            <Route path='Dashboard/*' element={<Dashboard />}></Route>
            <Route
              path='registration/company/otp/email-confirmation'
              element={<OTP />}></Route>
            <Route path='on-Boarding' element={<OnBoarding />}></Route>
            <Route path='verify-email' element={<VerifyUser />}></Route>
            <Route path='add-roles' element={<TagInput />}></Route>
            <Route path='Dashboard/*' element={<Dashboard />}></Route>
            <Route path='*' element={<NoPage />}></Route>
            <Route
              path='/pay/employee/salaries'
              element={<SalariesPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Container>
  );
};

export default App;
