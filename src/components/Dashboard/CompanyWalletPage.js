import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { CompanyDetails } from "../../Actions";

import { EyeSVG, EyeSlash } from "./svg/SVG";

const CompanyWalletPage = ({ CompanyDetails, accountDetails }) => {
  const [active, setActive] = useState(false);
  const [{ email, token }] = useState(() => {
    return {
      email: localStorage.getItem("aminien_email"),
      token: localStorage.getItem("aminien_token"),
    };
  });

  const [companyAccountDetails, setAccoutDetails] = useState("");

  useEffect(() => {
    CompanyDetails(email, token);
  }, [CompanyDetails, email, token]);

  useEffect(() => {
    if (!accountDetails) {
      return null;
    } else {
      const { error, success } = accountDetails;
      if (error) {
      } else {
        const { CompanyName, accountNumber, balance, bankName } = success;
        setAccoutDetails(() => {
          return {
            accountName: CompanyName,
            accountNumber: accountNumber,
            companyBalance: balance,
            bank: bankName,
          };
        });
      }
    }
  }, [accountDetails]);

  return (
    <Fragment>
      <div>
        <h4 className='entire-page-headers'>COMPANY TOPUP WALLET </h4>
      </div>
      <section className='container mt-5 d-flex flex-column align-items-center justify-content-evenly '>
        <div className='col-8 '>
          <div className='container-page col-8 shadow'>
            <span>
              <p className='TB'>TOTAL BALANCE</p>
              <div className='money'>
                <p className='amt'>
                  {active.hideAmount
                    ? new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "NGN",
                      }).format(companyAccountDetails.companyBalance)
                    : "*********"}
                </p>
              </div>
            </span>
            <div
              className='circle'
              style={{ cursor: "pointer" }}
              onClick={() =>
                setActive((prev) => {
                  return { ...prev, hideAmount: !active.hideAmount };
                })
              }>
              {active.hideAmount ? EyeSlash() : EyeSVG()}
            </div>
          </div>
        </div>
        <div className='fund-sym col-8'>
          <p className='fund'>Fund company wallet</p>
        </div>
        <div className='d-flex justify-content-between col-8 '>
          <div
            className='container-2 shadow'
            onClick={() =>
              setActive((prev) => {
                return { ...prev, modal: true };
              })
            }>
            <div className='circle-2'></div>
            <p className='choice'>By Bank transfer</p>
          </div>
          {/* <div className='container-2 shadow'>
            <div className='circle-2'></div>
            <p className='choice'>By Credit/Debit Card</p>
          </div> */}
        </div>

        {active.modal && (
          <Modal show={true} centered>
            <div className='col-12'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Your Company Account Details
                  </h5>
                </div>
                <div className='modal-body'>
                  {/* <Input
                    type='text'
                    handleChange={this.onAmountHandle}
                    err={this.state.validation}
                    onFocus={() => this.setState({ validation: "" })}
                    readonly
                    value={}
                  /> */}
                  <div className='fund-sym'>
                    <p className='fund'>{companyAccountDetails.accountName}</p>
                    <p className='fund'>{companyAccountDetails.bank}</p>
                    <p className='fund text-dark'>
                      {companyAccountDetails.accountNumber}
                    </p>
                  </div>
                </div>
                <Form
                  className='button-container double-btns d-flex justify-content-end align-items-end'
                  // onSubmit={this.submitAmount}
                >
                  <Button
                    type='button'
                    className='button ms-auto'
                    // disabled={this.state.request}
                    onClick={() =>
                      setActive((prev) => {
                        return { ...prev, modal: false };
                      })
                    }>
                    CLOSE
                  </Button>
                  <Button
                    type='button'
                    className='button mx-2'
                    onClick={() => {
                      navigator.clipboard
                        .writeText(companyAccountDetails.accountNumber)
                        .then(() => {
                          alert("copied");
                        })
                        .catch((err) => {
                          alert("Error in copying", err);
                        });
                    }}>
                    COPY
                  </Button>
                </Form>
              </div>
            </div>
          </Modal>
        )}
      </section>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    accountDetails: state.DashboardReducer.companyDetails.data,
  };
};
export default connect(mapStateToProps, { CompanyDetails })(CompanyWalletPage);
