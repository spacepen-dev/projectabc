import React, { useEffect } from "react";
import { connect } from "react-redux";
import useHandleResponse from "../../../hooks/useHandleResponse";
import DashboardTable from "../DashboardTable";
import { FetchTaxHistory } from "../../../Actions";
// import useBusinessToken from "../../../hooks/useBusinessToken";
// import useToken from "../../../hooks/useToken";
import { value } from "../overview/Overview";

const TaxHistory = ({ FetchTaxHistory, taxHistory }) => {
  const [Data] = useHandleResponse(taxHistory);
  // const { bizTok } = useBusinessToken();
  // const {token} = useToken()


  useEffect(() => {
    FetchTaxHistory(value);
  }, [FetchTaxHistory]);
  
  // const limitDataTable = (TransactionData) => {
  //   let tdata = [];
  //   for (let i = 0; i < 8; i++) {
  //     tdata = [...tdata, TransactionData[i]];
  //   }
  //   return tdata;
  // };

  return (
    <>
      <DashboardTable
        // heading={heading}
        // tableData={limitDataTable(TaxData)}
        display='none'
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    taxHistory: state.FetchTaxHistoryReducer
  }
}

export default connect(mapStateToProps, {FetchTaxHistory})(TaxHistory);
