import React from "react";

const DetailsCard = ({ heading, number, firstSVG, secondSVG }) => {
  return (
    <div className='details-card d-flex align-items-center justify-content-around px-2'>
      <div>
        <span>
          <h3>{heading}</h3>
        </span>
        <span className='d-inline-block w-100'>
          <h2>
            {number}
            {firstSVG}
          </h2>
        </span>
      </div>
      <div>{secondSVG}</div>
    </div>
  );
};

export default DetailsCard;
