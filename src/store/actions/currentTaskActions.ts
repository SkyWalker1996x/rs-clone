import {
  CLEAR_CURRENT_TASK,
  FINISH_TASK,
  SET_TASK_NAME,
  START_TASK,
  UPDATE_TIME_SPEND,
} from "../types";
import { v4 as uuidv4 } from "uuid";
import { UpdateTimeSpend } from "../../interfaces/Store";

export const setTaskName: any = (name: any) => {
  return {
    type: SET_TASK_NAME,
    payload: name,
  };
};

export const startTask: any = () => {
  return {
    type: START_TASK,
    payload: {
      id: uuidv4(),
      timeStart: Date.now(),
    },
  };
};

export const finishTask: any = () => {
  return {
    type: FINISH_TASK,
    payload: Date.now(),
  };
};

export const clearCurrentTask: any = () => {
  return {
    type: CLEAR_CURRENT_TASK,
  };
};

export const updateTimeSpend: UpdateTimeSpend = () => {
  return {
    type: UPDATE_TIME_SPEND,
    payload: Date.now(),
  };
};
