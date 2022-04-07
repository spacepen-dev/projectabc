import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const DashboardTable = ({ heading, tableData }) => {
  const [data, setData] = useState([]);
  const [tableHead, setHead] = useState([]);

  useEffect(() => {
    setHead(heading);
    setData(tableData);
  }, [heading, tableData]);

  const limitDataTable = (TransactionData) => {
    let tdata = [];
    for (let i = 0; i < 8; i++) {
      tdata = [...tdata, TransactionData[i]];
    }
    return tdata;
  };

  return (
    <>
      {/* <Table
        className='hover table table-borderless'
        responsive='sm'
        style={{ height: "200px" }}>
        <thead className=''>
          {tableHead.map((cur, index) => {
            let objValues = Object.values(cur);
            return (
              <tr key={index}>
                {objValues.map((cur, index) => {
                  return <th key={index}>{cur}</th>;
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {limitDataTable(data).map((data, index) => {
            // console.log(data);
            let objValues = Object.values(data);
            console.log(objValues);
            return (
              <tr>
                <td key={index}>{objValues[0]}</td>
                <td key={index}>{objValues[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table> */}
    </>
  );
};
export default DashboardTable;

{
  /*
  amount: "200,000"
employee: "50"
month: "December"
paymentDate: "05-09-2022"
paymentRef: "1023498FA"
tax: "100,000"
taxRef: "1023498FA"
years: "2022"
  
  
  
  
  {limitDataTable(data).map((data, index) => {
            let objValues = Object.values(data);
            console.log(objValues);
            return (
              <tr key={data.id} id={index}>
                return <td key={index}>{data}</td>;
              </tr>
            );
          })} */
}
