import React, { useEffect, useState } from "react";
import { Navbar, Container, Col, Row, Offcanvas } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import Overview from "./Overview";
import AddEmployee from "./AddEmployee";
import ViewEmployee from "./ViewEmployee";
import ViewSalaryHistory from "./ViewSalaryHistory";
import ViewTaxHistory from "./ViewTaxHistory";
import ViewAccountHistory from "./ViewAccountHistory";
import EmployeeSalariesPage from "./EmployeeSalariesPage";
import CompanyWalletPage from "./CompanyWalletPage";
import CompanyProfile from "./CompanyProfile";

const Dashboard = () => {
  const [page, setPage] = useState(1);

  return (
    <Container fluid>
      <Row className='row'>
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

            <Route path='/company/profile' element={<CompanyProfile />} />
            <Route path='/top/up' element={<CompanyWalletPage />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
