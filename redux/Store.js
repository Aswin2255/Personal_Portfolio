import { configureStore } from "@reduxjs/toolkit";
import Themeslice from "./Themeslice";

import storage from "redux-persist/lib/storage";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootreducer = {
  mode: Themeslice.reducer,
};
const persistedreducer = persistCombineReducers(persistConfig, rootreducer);

const store = configureStore({
  reducer: persistedreducer,
});

export default store;
