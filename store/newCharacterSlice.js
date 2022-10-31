import { createSlice } from "@reduxjs/toolkit";

const newCharacterSlice = createSlice({
  name: "newCharacter",
  initialState: {
    name: "",
    skills: {},
  },
  reducers: {
    addName(state, action) {
      state.name = action.payload;
    },
    addSkill(state, action) {
      const skill = Object.keys(action.payload)[0];
      const value = Object.values(action.payload)[0];
      state.skills[skill] = value;
    },
    resetnewCharacter(state) {
      state = { name: "", skills: {} };
    },
  },
});

export default newCharacterSlice.reducer;
export const { addName, addSkill, resetnewCharacter } =
  newCharacterSlice.actions;
