import React, { useCallback, useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import Datatable from "./Datatable";
import { FetchSalaryHistory } from "../../Actions";
import VerificationModal from "./VerificationModal";
import { Badge } from "react-bootstrap";

const initial = {
  pending: true,
  networkError: "",
  salary: [],
  modal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST":
      return { ...state, pending: true };
    case "REQUEST_RESPONSE":
      return { ...state, pending: false, salary: action };
    case "NETWORK_ERROR":
      return { ...state, pending: false, networkError: action, modal: true };
    case "CLOSE_MODAL":
      return { ...state, pending: false, modal: false };
    default:
      break;
  }
};

const ViewSalaryHisory = ({
  FetchSalaryHistory,
  companySalary,
  companySalaryErr,
}) => {
  const [{ token, email }] = useState(() => {
    return {
      token: localStorage.getItem("aminien_token"),
      email: localStorage.getItem("aminien_email"),
    };
  });

  // const [pending, setPending] = useState(false);
  // const [salary, setSalaryData] = useState([]);
  const [state, dispatch] = useReducer(reducer, initial);

  const FetchedData = useCallback(() => {
    FetchSalaryHistory(email, token);
  }, [FetchSalaryHistory, email, token]);

  useEffect(() => {
    if (!email && !token) {
      // show the modal of session expire
    }
    FetchedData();
  }, [FetchedData, email, token]);

  useEffect(() => {
    // dispatch({ type: "REQUEST", pending: true });
    if (!companySalary) {
      return null;
    } else {
      const { success } = companySalary;
      dispatch({ type: "REQUEST_RESPONSE", salary: success, pending: false });
    }
  }, [companySalary]);

  // EFFECT FOR NETWORK ERROR

  useEffect(() => {
    if (!companySalaryErr) {
      return null;
    } else {
      dispatch({
        type: "NETWORK_ERROR",
        networkError: companySalaryErr.message,
        pending: false,
      });
    }
  }, [companySalaryErr]);

  const closeModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
      modal: false,
      pending: false,
    });
    // navigate("otp/email-confirmation");
  };

  function Badges({ row }) {
    var bg = "";
    function check() {
      if (row === "pending") {
        return (bg = "warning");
      } else if (row === "decline") {
        return (bg = "danger");
      } else {
        return (bg = "success");
      }
    }

    return (
      <Badge className='py-2' bg={check()}>
        {row}
      </Badge>
    );
  }

  const heading = [
    { name: "DATE", selector: (row) => row.date },
    { name: "FIRST NAME", selector: (row) => row.employeeFirstname },
    { name: "LAST NAME", selector: (row) => row.employeeLastname },
    { name: "EMAIL", selector: (row) => row.email },
    { name: "ACCOUNT NAME", selector: (row) => row.accountName },
    { name: "ACCOUNT NUMBER", selector: (row) => row.accountNumber },
    {
      name: "TAX DEDUCTED",
      selector: (row) =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NGN",
        }).format(row.employeeTax),
    },
    {
      name: "SALARY PAID",
      selector: (row) =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NGN",
        }).format(row.employeeSalary),
    },
    // { name: "DAY", selector: (row) => row.day },
    // { name: "MONTH", selector: (row) => row.month },
    // { name: "YEAR", selector: (row) => row.year },
    { name: "TRANSACTION ID", selector: (row) => row.transactionId },
    {
      name: "TRANSACTION STATUS",
      selector: (row) => <Badges row={row.transactionStatus} />,
    },
  ];
  return (
    <div className=''>
      <div>
        <h4 className='entire-page-headers'>SALARY HISTORY</h4>
      </div>
      <Datatable
        columns={heading}
        data={state.salary.salary}
        striped
        progressPending={state.pending}
        noDataComponent={() => {
          return "Show error";
        }}
      />
      {/* {state.modal && (
        <VerificationModal
          message={`oops! Something Went Wrong`}
          close={closeModal}
        />
      )} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    companySalary: state.DashboardReducer.companySalary.data,
    companySalaryErr: state.DashboardReducer.companySalaryErr,
  };
};
export default connect(mapStateToProps, { FetchSalaryHistory })(
  ViewSalaryHisory
);
