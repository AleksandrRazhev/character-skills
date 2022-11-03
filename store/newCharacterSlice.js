// Check this file for errors and incorrect decisions
import { createSlice } from "@reduxjs/toolkit";

const newCharacterSlice = createSlice({
  name: "newCharacter",
  initialState: {
    newCharacter: {
      name: "",
      skills: {},
    },
  },
  reducers: {
    addName(state, action) {
      state.newCharacter.name = action.payload;
    },
    addSkills(state, action) {
      action.payload.payload.forEach((item) => {
        state.newCharacter.skills[item] = 0;
      });
    },
    addSkill(state, action) {
      const skill = Object.keys(action.payload)[0];
      const value = Object.values(action.payload)[0];
      state.newCharacter.skills[skill] = value;
    },
    resetnewCharacter(state) {
      state.newCharacter.name = "";
      state.newCharacter.skills = {};
    },
  },
});

export default newCharacterSlice.reducer;
export const { addName, addSkill, resetnewCharacter, addSkills } =
  newCharacterSlice.actions;
