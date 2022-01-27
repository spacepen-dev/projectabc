import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./SignIn";
import Registration from "./Registration/Registration";
import OTP from "./Registration/OTP";
import OnBoarding from "./Registration/OnBoarding";
import Dashboard from "./Dashboard/Dashboard";
import LoginOtp from "./Registration/LoginOtp";
import TagInput from "./Registration/TagInput";
import WarningPage from "./Dashboard/WarningPage";


const App = (props) => {
  return (
    <Container fluid className="pb-4">
      {/* <WarningPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="login/otp" element={<LoginOtp />}></Route>
          <Route
            path="registration/company"
            exact
            element={<Registration />}
          ></Route>
          <Route
            path="registration/company/otp/email-confirmation"
            element={<OTP />}
          ></Route>
          <Route path="on-Boarding" element={<OnBoarding />}></Route>
          <Route path="add-roles" element={<TagInput />}></Route>
          <Route path="Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
