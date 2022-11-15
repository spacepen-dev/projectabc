import React, {lazy, Suspense} from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const SalariesPage = lazy(() => import("./Dashboard/EmployeeSalariesPage"));
const NoPage = lazy(() => import("./NoPage"));
const Signup = lazy(() => import("../pages/registration/signup"));
const Welcome = lazy(() => import("../pages/registration/welcome"));
const Verification = lazy(()=> import("../pages/registration/verification/Verification")) ;
const LoginPassword =  lazy(()=> import("../pages/registration/loginpassword/LoginPassword")) ;
const  AddBusiness = lazy(()=> import("../pages/registration/addbusiness"));
const RegisteredBusiness = lazy(() => import("../pages/registration/businesslist/RegisteredBusiness"));
const RegistraionFormController = lazy(()=> import("../pages/business-registration/main"))
const EmailLogin = lazy(() => import("../pages/registration/emailLogin"));
const UploadImage = lazy(() => import("../pages/business-registration/image-upload"));
const AddDepartment = lazy(() => import("../pages/business-registration/add-department"));



// import { NotificationProvider } from "./Dashboard/Notification/NotificationContainer";

// CHECK FOR THE WIDTH OF THE DEVICE BEEN USED TO VISIT THE APP

// const checkDeviceWidth = () => {};

const App = () => {
 
  return (
    <Container fluid className='' style={{ minHeight: "100vh" }}>
      <Suspense fallback={<div>Loading...</div>}>
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<EmailLogin />}></Route>
            <Route path='/register-business' element={<AddBusiness />}></Route>
            <Route path='/registered-business' element={<RegisteredBusiness />}></Route>
            <Route path='/sign-up' element={<Signup />}></Route>
            {/* <Route path='/user-login' element={<EmailLogin />}></Route> */}
            <Route path='/user-login-password' element={<LoginPassword />}></Route>
          
            <Route path='/user-welcome' element={<Welcome />}></Route>
            <Route path='/user-verification' element={<Verification />}></Route>
            <Route path='registration/business' element={<RegistraionFormController />}></Route>
            <Route path='registration/business/upload-image' element={<UploadImage />}></Route>
            <Route path='registration/business/add-department' element={<AddDepartment />}></Route>
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
