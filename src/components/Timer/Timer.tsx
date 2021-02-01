import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
// components
import MainWrapper from "../Wrappers/MainWrapper";
// antd-components
import { Input } from "antd";
import { Button } from "antd";
// actions
import {
  setTaskName,
  updateTimeSpend,
} from "../../store/actions/currentTaskActions";
import {
  activateTimer,
  inactivateTimer,
} from "../../store/actions/activeTimerActions";
// utils
import { convertMsToTime } from "../../utils/timeConvertingUtils";
// styles
import "./styles.css";

const Timer = ({
  currentTask,
  setTaskName,
  activateTimer,
  inactivateTimer,
  updateTimeSpend,
}: any) => {
  const { taskName, timeStart: activeTimer, timeSpend } = currentTask;
  let taskTimer: any = useRef();

  useEffect(() => {
    if (activeTimer !== 0) {
      taskTimer.current = setInterval(() => {
        updateTimeSpend();
      }, 1000);
    }

    if (activeTimer === 0) {
      clearInterval(taskTimer.current);
    }

    return () => clearInterval(taskTimer.current);
  }, [activeTimer]);

  const listener = activeTimer !== 0 ? inactivateTimer : activateTimer;

  return (
    <MainWrapper>
      <Input
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <div className="circle-wrapper">{convertMsToTime(timeSpend)}</div>
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
  updateTimeSpend,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
