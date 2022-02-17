import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";

const ModalPayEmployee = (props) => {
  return ReactDOM.createPortal(
    <div>
      <div class="backdrop hidden"></div>
      <div class="modal-1 hidden">
        <div class="row">
          <div class="column first-column">
            <p class="first-column-paragraph">Month</p>
            <p class="first-column-paragraph">Year</p>
            <p class="first-column-paragraph">Number of Employees</p>
            <p class="first-column-paragraph">Tax deductions</p>
            <p class="first-column-paragraph">Amount</p>
          </div>
          <div class="column">
            <p class="second-column-paragraph">December</p>
            <p class="second-column-paragraph">2022</p>
            <p class="second-column-paragraph">50 employees</p>
            <p class="second-column-paragraph">$200,000</p>
            <p class="second-column-paragraph">$3,000,000</p>
          </div>
        </div>
        <Button
          type="button"
          class="btn btn-outline-primary back-outline-btn btn1"
        >
          BACK
        </Button>
        <Button
          type="button"
          class="btn btn-primary confirm-btn btn1"
          onClick={function () {
            props.close();
          }}
        >
          CONFIRM
        </Button>
      </div>
    </div>,
    document.querySelector("#ModalPayEmployee")
  );
};
export default ModalPayEmployee;
