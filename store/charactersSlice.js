// Check this file for errors and incorrect decisions
import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [
      { id: 1, name: "персонаж" },
      { id: 2, name: "персонажперсонажперсонаж" },
      {
        id: 3,
        name: "персонажперсонажперсонаж персонажперсонажперсонаж персонажперсонажперсонаж персонажперсонажперсонажперсонажперсонажперсонаж",
      },
    ],
  },
  reducers: {
    addCharacter(state, action) {
      state.characters.push(action.payload);
    },
    removeCharacter(state, action) {
      if (action.payload !== 0 && !action.payload) {
        state.characters.pop();
      } else {
        state.characters.splice(action.payload, 1);
      }
    },
  },
});

export default charactersSlice.reducer;
export const { addCharacter, removeCharacter } = charactersSlice.actions;
