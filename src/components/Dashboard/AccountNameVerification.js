import React, { useEffect, useReducer } from "react";
import { Button, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { VerifyAccountName } from "../../Actions";

const Initial = {
  request: false,
  success: [],
  error: "",
  networkError: "",
};

const reducer = (action, state) => {
  switch (action.payload) {
    case "REQUEST":
      return { ...state, request: action.payload };
    case "SUCCESS_RESPONSE":
      return { ...state, request: action.payload, success: action.payload };
    case "ERROR_RESPONSE":
      return { ...state, request: action.payload, error: action.payload };
    case "NETWORK_ERROR":
      return { ...state, request: action.payload, network: action.payload };
    default:
      return state;
  }
};

const AccountNameVerification = ({
	VerifyAccountName,
	accountNameValue,
	accountNameErr,
	data: { businessToken, bankcode, accountNumber, userToken },
}) => {
	const [state, dispatch] = useReducer(reducer, Initial);

	useEffect(() => {
		if (!accountNameValue) return;
		else {
			const { success, error } = accountNameValue;
			if (error) {
				dispatch({ type: "ERROR_RESPONSE", request: false, error: error });
			} else {
				dispatch({
					type: "SUCCESS_RESPONSE",
					request: false,
					success: success,
				});
			}
		}
	}, [accountNameValue]);

	useEffect(() => {
		if (!accountNameErr) return;
		else {
			dispatch({
				type: "NETWORK_ERROR",
				request: false,
				network: accountNameErr.message,
			});
		}
	}, [accountNameErr]);

	function onClick() {
		VerifyAccountName(businessToken, bankcode, accountNumber, userToken);
		dispatch({ type: "REQUEST", request: true });
	}
	return (
		<>
			<Button
				type="button"
				className="w-25 py-2 ms-2"
				style={{ fontSize: "13px" }}
				// disabled={request ? true : false}
				onClick={onClick}>
				{state.request ? (
					<Spinner as="span" animation="border" size="sm" />
				) : (
					" Get account name"
				)}
			</Button>
			{/* {state.success && <input type='text' value={!state.success ? employeeData.employeeAccountName:state.success} readOnly />} */}

			{/* {state.error && <span>{state.error}</span>} */}
		</>
	);
};

const mapStateToProps = (state) => {
  return {
    accountNameValue: state.DashboardReducer.verifyNumber.data,
    accountNameErr: state.DashboardReducer.verifyNumberErr,
  };
};

export default connect(mapStateToProps, { VerifyAccountName })(
  AccountNameVerification
);
