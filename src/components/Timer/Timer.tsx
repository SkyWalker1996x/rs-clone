import React, { useEffect, useRef, useState } from "react";
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
import EmptyTaskWarning from "./EmptyTaskWarning/EmptyTaskWarning";

const Timer = ({
  currentTask,
  setTaskName,
  activateTimer,
  inactivateTimer,
  updateTimeSpend,
}: any) => {
  const { taskName, timeStart: activeTimer, timeSpend } = currentTask;
  let taskTimer: any = useRef();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
  }, [activeTimer, updateTimeSpend]);

  const inactivateListener =
    taskName.trim() === "" ? showModal : inactivateTimer;

  const listener = activeTimer !== 0 ? inactivateListener : activateTimer;

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
      <EmptyTaskWarning
        handleOk={handleOk}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      />
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
