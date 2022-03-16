import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import DetailsCard from "./DetailsCard";
import EyeSVG from "./svg/Eyes";
import EyesSlash from "./svg/EyesSlash";
import WhiteWallet from "./svg/WhiteWallet";
import ProfileWhite from "./svg/ProfileWhite";
import SalariesHistory from "./SalariesHistory";
import AccountHistory from "./AccountHistory";
import TaxHistory from "./TaxHistory";
import Slider from "./Slider";
import TableSpinner from "./TableSpinner";
import EyeSlash from "./svg/EyesSlash";

const Overview = ({ getPageId }) => {
  const [pageId, setId] = useState(4);
  const [small, setSmall] = useState("first");
  const [link, setLink] = useState("");
  const [request, setRequest] = useState(false);
  const [hideAmount, setHideAmount] = useState(false);

  const getId = (e) => {
    setId(Number(e.target.id));
    setSmall(e.target.nextSibling.id);
  };

  // USE EFFECT TO ADD THE LOADER WHEN FETCH DATA FROM THE DATABASE
  useEffect(() => {
    console.log("lololo");
    setRequest(true);
    setTimeout(() => {
      setRequest(false);
    }, 3000);
  }, [pageId]);

  // USE EFFECT TO CHNAGE THE LINK ON THE SIDE BAR
  useEffect(() => {
    if (pageId === 4) {
      setLink("/dashboard/view/salary/history");
    } else if (pageId === 7) {
      setLink("/dashboard/view/account/history");
    } else {
      setLink("/dashboard/view/tax/history");
    }
  }, [pageId]);

  return (
    <Container fluid className='overview h-100'>
      <div className='d-flex justify-content-between align-items-center details-container '>
        {/* <DetailsCard
          heading=" TOTAL BALANCE"
          number={new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "NGN",
          }).format(50000000)}
          // firstSVG={}
          secondSVG={EyeSVG()}
        /> */}
        <div className='details-card d-flex align-items-center justify-content-around px-2'>
          <div>
            <span>
              <h3>TOTAL BALANCE</h3>
            </span>
            <span className='d-inline-block w-100'>
              <h2>
                {hideAmount
                  ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "NGN",
                    }).format(50000000)
                  : "*********"}
              </h2>
            </span>
          </div>
          <div
            onClick={() => setHideAmount(!hideAmount)}
            style={{ cursor: "pointer" }}>
            {hideAmount ? EyeSVG() : EyesSlash()}
          </div>
        </div>
        <DetailsCard
          heading='TOTAL EMPLOYEES'
          number='60'
          secondSVG={ProfileWhite()}
        />
        <DetailsCard
          heading='TOTAL TRANSACTIONS'
          number='50'
          secondSVG={WhiteWallet()}
        />
      </div>
      <article className='d-flex align-items-center top-tab'>
        <div className='h-100 d-flex justify-content-between align-items-center w-100'>
          <Slider
            name='SALARY HISTORY'
            id={4}
            small={small}
            getId={getId}
            pageId={pageId}
            smallId='first'
          />
          <Slider
            name='ACCOUNT HISTORY'
            id={7}
            small={small}
            getId={getId}
            pageId={pageId}
            smallId='second'
          />
          <Slider
            name='TAX HISTORY'
            id={8}
            small={small}
            getId={getId}
            pageId={pageId}
            smallId='third'
          />
          <div className='overview-btn'>
            <Link
              className='button d-flex text-white align-items-center justify-content-center'
              to={link}
              onClick={() => getPageId(pageId)}>
              View All
            </Link>
          </div>
        </div>
      </article>
      <article className='bottom-tab'>
        <i className='bi bi-eyes-slash'></i>
        {request && (
          <div className='loader-container'>
            <TableSpinner />
          </div>
        )}
        {pageId === 4 && !request && <SalariesHistory />}
        {pageId === 7 && !request && <AccountHistory />}
        {pageId === 8 && !request && <TaxHistory />}
      </article>
    </Container>
  );
};

export default Overview;
