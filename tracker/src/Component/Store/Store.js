import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userDataReducer from "../Store/LandingSlice.js";

const rootReducer = combineReducers({
  userDataInfo: userDataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
