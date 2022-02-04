import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Navbar, Container, Col, Row, Offcanvas } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import TableController from "./TableController";

import SideBar from "./SideBar";
import Overview from "./Overview";
import AddEmployee from "./AddEmployee";
import ViewEmployee from "./ViewEmployee";
import ViewSalaryHisory from "./ViewSalaryHistory";
import { CompanyDetails } from "../../Actions";

const Dashboard = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    // CompanyDetails();
  }, []);
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
            <Route index element={<Overview />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/add/employee' element={<AddEmployee />} />
            <Route path='/view/employees' element={<ViewEmployee />} />
            <Route path='/view/salary/history' element={<ViewSalaryHisory />} />
            <Route path='/table' element={<TableController />} />
            <Route
              path='/view/salary/history'
              element={<payEmployeeSalary />}
            />
            <Route path='/' element={<payEmployeeSalary />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};
export default connect(null, { CompanyDetails })(Dashboard);
