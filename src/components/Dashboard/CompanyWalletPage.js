import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { AccountTopUp, VerifyTopUp } from "../../Actions";
import { usePaystackPayment } from "react-paystack";

import EyeSVG from "./svg/Eyes";
import EyesSlash from "./svg/EyesSlash";
import Input from "../Registration/Input";
import LoaderButton from "../LoaderButton";
import NetWorkErrors from "../NetWorkErrors";
import TableSpinner from "./TableSpinner";
import SuccessRequestModal from "./SuccessRequestModal";

const AmountModal = ({
  closeModal,
  AccountTopUp,
  request,
  requestFalse,
  email,
  token,
  active,
  onPaystackPay,
  getAmount,
}) => {
  const [amount, setAmount] = useState("");
  const [validation, setValidation] = useState("");

  const onAmountHandle = (e) => {
    setAmount(e.target.value);
    // setAmount(
    //   new Intl.NumberFormat("en-US", {
    //     style: "currency",
    //     currency: "NGN",
    //   }).format(e.target.value)
    // );
  };

  // SUBMIT AMOUNT OF MONEY TO PAYSTACK
  const submitAmount = (e) => {
    e.preventDefault();
    if (amount === "") {
      setValidation("Amount is required!");
    } else {
      // SUBMIT AMOUNT TO DATA BASE
      requestFalse();
      AccountTopUp(email, token, amount);
      getAmount(amount);
    }
  };

  return ReactDOM.createPortal(
    <div className='modaal'>
      <div
        className='Overlay show d-flex align-items-center justify-content-center rounded'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div className='col-6 col-md-4'>
          {active ? (
            <div className='modal-content d-flex  flex-column'>
              <div className='modal-header w-100'>
                <h5 className=' fs-6' id='exampleModalLabel'>
                  Top up Account with Paystack!
                </h5>
              </div>
              <div className='col-12  col-md-11 mx-auto pt-2 d-flex justify-content-end align-items-center'>
                <Button
                  type='button'
                  className='button'
                  onClick={onPaystackPay}>
                  Top up
                </Button>
              </div>
            </div>
          ) : (
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Enter Amount
                </h5>
              </div>
              <div className='modal-body'>
                <Input
                  type='text'
                  handleChange={onAmountHandle}
                  err={validation}
                  onFocus={() => setValidation("")}
                />
              </div>
              <Form
                className='button-container double-btns d-flex justify-content-end align-items-end'
                onSubmit={submitAmount}>
                <Button
                  type='button'
                  className='button ms-auto'
                  onClick={closeModal}>
                  CLOSE
                </Button>

                <LoaderButton
                  btnName='SUBMIT'
                  btnStyle='ms-3 me-2'
                  request={request}
                />
              </Form>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

const CompanyWalletPage = ({
  AccountTopUp,
  paymentResponse,
  paymentErrRes,
  VerifyTopUp,
  verifyErrRes,
  verifyResponse,
}) => {
  const [hideAmount, setHideAmount] = useState(false);
  const [modal, setModal] = useState(false);
  const [errorMessage, setMessage] = useState("");
  const [serverError, setError] = useState("");
  const [showModal, setShow] = useState(false);
  const [request, setRequest] = useState(false);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [transaction, setTransaction] = useState({});
  const [active, setActive] = useState(false);
  const [newAmount, setNewAmount] = useState("");
  const [showLoader, setLoader] = useState(false);
  const [success, setSuccess] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [onSuccessRes, setSuccessRes] = useState(null);

  const showModalPage = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
    setRequest(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("email")) {
      // SESSION TIME OUT MODAL
      console.log("no email");
    } else {
      setEmail(localStorage.getItem("email"));
    }
  }, []);

  // FETCH  TOKEN FROM CACHE
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      // SESSION TIME OUT MODAL
      console.log("no token");
    } else {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const transactionDetails = {
    publicKey: "pk_test_9bfeb3eccb29d1375f5bb064cef581b6dffaa2c7",
    text: "Top up account",
  };

  // RESPONSE FROM THE PAYMENT
  useEffect(() => {
    if (!paymentResponse) {
      // RETURN NULL
      return null;
    } else {
      // REMOVE LOADER
      setRequest(false);

      const { transactionId, error, success, companyEmail, companyName } =
        paymentResponse.data;
      if (error) {
        setShow(true);
        setError(error);
        const removeTimeOut = setTimeout(() => {
          setShow(false);
          closeModal();
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      } else if (success) {
        // MAKE REQUEST TO PAYSTACK API
        setActive(true);
        setTransaction({
          ...transactionDetails,
          email: localStorage.getItem("email"),
          reference: transactionId,
          amount: newAmount * 100,
        });
        // (email, amount, txRef)
        // console.log(transactionId);
      }

      /**
       *
       *
       */
    }
  }, [paymentResponse]);
  // ON PAYSTACK SUCCESS RESPONSE

  // ON PAYSTACK CLOSE
  const onClose = () => {
    setError("Account top up cancelled!");
    setShow(true);
    setTimeout(() => {
      setShow(false);
      setModal(false);
      setActive(false);
    }, 4000);
  };

  // PAYSTACK INITIALIZATION
  const initializePayment = usePaystackPayment(transaction);
  // console.log();
  // PayStackApi(companyEmail, amount, transactionId);

  const onPaystackPay = () => {
    initializePayment(onSuccess, onClose);
    setActive(false);
    // closeModal();
  };

  const onSuccess = (data) => {
    // console.log(data);
    // console.log(initializePayment());
    // console.log("Thanks for doing business with us! Come back soon!!");
    // setSuccessRes(data.reference);
    // console.log(data);

    // SEND DATA TO ACTION CREATOR AND THEN TO THE DATABASE
    // const { txRef } = data.reference;
    // console.log(txRef);

    setActive(false);
    setModal(false);

    setTimeout(() => {
      setLoader(true);
      VerifyTopUp(data.reference, token);
    }, 3000);
  };

  // EFFECT FOR NETWORK ERROR
  useEffect(() => {
    if (!paymentErrRes) {
      return null;
    } else {
      setRequest(false);
      setShow(true);
      setMessage(paymentErrRes.message);
      // closeModal();
      const removeTimeOut = setTimeout(() => {
        setShow(false);
      }, 4000);
      return () => {
        clearTimeout(removeTimeOut);
      };
    }
  }, [paymentErrRes]);

  // EFFECT VERIFY ACCOUNT TOP NETWORK ERROR
  useEffect(() => {
    if (!verifyErrRes) {
      return null;
    } else {
      setLoader(false);
      setShow(true);
      setMessage(verifyErrRes.message);
      // closeModal();
      const removeTimeOut = setTimeout(() => {
        setShow(false);
      }, 4000);
      return () => {
        clearTimeout(removeTimeOut);
      };
    }
  }, [verifyErrRes]);

  // RESPONSE FROM VERIFY PAYMENT
  useEffect(() => {
    if (!verifyResponse) {
      // RETURN NULL
    } else {
      // REMOVE LOADER
      setLoader(false);
      const { error, success } = verifyResponse.data;
      if (error) {
        setShow(true);
        setError(error);
        const removeTimeOut = setTimeout(() => {
          setShow(false);
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      } else if (success) {
        setSuccess(success);
        setSuccessModal(true);
        const removeTimeOut = setTimeout(() => {
          setSuccessModal(false);
          setSuccess("");
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      }
    }
  }, [verifyResponse]);

  return (
    <section className='container mt-5 d-flex flex-column align-items-center justify-content-evenly '>
      <div className='col-8 '>
        <div className='container-page col-8 shadow-lg'>
          <span>
            {console.log(onSuccessRes)}
            <p className='TB'>TOTAL BALANCE</p>
            <div className='money'>
              <p className='amt'>
                {hideAmount
                  ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "NGN",
                    }).format(50000000)
                  : "*********"}
              </p>
            </div>
          </span>
          <div
            className='circle'
            style={{ cursor: "pointer" }}
            onClick={() => setHideAmount(!hideAmount)}>
            {hideAmount ? EyeSVG() : EyesSlash()}
          </div>
        </div>
      </div>

      <div className='fund-sym col-8'>
        <p className='fund'>Fund company wallet</p>
      </div>
      <div className='d-flex justify-content-between col-8 '>
        <div className='container-2 shadow-lg'>
          <div className='circle-2'></div>
          <p className='choice'>By Bank transfer</p>
        </div>
        <div className='container-2 shadow-lg' onClick={showModalPage}>
          <div className='circle-2'></div>
          <p className='choice'>By Credit/Debit Card</p>
        </div>
      </div>
      {modal && (
        <AmountModal
          closeModal={closeModal}
          AccountTopUp={AccountTopUp}
          paymentResponse={paymentResponse}
          paymentErrRes={paymentErrRes}
          request={request}
          email={email}
          token={token}
          active={active}
          requestFalse={() => setRequest(true)}
          onPaystackPay={onPaystackPay}
          getAmount={(money) => setNewAmount(money)}
        />
      )}
      {showModal && (
        <NetWorkErrors
          errMessage={errorMessage}
          serverErr={serverError}
          removeLoader={() => setRequest(false)}
        />
      )}
      {showLoader && <TableSpinner />}
      {successModal && <SuccessRequestModal message={success} />}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    paymentResponse: state.DashboardReducer.accountTopUp,
    paymentErrRes: state.DashboardReducer.accountTopUpErr,
    verifyResponse: state.DashboardReducer.verifyTopUp,
    verifyErrRes: state.DashboardReducer.verifyTopUpErr,
  };
};
export default connect(mapStateToProps, { AccountTopUp, VerifyTopUp })(
  CompanyWalletPage
);
