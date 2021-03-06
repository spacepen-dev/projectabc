import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./SignIn";
import Registration from "./Registration/Registration";
import OTP from "./Registration/RegistrationOTP";
import OnBoarding from "./Registration/OnBoarding";
import Dashboard from "./Dashboard/Dashboard";
import LoginOtp from "./Registration/LoginOtp";
import TagInput from "./Registration/TagInput";
import SalariesPage from "./Dashboard/EmployeeSalariesPage";
import NoPage from "./NoPage";

const App = () => {
  return (
    <Container fluid className="" style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="login/otp" element={<LoginOtp />}></Route>
          <Route path="registration/company" element={<Registration />}></Route>
          <Route
            path="registration/company/otp/email-confirmation"
            element={<OTP />}
          ></Route>
          <Route path="on-Boarding" element={<OnBoarding />}></Route>
          <Route path="add-roles" element={<TagInput />}></Route>
          <Route path="Dashboard/*" element={<Dashboard />}></Route>
          <Route
            path="registration/company/otp/email-confirmation"
            element={<OTP />}
          ></Route>
          <Route path="on-Boarding" element={<OnBoarding />}></Route>
          <Route path="add-roles" element={<TagInput />}></Route>
          <Route path="Dashboard/*" element={<Dashboard />}></Route>
          <Route path="*" element={<NoPage />}></Route>
          <Route
            path="/pay/employee/salaries"
            element={<SalariesPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
