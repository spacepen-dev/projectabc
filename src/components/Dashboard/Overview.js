import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import DetailsCard from "./DetailsCard";
import EyeSVG from "./svg/Eyes";
import WhiteWallet from "./svg/WhiteWallet";
import ProfileWhite from "./svg/ProfileWhite";
import SalariesHistory from "./SalariesHistory";
import Slider from "./Slider";

const Overview = ({ getPageId }) => {
  const [pageId, setId] = useState(4);
  const [small, setSmall] = useState("first");
  const [link, setLink] = useState("");

  const getId = (e) => {
    setId(Number(e.target.id));
    setSmall(e.target.nextSibling.id);
  };

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
      <div className='d-flex justify-content-between align-items-center details-container'>
        <DetailsCard
          heading=' TOTAL BALANCE'
          number='$50,000'
          firstSVG={EyeSVG()}
          secondSVG={WhiteWallet()}
        />
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
        {pageId === 4 ? <SalariesHistory /> : ""}
        {/* {pageId === 7 ? <SalariesHistory /> : ""} */}
        {/* {pageId === 8 ? <SalariesHistory /> : ""} */}
      </article>
    </Container>
  );
};

export default Overview;
