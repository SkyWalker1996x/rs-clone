import { SET_TASK_NAME, START_TASK } from "../types";

const initialState = {
  id: "",
  taskName: "",
  timeStart: 0,
  timeEnd: 0,
  timeSpend: 0,
};

export const currentTaskReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TASK_NAME:
      return { ...state, taskName: payload };
    case START_TASK:
      return { ...state, ...payload };
    default:
      return state;
  }
};
