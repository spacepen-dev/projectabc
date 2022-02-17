import React from "react";
import { Button } from "react-bootstrap";
import HandPhone from "./Dashboard/svg/HandPhone";

const PaidSuccess = () => {
  return (
    <div>
      <HandPhone />
      <div class="hand-phone-div">
        <h5 class="congrats">Congratulations!</h5>
        <p class="paid-success">
          You have succesffully paid 50 of your employees
        </p>
        <Button class="btn btn-primary refresh-btn">REFRESH</Button>
      </div>
    </div>
  );
};

export default PaidSuccess;
