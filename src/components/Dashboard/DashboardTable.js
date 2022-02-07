import React, { useEffect, useState, useRef } from "react";
import { Table } from "react-bootstrap";
import ViewEmployeeModal from "./ViewEmployeeModal";
import { Pagination, Form, FormControl, Button } from "react-bootstrap";

const DashboardTable = ({ heading, tableData, employeeData, display }) => {
  const [active, setActive] = useState(false);
  const [initValue, setInitValue] = useState(employeeData);
  const [data, setData] = useState([]);
  const [tableHead, setHead] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState("");
  let input = useRef();

  let dataPerPage = 12;
  let numOfPages = 0;
  let items = [];

  useEffect(() => {
    setHead(heading);
    setData(tableData);
  }, [heading, tableData]);

  function tablePagination(data) {
    const start = (currentPage - 1) * dataPerPage;
    const stop = start + dataPerPage;

    let pagination = data.slice(start, stop);
    return pagination;
  }

  function searchTable(val) {
    let filterData = data.filter((list) => {
      let values = Object.values(list);
      const searchString = String(values).includes(val.toUpperCase());

      if (val) {
        if (!searchString) {
          // return "data";
        }
        return searchString;
      } else if (!val) {
        return data;
      }
    });

    return filterData;
  }

  function paginationElem(data) {
    numOfPages = Math.ceil(data.length / dataPerPage);
    for (let page = 1; page <= numOfPages; page++) {
      if (numOfPages === 1) {
        return items;
      } else {
        items.push(
             <Pagination.Item
            className="fs-3"
            key={page}

            active={page === currentPage}
            onClick={(e) => {
              setCurrentPage(Number(e.target.textContent));
            }}
          >
            {page}
          </Pagination.Item>
        );
      }
    }
  }

  function nextPage() {
    if (!currentPage >= numOfPages) {
      setCurrentPage(currentPage + 1);
    }
    setCurrentPage(numOfPages);
  }

  function prevPage() {
    if (!currentPage <= 0) {
      setCurrentPage((currentPage -= 1));
    }
    setCurrentPage(1);
  }

  const getRowData = (e, data) => {
    if (
      e.target.id === "circle-svg-container" ||
      e.target.id === "circle-svg"
    ) {
      setActive(true);
      const id_data = tableData.filter((cur) => {
        if (cur.id === data.id) {
          setInitValue(cur);
          return employeeData(cur);
        }
      });
      return id_data;
    }
  };

  return (
    <>
      <Form
        className={`d-${display} py-2 table-form`}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"

          ref={input}
          onChange={() => setValue(input.current.value)}
        />

      </Form>
      <Table
        className="hover table table-borderless"
        responsive="sm"
        style={{ height: "200px" }}
      >
        <thead className="">
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
          {tablePagination(searchTable(value)).map((data, index) => {
            let values = Object.values(data);
            return (
              <tr key={data.id} id= {index} onClick={(e) => getRowData(e, data)}>
                {values.map((cur, index) => {
                  return <td key={index}>{cur}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
        {paginationElem(searchTable(value))}
      </Table>
      <div
        className={` py-1 d-${display} justify-content-end align-items-centerqqqq5`}>
        <Pagination className='me-2' size='sm'>
          {items}
        </Pagination>
        className={` py-2 d-${display} justify-content-center align-items-center`}
      >
        <Pagination>{items}</Pagination>

      </div>

      {!active ? (
        ""
      ) : (
        <ViewEmployeeModal
          modal={() => setActive(false)}
          initialValue={initValue}
        />
      )}
    </>
  );
};
export default DashboardTable;
