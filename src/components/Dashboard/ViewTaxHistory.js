import React from "react";
import Datatable from "./Datatable";
import { taxData } from "./utils/data";

const ViewSalaryHistory = () => {
  // useMemo(() => {}, []);

  const heading = [
    { name: "TRANSACTION REF", selector: (row) => row.transactionRef },
    { name: "GOVERNMENT PAID", selector: (row) => row.governmentPaid },
    { name: "TOTAL AMOUNT", selector: (row) => row.amount },
    { name: "PAYMENT DATE", selector: (row) => row.paymentDate },
    { name: "NO OF EMPLOYEES", selector: (row) => row.employee },
    { name: "PAYMENT FOR", selector: (row) => row.month },
    { name: "FORM H1", selector: (row) => row.form },
  ];

  return (
    <div>
      <div>
        <h4 className='entire-page-headers'>TAX HISTORY</h4>
      </div>
      <Datatable columns={heading} data={taxData} />
      {/* <DashboardTable heading={heading} tableData={tableData} display='flex' /> */}
    </div>
  );
};

export default ViewSalaryHistory;
