import React from "react";
// components
import MainWrapper from "../Wrappers/MainWrapper";
// antd-components
import { Input } from "antd";
import { Button } from "antd";
// styles
import "./styles.css";

const Timer = () => {
  return (
    <MainWrapper>
      <Input placeholder="Task Name" />
      <div className="circle-wrapper">00:00:00</div>
      <Button type="primary">Start</Button>
    </MainWrapper>
  );
};

export default Timer;
