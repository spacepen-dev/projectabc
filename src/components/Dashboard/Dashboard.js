import React, { useState } from "react";
import { Navbar, Container, Col, Row, Offcanvas } from "react-bootstrap";
import { Routes, Route,  } from "react-router-dom";
import SideBar from "./SideBar";
import ViewEmployee from "./ViewEmployee";
import ViewSalaryHistory from "./ViewSalaryHistory";
import ViewTaxHistory from "./ViewTaxHistory";
import EmployeeSalariesPage from "./EmployeeSalariesPage";
import CompanyWalletPage from "./CompanyWalletPage";
// import CompanyProfile from "./company-profile";
import Profile from "./company-profile/Profile";
import SignOut from "./Signout";
import Overview from "./overview";
import ViewAccountHistory from "./Account-history/ViewAccountHistory";
import AddEmployee from "./Add-employee";

const Dashboard = () => {
  // const navigate = useNavigate();
  const [page, setPage] = useState(1);
  // const { bizToken } = useBusinessToken();


  // useEffect(() => {
  //   console.log(bizToken)
  //   if (!bizToken) {
  //     navigate("/");
  //   }
  // }, [bizToken,navigate]);

  return (
    <Container fluid>
      <Row className='row '>
        <Navbar bg='light' className='nav-bar' expand={false}>
          <Container fluid>
            <Navbar.Toggle aria-controls='offcanvasNavbar' />
            <Navbar.Offcanvas
              id='offcanvasNavbar'
              className='sidebar-menu'
              aria-labelledby='offcanvasNavbarLabel'
              placement='start'>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbarLabel'></Offcanvas.Title>
              </Offcanvas.Header>
              <SideBar pageId={(id) => setPage(id)} page={page} />
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Col className='d-none d-lg-block col-1'>
          <SideBar pageId={(id) => setPage(id)} page={page} />
        </Col>
        <Col className='col-2'>
          <Routes>
            <Route
              index
              element={<Overview getPageId={(id) => setPage(id)} />}
            />
            <Route
              path='/overview'
              element={<Overview getPageId={(id) => setPage(id)} />}
            />

            <Route path='/add/employee' element={<AddEmployee />} />
            <Route path='/view/employees' element={<ViewEmployee />} />
            <Route
              path='/view/salary/history'
              element={<ViewSalaryHistory />}
            />
            <Route
              path='/view/wallet/history'
              element={<ViewAccountHistory />}
            />
            <Route path='/view/tax/history' element={<ViewTaxHistory />} />

            <Route
              path='/pay/employee/salaries'
              element={<EmployeeSalariesPage />}
            />

            <Route path='/company/profile' element={<Profile />} />
            <Route path='/top/up' element={<CompanyWalletPage />} />
            <Route path='/signout' element={<SignOut />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
