import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Navbar, Container, Col, Row, Offcanvas } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import SideBar from "./SideBar";
import Overview from "./Overview";
import AddEmployee from "./AddEmployee";
import ViewEmployee from "./ViewEmployee";
import ViewSalaryHistory from "./ViewSalaryHistory";
import ViewTaxHistory from "./ViewTaxHistory";
import ViewAccountHistory from "./ViewAccountHistory";
import { CompanyDetails } from "../../Actions";
import EmployeeSalariesPage from "./EmployeeSalariesPage";
import CompanyWalletPage from "./CompanyWalletPage";
import { FetchDepartment } from "../../Actions";
import CompanyProfile from "./CompanyProfile";
import NetWorkErrors from "../NetWorkErrors";

const Dashboard = ({ FetchDepartment, departmentRes, departmentErr }) => {
  const [page, setPage] = useState(1);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShow] = useState(false);
  const [departmentData, setDepartmentData] = useState({});
  const [message, setMessage] = useState("");

  // FETCH ALL THE DATA FROM THE API (USUALLY A GET REQUEST TO FETCH ALL THE DATA NEEDED ON THE DASHBOARD)
  useEffect(() => {
    // GET TOKEN
    setToken(localStorage.getItem("token"));
    // GET EMAIL
    setEmail(localStorage.getItem("email"));
    // FETCH THE DEPARTMENT

    // CompanyDetails();
  }, []);

  // FETCH DEPARTMENT DATA USE EFFECT
  useEffect(() => {
    // ADD FETCH DEPARTMENT ACTION CREATOR
    // FetchDepartment(email, token);
    /**
     * ON ERROR SHOW WARNING MODAL AND RELOAD
     *
     * ON SUCCESS PUSH TO LOCAL STORAGE
     * */
  }, []);

  // ON SUCCESSFUL FETCHING OF DEPARTMENT

  // FETCH DEPARTMENT ERROR
  // useEffect(() => {
  //   if (!departmentErr) {
  //     return null;
  //   } else {
  //     setShow(true);
  //     setMessage(departmentRes.message);
  //     const removeTimeOut = setTimeout(() => {
  //       setShow(false);
  //       FetchDepartment(email, token);
  //     }, 4000);
  //     return () => {
  //       clearTimeout(removeTimeOut);
  //     };
  //   }
  // }, [departmentErr]);

  // SAVE AND SEND DATA TO ADD EMPLOYEE COMPONENT
  //   useEffect(()=> {
  // if(!departmentRes){
  // return null
  // }else {
  //   const { error, success } = departmentData.data;
  //   if (error) {
  //     setDepartmentData()
  //     setMessage(error);
  //     const removeTimeOut = setTimeout(() => {
  //       setShow(false);
  //     }, 4000);
  //     return () => {
  //       clearTimeout(removeTimeOut);
  //     };
  //   } else if (success) {
  //     setSuccess(success);
  //     const removeTimeOut = setTimeout(() => {
  //       setSuccess("");
  //     }, 4000);
  //     return () => {
  //       clearTimeout(removeTimeOut);
  //     };
  //   }
  // }
  //   },[])

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
      {/* {showModal && (
        <NetWorkErrors
          errMessage={errorMessage}
          serverErr={error}
          removeLoader={() => setRequest(false)}
        />
      )} */}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    departmentRes: state.DashboardReducer.fetchDepartment,
    departmentErr: state.DashboardReducer.fetchDepartmentErr,
  };
};

export default connect(mapStateToProps, { CompanyDetails, FetchDepartment })(
  Dashboard
);
