import React from "react";

const Slider = ({ name, id, pageId, small, getId, smallId }) => {
  return (
    <div>
      <span
        className={`${pageId === id ? "overview-tab" : ""}`}
        onClick={getId}
        id={id}>
        {name}
      </span>
      <small
        id={smallId}
        className={`${small === smallId ? "add-small" : ""}`}></small>
    </div>
  );
};

export default Slider;
