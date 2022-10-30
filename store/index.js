import { combineReducers, configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import newCharacterSlice from "./newCharacterSlice";
import skillsSlice from "./skillsSlice";

const rootReducer = combineReducers({
  characters: charactersSlice,
  skills: skillsSlice,
  newCharacter: newCharacterSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
