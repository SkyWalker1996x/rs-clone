const initialState = {
  id: "",
  taskName: "",
  timeStart: 0,
  timeEnd: 0,
  timeSpend: 0,
};

export const currentTaskReducer = (state = initialState, action: any) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
