import { ADD_TASK, DELETE_TASK } from "../types";

export const addTask: any = (task: any) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask: any = (task: any) => {
  return {
    type: DELETE_TASK,
    payload: task,
  }
}
