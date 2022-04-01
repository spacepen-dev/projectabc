import React, { useState, useMemo, useEffect } from "react";
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
import TableSpinner from "./TableSpinner";
import { FetchCompanyEmployee } from "../../Actions";

const ViewEmployee = ({ FetchCompanyEmployee }) => {
  const [token, setToken] = useState("");

  // FETCH  TOKEN FROM CACHE
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      // SESSION TIME OUT MODAL
      console.log("no token");
    } else {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  // FETCH ALL COMPANY EMPLOYEE DATA
  useEffect(() => {
    FetchCompanyEmployee("Spacepen", token);
  }, []);

  const displaySVG = () => {
    return (
      <div
        className='h-100 w-100 d-flex align-items-center justify-content-center '
        id='circle-svg-container'
        style={{ cursor: "pointer" }}>
        <svg
          id='circle-svg'
          width='15'
          height='15'
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

  /**
 * 
 * const handleButtonClick = () => {
14		
15		console.log('clicked');
16	};
 * 	{
25				
26				cell: () => <button onClick={handleButtonClick}>Action</button>,
27				ignoreRowClick: true,
28				allowOverflow: true,
29				button: true,
30			},
 */

  const employeeData = (data) => {
    // console.log(data);
  };
  return (
    <div className=' mt-1'>
      <DataTable
        // columns={columns}
        selectableRows
        // data={Data}
        pagination

        // onSelectedRowsChange={checkedEmployeeData}
      />
      {/* <DashboardTable
        heading={heading}
        tableData={data}
        employeeData={employeeData}
        display="flex"
      /> */}
    </div>
  );
};

export default connect(null, { FetchCompanyEmployee })(ViewEmployee);
