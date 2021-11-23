import React, { useState } from "react";
import DashboardTable from "./DashboardTable";
const ViewEmployee = () => {
  const displaySVG = () => {
    return (
      <div
        className='h-100 w-100 d-flex align-items-center justify-content-center '
        id='circle-svg-container'
        style={{ cursor: "pointer" }}>
        <svg
          id='circle-svg'
          width='23'
          height='5'
          viewBox='0 0 23 5'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <circle cx='2.5' cy='2.5' r='2.5' fill='#659CF0' />
          <circle cx='11.5' cy='2.5' r='2.5' fill='#659CF0' />
          <circle cx='20.5' cy='2.5' r='2.5' fill='#659CF0' />
        </svg>
      </div>
    );
  };
  const heading = [
    {
      serialNumber: "S/N",
      firstName: "First Name",
      lastName: "Last Name",
      nin: "National Identity Number",
      tin: "TIN",
      roles: "Roles",
      annualSalary: "Annual Gross Salary",
      month: "Monthly Gross Salary",
      relives: "Relives",
      empty: "",
    },
  ];

  const data = [
    {
      id: 1,

      firstName: "EMMANUEL",
      lastName: "DANIYAN",
      role: "CEO",
      nin: 1234567,
      tin: 1234567,
      annual: 20000,
      month: 10000,
      relives: "",
      funt: displaySVG(),
    },
    {
      id: 2,

      firstName: "EMMANUEL",
      lastName: "DANIYAN",
      role: "CEO",
      nin: 1234567,
      tin: 1234567,
      annual: 20000,
      month: 10000,
      relives: "",
      funt: displaySVG(),
    },
    {
      id: 3,

      firstName: "EMMANUEL",
      lastName: "DANIYAN",
      role: "CEO",
      nin: 1234567,
      tin: 1234567,
      annual: 20000,
      month: 10000,
      relives: "",
      funt: displaySVG(),
    },
    {
      id: 4,

      firstName: "EMMANUEL",
      lastName: "DANIYAN",
      role: "CEO",
      nin: 1234567,
      tin: 1234567,
      annual: 20000,
      month: 10000,
      relives: "",
      funt: displaySVG(),
    },
    {
      id: 5,

      firstName: "EMMANUEL",
      lastName: "DANIYAN",
      role: "CEO",
      nin: 1234567,
      tin: 1234567,
      annual: 20000,
      month: 10000,
      relives: "",
      funt: displaySVG(),
    },
    {
      id: 6,

      firstName: "EMMANUEL",
      lastName: "DANIYAN",
      role: "CEO",
      nin: 1234567,
      tin: 1234567,
      annual: 20000,
      month: 10000,
      relives: "",
      funt: displaySVG(),
    },
    {
      id: 7,
      lastName: "DANIYAN",
      firstName: "EMMANUEL",
      role: "CEO",
      nin: 1234567,
      tin: 1234567,
      annual: 20000,
      month: 10000,
      relives: "",
      funt: displaySVG(),
    },
    {
      id: 8,
      lastName: "DANIYAN",
      firstName: "EMMANUEL",
      role: "CEO",
      nin: 1234567,
      tin: 1234567,
      annual: 20000,
      month: 10000,
      relives: "",
      funt: displaySVG(),
    },
  ];

  const employeeData = (data) => {
    console.log(data);
  };
  return (
    <div className=' mt-5'>
      <DashboardTable
        heading={heading}
        tableData={data}
        employeeData={employeeData}
      />
    </div>
  );
};

export default ViewEmployee;
