import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
import { rootSaga } from "./sagas";
import { loadFromLocalStorage } from "../utils/localStorageUtils";
import { ACTIVATE_TIMER } from "./types";

const persistedState = loadFromLocalStorage();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

if (store.getState().currentTask.timeStart !== 0) {
  store.dispatch({ type: ACTIVATE_TIMER, payload: "" });
}
