import React from "react";
import DashboardTable from "./DashboardTable";
const ViewEmployee = () => {
  const displaySVG = () => {
    return (
      <div
        className="h-100 w-100 d-flex align-items-center justify-content-center "
        id="circle-svg-container"
        style={{ cursor: "pointer" }}
      >
        <svg
          id="circle-svg"
          width="15"
          height="15"
          viewBox="0 0 23 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="2.5" r="2.5" fill="#659CF0" />
          <circle cx="11.5" cy="2.5" r="2.5" fill="#659CF0" />
          <circle cx="20.5" cy="2.5" r="2.5" fill="#659CF0" />
        </svg>
      </div>
    );
  };

  const heading = [
    {
      serialNumber: "S/N",
      firstName: "First Name",
      lastName: "Last Name",
      roles: "Roles",
      nin: "National Identity Number",
      email: "Email",
      annualSalary: "Annual Gross Salary",
      month: "Monthly Gross Salary",
      relives: "Relieves",
      empty: "",
    },
  ];

  const data = [
    {
      id: 1,
      firstName: "EMMANUEL",
      LastName: "DANIYAN",
      role: "CEO",
      nin: 1234567,
      email: "spacepen@gmail.com",
      annual: 20000,
      month: 10000,
      relieves: 10000,
      funt: displaySVG(),
    },
    {
      id: 2,

      firstName: "EMMANUEL",
      LastName: "DANIYAN",
      role: "CEO",
      nin: 1234567,
      email: "spacepen@gmail.com",
      annual: 20000,
      month: 10000,
      relieves: 40000,
      funt: displaySVG(),
    },
    {
      id: 3,

      firstName: "EMMANUEL",
      LastName: "DANIYAN",
      role: "CEO",
      nin: 1234567,
      email: "spacepen@gmail.com",
      annual: 20000,
      month: 10000,
      relieves: 40000,
      funt: displaySVG(),
    },
    {
      id: 4,

      firstName: "EMMANUEL",
      LastName: "DANIYAN",
      role: "CEO",
      nin: 1234567,
      email: "spacepen@gmail.com",
      annual: 20000,
      month: 10000,
      relieves: 40000,
      funt: displaySVG(),
    },
    {
      id: 5,

      firstName: "EMMANUEL",
      LastName: "DANIYAN",
      role: "CEO",
      nin: 1234567,
      email: "spacepen@gmail.com",
      annual: 20000,
      month: 10000,
      relieves: 40000,
      funt: displaySVG(),
    },
    {
      id: 6,

      firstName: "EMMANUEL",
      LastName: "DANIYAN",
      role: "CEO",
      nin: 1234567,
      email: "spacepen@gmail.com",
      annual: 20000,
      month: 10000,
      relieves: 40000,
      funt: displaySVG(),
    },
    {
      id: 7,
      LastName: "DANIYAN",
      firstName: "EMMANUEL",
      role: "CEO",
      nin: 1234567,
      email: "spacepen@gmail.com",
      annual: 20000,
      month: 10000,
      relieves: 40000,
      funt: displaySVG(),
    },
    {
      id: 8,
      LastName: "DANIYAN",
      firstName: "EMMANUEL",
      role: "CEO",
      nin: 1234567,
      email: "spacepen@gmail.com",
      annual: 20000,
      month: 10000,
      relieves: 40000,
      funt: displaySVG(),
    },
    {
      id: 9,
      LastName: "PROSPER",
      firstName: "PMAN",
      role: "WEB DEVELOPER",
      nin: 987654,
      email: "prosperpman@gmail.com",
      annual: "50000",
      month: "20000",
      relieves: 40000,
      funt: displaySVG(),
    },
    {
      id: 10,
      LastName: "DANIYAN",
      firstName: "EMMANUEL",
      role: "CEO",
      nin: 1234567,
      email: "spacepen@gmail.com",
      annual: 20000,
      month: 10000,
      relieves: 40000,
      funt: displaySVG(),
    },
    {
      id: 11,
      LastName: "DANIYAN",
      firstName: "EMMANUEL",
      role: "CEO",
      nin: 1234567,
      email: "spacepen@gmail.com",
      annual: 20000,
      month: 10000,
      relieves: 40000,
      funt: displaySVG(),
    },
    {
      id: 12,
      LastName: "DANIYAN",
      firstName: "EMMANUEL",
      role: "CEO",
      nin: 1234567,
      email: "spacepen@gmail.com",
      annual: 20000,
      month: 10000,
      relieves: 40000,
      funt: displaySVG(),
    },
    {
      id: 13,
      LastName: "DANIYAN",
      firstName: "EMMANUEL",
      role: "CEO",
      nin: 1234567,
      email: "spacepen@gmail.com",
      annual: 20000,
      month: 10000,
      relieves: 40000,
      funt: displaySVG(),
    },
    {
      id: 14,
      LastName: "DANIYAN",
      firstName: "EMMANUEL",
      role: "CEO",
      nin: 1234567,
      email: "spacepen@gmail.com",
      annual: 20000,
      month: 10000,
      relieves: 40000,
      funt: displaySVG(),
    },
  ];

  const employeeData = (data) => {
    // console.log(data);
  };
  return (
    <div className=' mt-1'>

      <DashboardTable
        heading={heading}
        tableData={data}
        employeeData={employeeData}
        display="flex"
      />
    </div>
  );
};

export default ViewEmployee;
