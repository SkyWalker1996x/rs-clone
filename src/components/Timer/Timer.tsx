import React from "react";
import { connect } from "react-redux";
// components
import MainWrapper from "../Wrappers/MainWrapper";
// antd-components
import { Input } from "antd";
import { Button } from "antd";
// actions
import { setTaskName } from "../../store/actions/currentTaskActions";
import {
  activateTimer,
  inactivateTimer,
} from "../../store/actions/activeTimerActions";
// styles
import "./styles.css";

const Timer = ({
  currentTask,
  setTaskName,
  activateTimer,
  inactivateTimer,
}: any) => {
  const { taskName, timeStart: activeTimer } = currentTask;

  const listener = activeTimer !== 0 ? inactivateTimer : activateTimer;

  return (
    <MainWrapper>
      <Input
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <div className="circle-wrapper">00:00:00</div>
      <Button type="primary" onClick={() => listener()}>
        {activeTimer ? "Stop" : "Start"}
      </Button>
    </MainWrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currentTask: state.currentTask,
  };
};
const mapDispatchToProps = {
  setTaskName,
  activateTimer,
  inactivateTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
