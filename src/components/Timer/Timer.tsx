import React from "react";
import { connect } from "react-redux";
// components
import MainWrapper from "../Wrappers/MainWrapper";
// antd-components
import { Input } from "antd";
import { Button } from "antd";
// actions
import { setTaskName } from "../../store/actions/currentTaskActions";
// styles
import "./styles.css";

const Timer = ({ currentTask, setTaskName }: any) => {
  const { taskName, timeSpend, timeStart: activeTimer } = currentTask;

  return (
    <MainWrapper>
      <Input
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <div className="circle-wrapper">00:00:00</div>
      <Button type="primary">Start</Button>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
