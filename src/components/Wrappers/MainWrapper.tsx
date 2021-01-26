import React from "react";
import "./styles.css";

const MainWrapper: React.FC = ({ children }) => {
  return <div className="main-wrapper">{children}</div>;
};

export default MainWrapper;
