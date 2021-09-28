import React from "react";

const Screen = ({ children, className = "" }) => {
  return <div className={`screen ${className}`}>{children}</div>;
};

export default Screen;
