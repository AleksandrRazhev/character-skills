import { combineReducers, configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import skillsSlice from "./skillsSlice";

const rootReducer = combineReducers({
  characters: charactersSlice,
  skills: skillsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
