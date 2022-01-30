import React from "react";
import Triangle from "./svg/Triangle";

const WarningPage = () => {
  return (
    <main>
      <div className="content">
        <div className="s">
          <Triangle />
        </div>
        <h2>Oops!</h2>
        <p>you've never pay any employees</p>
        <button className="btn">pay employees</button>
      </div>
    </main>
  );
};

export default WarningPage;
