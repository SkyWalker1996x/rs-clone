import { ADD_TASK } from "../types";

const initialState = [
  {
    id: "36cdfdbb-0ed8-4c6d-8369-ef5f13573671",
    taskName: "Task 36cdfdbb",
    timeStart: 1611641245662,
    timeEnd: 1611645280905,
    timeSpend: 4035243,
  },
  {
    id: "3bd31f4d-38bf-4baa-a42e-1c1d819f699e",
    taskName: "Task 3bd31f4d",
    timeStart: 1611645846137,
    timeEnd: 1611650583498,
    timeSpend: 4737361,
  },
  {
    id: "dc0ef6ee-53a7-4c61-a266-227c091f18dd",
    taskName: "Task dc0ef6ee",
    timeStart: 1611651236183,
    timeEnd: 1611655842753,
    timeSpend: 4606570,
  },
  {
    id: "cf57f391-bb8b-4d62-978a-f573826e2c2a",
    taskName: "Task cf57f391",
    timeStart: 1611656192103,
    timeEnd: 1611658570908,
    timeSpend: 2378805,
  },
  {
    id: "aa8c797d-099e-4a30-b76d-19f95837e95e",
    taskName: "Task aa8c797d",
    timeStart: 1611658941587,
    timeEnd: 1611663029254,
    timeSpend: 4087667,
  },
  {
    id: "fe266d25-777c-4893-a115-487ff75675c7",
    taskName: "Task fe266d25",
    timeStart: 1611663758690,
    timeEnd: 1611668123416,
    timeSpend: 4364726,
  },
  {
    id: "374d4b12-e0b7-497a-a105-f6f75f1654f4",
    taskName: "Task 374d4b12",
    timeStart: 1611668763205,
    timeEnd: 1611670303673,
    timeSpend: 1540468,
  },
  {
    id: "76140a16-ecf8-4199-b36f-025eb5816754",
    taskName: "Task 76140a16",
    timeStart: 1611670908629,
    timeEnd: 1611674321875,
    timeSpend: 3413246,
  },
  {
    id: "24288ac2-7a51-445a-badf-2dafe0067f0d",
    taskName: "Task 24288ac2",
    timeStart: 1611675214879,
    timeEnd: 1611678559172,
    timeSpend: 3344293,
  },
  {
    id: "16e705b5-f17a-471f-9615-c6234b2382ec",
    taskName: "Task 16e705b5",
    timeStart: 1611678934675,
    timeEnd: 1611682188093,
    timeSpend: 3253418,
  },
  {
    id: "9e2bdfc9-a13c-4292-89a8-c5d192793c6c",
    taskName: "Task 9e2bdfc9",
    timeStart: 1611682670571,
    timeEnd: 1611687889554,
    timeSpend: 5218983,
  },
  {
    id: "0839ebb4-4eeb-4fee-a9a3-e38d47baf7ab",
    taskName: "Task 0839ebb4",
    timeStart: 1611688536334,
    timeEnd: 1611689441438,
    timeSpend: 905104,
  },
  {
    id: "7cd291a7-de7a-4422-a0fb-4835edf3cd72",
    taskName: "Task 7cd291a7",
    timeStart: 1611689750913,
    timeEnd: 1611694711988,
    timeSpend: 4961075,
  },
];

export const tasksReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return [...state, payload];
    default:
      return state;
  }
};
