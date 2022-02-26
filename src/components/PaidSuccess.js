import React from "react";
import { Button } from "react-bootstrap";
import HandPhone from "./Dashboard/svg/HandPhone";

const PaidSuccess = () => {
  return (
    <div>
      <HandPhone />
      <div className="hand-phone-div">
        <h5 className="congrats">Congratulations!</h5>
        <p className="paid-success">
          You have succesffully paid 50 of your employees
        </p>
        <Button className="btn btn-primary refresh-btn">REFRESH</Button>
      </div>
    </div>
  );
};

export default PaidSuccess;
