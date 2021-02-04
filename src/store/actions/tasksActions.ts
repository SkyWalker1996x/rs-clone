import { ADD_TASK, DELETE_TASK, GENERATE_TASKS } from "../types";
import { AddTask, DeleteTask, GenerateTasks } from '../../interfaces/Store';

export const addTask: AddTask = (task: any) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask: DeleteTask = (task: any) => {
  return {
    type: DELETE_TASK,
    payload: task,
  }
}

export const generateTasks: GenerateTasks = (tasks) => {
  return {
    type: GENERATE_TASKS,
    payload: tasks,
  };
};
