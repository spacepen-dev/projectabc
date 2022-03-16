import React, { useState } from "react";
import EyeSVG from "./svg/Eyes";
import EyesSlash from "./svg/EyesSlash";

const CompanyWalletPage = () => {
  const [hideAmount, setHideAmount] = useState(false);

  return (
    <section className='container mt-5 d-flex flex-column align-items-center justify-content-evenly '>
      <div className='col-8 '>
        <div className='container-page col-8 shadow-lg'>
          <span>
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
        <div className='container-2 shadow-lg'>
          <div className='circle-2'></div>
          <p className='choice'>By Credit/Debit Card</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyWalletPage;
