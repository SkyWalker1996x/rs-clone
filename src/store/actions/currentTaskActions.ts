import {FINISH_TASK, SET_TASK_NAME, START_TASK} from "../types";
import {v4 as uuidv4} from "uuid";

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
