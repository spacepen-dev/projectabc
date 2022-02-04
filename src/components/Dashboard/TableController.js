// import React from "react";
// import { Pagination, Form, FormControl, Button, Table } from "react-bootstrap";
// import { useTable, usePagination } from "react-table";

// const TableController = ({ data }) => {
//   const [skipPageReset, setSkipPageReset] = React.useState(false);
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "First Name",
//         accessor: "firstName",
//       },
//       {
//         Header: "Last Name",
//         accessor: "lastName",
//       },
//       {
//         Header: "Age",
//         accessor: "age",
//       },
//       {
//         Header: "Visits",
//         accessor: "visits",
//       },
//       {
//         Header: "Status",
//         accessor: "status",
//       },
//       {
//         Header: "Profile Progress",
//         accessor: "progress",
//       },
//     ],
//     []
//   );
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page,
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     // Get the state from the instance
//     state: { pageIndex, pageSize },
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 }, // Pass our hoisted table state
//       manualPagination: true, // Tell the usePagination
//       // hook that we'll handle our own data fetching
//       // This means we'll also have to provide our own
//       // pageCount.
//       // pageCount: controlledPageCount,
//     },
//     usePagination
//   );

//   const updateMyData = (rowIndex, columnId, value) => {
//     // We also turn on the flag to not reset the page
//     setSkipPageReset(true);
//     // setData((old) =>
//     //   old.map((row, index) => {
//     //     if (index === rowIndex) {
//     //       return {
//     //         ...old[rowIndex],
//     //         [columnId]: value,
//     //       };
//     //     }
//     //     return row;
//     //   })
//     // );
//   };

//   return (
//     <React.Fragment>
//       <Table
//         className='hover table table-borderless'
//         responsive='sm'
//         style={{ height: "200px" }}>
//         <thead className=''>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <td
//                   {...(column.id === "selection"
//                     ? column.getHeaderProps()
//                     : column.getHeaderProps(column.getSortByToggleProps()))}>
//                   {column.render("Header")}
//                   {/* {column.id !== "selection" ? (
//                     <TableSortLabel
//                       active={column.isSorted}
//                       // react-table has a unsorted state which is not treated here
//                       direction={column.isSortedDesc ? "desc" : "asc"}
//                     />
//                   ) : null} */}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {/* {tablePagination(searchTable(value)).map((data, index) => {
//             let values = Object.values(data);
//             return (
//               <tr key={data.id} id={index} onClick={(e) => getRowData(e, data)}>
//                 {values.map((cur, index) => {
//                   return <td key={index}>{cur}</td>;
//                 })}
//               </tr>
//             );
//           })} */}
//         </tbody>
//         {/* {paginationElem(searchTable(value))}
//          */}
//       </Table>
//     </React.Fragment>
//   );
// };

// export default TableController;

// /**
//  * const App = () => {
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "First Name",
//         accessor: "firstName"
//       },
//       {
//         Header: "Last Name",
//         accessor: "lastName"
//       },
//       {
//         Header: "Age",
//         accessor: "age"
//       },
//       {
//         Header: "Visits",
//         accessor: "visits"
//       },
//       {
//         Header: "Status",
//         accessor: "status"
//       },
//       {
//         Header: "Profile Progress",
//         accessor: "progress"
//       }
//     ],
//     []
//   );

//   const [data, setData] = React.useState(React.useMemo(() => makeData(20), []));
//   const [skipPageReset, setSkipPageReset] = React.useState(false);

//   // We need to keep the table from resetting the pageIndex when we
//   // Update data. So we can keep track of that flag with a ref.

//   // When our cell renderer calls updateMyData, we'll use
//   // the rowIndex, columnId and new value to update the
//   // original data
//   const updateMyData = (rowIndex, columnId, value) => {
//     // We also turn on the flag to not reset the page
//     setSkipPageReset(true);
//     setData((old) =>
//       old.map((row, index) => {
//         if (index === rowIndex) {
//           return {
//             ...old[rowIndex],
//             [columnId]: value
//           };
//         }
//         return row;
//       })
//     );
//   };

//  */
