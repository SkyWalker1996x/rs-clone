import { SET_TASK_NAME } from "../types";

export const setTaskName: any = (name: any) => {
  return {
    type: SET_TASK_NAME,
    payload: name,
  };
};
