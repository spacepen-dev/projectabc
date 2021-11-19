import React from "react";

const Links = ({ name, id, icon, second, data }) => {
  return (
    <span className={`links w-100`}>
      {icon}
      {name || second}
    </span>
  );
};

export default Links;
