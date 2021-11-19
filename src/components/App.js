import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
import axios from "axios";
import Registration from "./Registration/Registration";
import OTP from "./Registration/OTP";
import OnBoarding from "./Registration/OnBoarding";
import AddRoles from "./Registration/AddRoles";
import Dashboard from "./Dashboard/Dashboard";
import ViewEmployeeModal from "./Dashboard/ViewEmployeeModal";

const App = (props) => {
  useEffect(() => {
    // console.log();
    // fetchData();
  }, []);
  return (
    <Container fluid className='pb-4'>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={SignIn}></Route>
          <Route
            path='/registration/company'
            exact
            component={Registration}></Route>
          <Route path='/otp' exact component={OTP}></Route>
          <Route path='/on-Boarding' exact component={OnBoarding}></Route>
          <Route path='/add-roles' exact component={AddRoles}></Route>
          <Route path='/Dashboard' exact component={Dashboard}></Route>
          <Route path='/view' exact component={ViewEmployeeModal}></Route>
        </div>
      </BrowserRouter>
    </Container>
  );
};

export default App;
