import React, { useState } from "react";
import { Table } from "react-bootstrap";

const DashboardTable = ({ heading, tableData, rowFunction }) => {
  const [selectedData, setSelectedData] = useState({});
  const getRowData = (e, data) => {
    if (
      e.target.id === "circle-svg-container" ||
      e.target.id === "circle-svg"
    ) {
      const idData = tableData.filter((cur) => {
        if (cur.id === data.id) {
          setSelectedData(cur);
        }
      });
      return idData;
    }
  };

  if (heading === undefined || tableData === undefined) {
    return null;
  }
  return (
    <Table
      className='hover table table-borderless'
      responsive='sm'
      style={{ height: "200px" }}>
      <thead className=''>
        {heading.map((cur, index) => {
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
        {tableData.map((data, index) => {
          let values = Object.values(data);
          return (
            <tr key={data.id} id={index} onClick={(e) => getRowData(e, data)}>
              {values.map((cur, index) => {
                return <td key={index}>{cur}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default DashboardTable;
