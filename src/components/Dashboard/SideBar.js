import React, { useState } from "react";
import { Routes } from "react-router-dom";

import Logo from "../Logo";
import DashBoardLinks from "./DashBoardLinks";
import SVG from "./svg/Overview";
import EmployeeIcon from "./svg/Employees";
import Salary from "./svg/Salary";
import Wallet from "./svg/Wallet";
import Tax from "./svg/Tax";
import Profile from "./svg/Profile";
import SignOut from "./svg/SignOut";

const SideBar = ({ pageId, page }) => {
  return (
    <section className='sidebar-container'>
      <div className='side-bar h-100 '>
        <div className='sidebar-logo w-100 d-flex align-items-center'>
          <Logo />
        </div>

        <DashBoardLinks
          none='none'
          name='Overview'
          pathLink='overview'
          icon={SVG()}
          id={1}
          data={(data) => {
            pageId(data);
          }}
          page={page}
        />
        <DashBoardLinks
          heading='EMPLOYEES'
          name='Add new employees'
          pathLink='add/employee'
          second='View employees'
          icon={EmployeeIcon()}
          id={2}
          data={(data) => {
            pageId(data);
          }}
          page={page}
        />
        <DashBoardLinks
          none='none'
          name='View employees'
          pathLink='view/employees'
          icon={EmployeeIcon()}
          id={3}
          data={(data) => {
            pageId(data);
          }}
          page={page}
        />
        <DashBoardLinks
          heading='SALARY'
          id={4}
          name='View salary History'
          pathLink='view/salary/history'
          second='Pay employees salaries'
          icon={Salary()}
          data={(data) => {
            pageId(data);
          }}
          page={page}
        />
        <DashBoardLinks
          none='none'
          id={5}
          name='Pay employees salaries'
          pathLink='pay/employees'
          icon={Salary()}
          data={(data) => {
            pageId(data);
          }}
          page={page}
        />
        <DashBoardLinks
          heading='ACCOUNT'
          name='Top up company wallet'
          second='View wallet History'
          pathLink='top/up'
          icon={Wallet()}
          id={6}
          data={(data) => {
            pageId(data);
          }}
          page={page}
        />
        <DashBoardLinks
          none='none'
          name='View wallet History'
          icon={Wallet()}
          pathLink='view/wallet/history'
          id={7}
          data={(data) => {
            pageId(data);
          }}
          page={page}
        />
        <DashBoardLinks
          heading='TAXATION'
          name='
          View tax History'
          second='
          Form H1'
          pathLink='view/tax/history'
          icon={Tax()}
          id={8}
          data={(data) => {
            pageId(data);
          }}
          page={page}
        />
        <DashBoardLinks
          none='none'
          pathLink='/table'
          name='
          Form H1'
          icon={Tax()}
          id={9}
          data={(data) => {
            pageId(data);
          }}
          page={page}
        />

        <DashBoardLinks
          none='none'
          name='Profile'
          pathLink='profile'
          icon={Profile()}
          id={10}
          data={(data) => {
            pageId(data);
          }}
          page={page}
        />

        <DashBoardLinks
          none='none'
          name='sign-out'
          pathLink='sign-out'
          icon={SignOut()}
          id={11}
          data={(data) => {
            pageId(data);
          }}
          page={page}
        />
      </div>
    </section>
  );
};

export default SideBar;
