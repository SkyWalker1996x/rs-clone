import React from "react";
import { connect } from "react-redux";
// components
import MainWrapper from "../Wrappers/MainWrapper";
// antd-components
import { Input } from "antd";
import { Button } from "antd";
// actions
import {
  finishTask,
  setTaskName,
  startTask,
} from "../../store/actions/currentTaskActions";
// styles
import "./styles.css";

const Timer = ({ currentTask, setTaskName, startTask, finishTask }: any) => {
  const { taskName, timeSpend, timeStart: activeTimer } = currentTask;

  const listener = activeTimer ? finishTask : startTask;

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
  startTask,
  finishTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
