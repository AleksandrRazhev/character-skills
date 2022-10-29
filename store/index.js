import { combineReducers, configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";

const rootReducer = combineReducers({
  characters: charactersSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
