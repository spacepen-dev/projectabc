import React from "react";
import Datatable from "./Datatable";
import { SalaryData } from "./utils/data";

const ViewSalaryHisory = () => {
  const heading = [
    { name: "PAYMENT DATE", selector: (row) => row.paymentDate },
    { name: "PAYMENT REF", selector: (row) => row.paymentRef },
    { name: "NO OF EMPLOYEES", selector: (row) => row.employee },
    { name: "YEAR", selector: (row) => row.years },
    { name: "MONTH", selector: (row) => row.month },
    { name: "TOTAL TAX", selector: (row) => row.tax },
    { name: "TOTAL AMOUNT", selector: (row) => row.amount },
  ];
  return (
    <div className=''>
      <Datatable columns={heading} data={SalaryData} />
    </div>
  );
};

export default ViewSalaryHisory;
