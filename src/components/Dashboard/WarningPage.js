import { queryByDisplayValue } from "@testing-library/react";
import React from "react";
import { Successful } from "./svg/Successful";

const WarningPage = () => {
  
  return (
    <main>
      <div className="content">
        <div className="s-svg">
        <Successful />
        </div>
        <h2>SORRY!</h2>
        <h5>you've never pay any employees</h5>
        <button className="btn">pay employees</button>
      </div>
    </main>
  );
};

export default WarningPage;
