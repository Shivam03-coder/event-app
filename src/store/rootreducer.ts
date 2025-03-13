import { combineReducers } from "@reduxjs/toolkit";
import { globalState } from "./states/global-state";

const RootReducers = combineReducers({
  global: globalState.reducer,
});

export default RootReducers;