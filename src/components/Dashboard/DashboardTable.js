import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ViewEmployeeModal from "./ViewEmployeeModal";

const DashboardTable = ({ heading, tableData, employeeData }) => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState({});
  const [empty, setEmpty] = useState(null);

  useEffect(() => {
    setData({ head: heading, tableData });
  }, [heading, tableData]);

  const getRowData = (e, data) => {
    if (
      e.target.id === "circle-svg-container" ||
      e.target.id === "circle-svg"
    ) {
      setActive(true);
      const id_data = tableData.filter((cur) => {
        if (cur.id === data.id) {
          employeeData(cur);
        }
      });
      return id_data;
    }
  };

  if (!data.head || !data.tableData) {
    return (
      <div>
        hellokndkdl;kldslsdkhflsdkhfaldskfha;lsdkflskdhfl;asdf;adlkalksdhflaksdhflaksdhflksdhflkdshflakdhflksdhlksdhf
      </div>
    );
  }
  return (
    <>
      <Table
        className='hover table table-borderless'
        responsive='sm'
        style={{ height: "200px" }}>
        <thead className=''>
          {data.head.map((cur, index) => {
            console.log(cur);
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
          {data.tableData.map((data, index) => {
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
      {!active ? "" : <ViewEmployeeModal modal={() => setActive(false)} />}
    </>
  );
};
export default DashboardTable;
