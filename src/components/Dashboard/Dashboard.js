import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Overview from "./Overview";
import AddEmployee from "./AddEmployee";
import ViewEmployee from "./ViewEmployee";
import { Navbar, Container, Col, Row, Offcanvas } from "react-bootstrap";

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
          {page === 1 ? <Overview page={page} /> : ""}
          {page === 2 ? <AddEmployee page={page} /> : ""}
          {page === 3 ? <ViewEmployee page={page} /> : ""}
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;
