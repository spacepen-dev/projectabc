import React from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";

import { Button } from "react-bootstrap";

const Datatable = ({ data, columns }) => {
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  // const TextField = styled.input`
  //   height: 32px;
  //   width: 200px;
  //   border-radius: 3px;
  //   border-top-left-radius: 5px;
  //   border-bottom-left-radius: 5px;
  //   border-top-right-radius: 0;
  //   border-bottom-right-radius: 0;
  //   border: 1px solid #e5e5e5;
  //   padding: 0 32px 0 16px;

  //   &:hover {
  //     cursor: pointer;
  //   }
  // `;

  // const ClearButton = styled(Button)`
  //   border-top-left-radius: 0;
  //   border-bottom-left-radius: 0;
  //   border-top-right-radius: 5px;
  //   border-bottom-right-radius: 5px;
  //   height: 34px;
  //   width: 32px;
  //   text-align: center;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // `;

  // const FilterComponent = ({ filterText, onFilter, onClear }) => (
  //   <>
  //     <input
  //       id='search'
  //       type='text'
  //       placeholder='Filter By Name'
  //       aria-label='Search Input'
  //       value={filterText}
  //       onChange={onFilter}
  //     />
  //     <Button type='button' onClick={onClear}>
  //       X
  //     </Button>
  //   </>
  // );

  // const subHeaderComponentMemo = React.useMemo(() => {
  //   const handleClear = () => {
  //     if (filterText) {
  //       setResetPaginationToggle(!resetPaginationToggle);
  //       setFilterText("");
  //     }
  //   };

  //   return (
  //     <FilterComponent
  //       onFilter={(e) => setFilterText(e.target.value)}
  //       onClear={handleClear}
  //       filterText={filterText}
  //     />
  //   );
  // }, [filterText, resetPaginationToggle]);

  return (
    // <DataTable
    // 	title="Contact List"
    // 	columns={columns}
    // 	data={filteredItems}
    // 	pagination
    // 	paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
    // 	subHeader
    // 	subHeaderComponent={subHeaderComponentMemo}
    // 	selectableRows
    // 	persistTableHead
    // />
    <>
      <DataTable
        columns={columns}
        // selectableRows
        data={data}
        pagination
        // paginationResetDefaultPage={resetPaginationToggle}
        // subHeaderComponent={subHeaderComponentMemo}

        // onSelectedRowsChange={onSelect}
      />
    </>
  );
};

export default Datatable;
