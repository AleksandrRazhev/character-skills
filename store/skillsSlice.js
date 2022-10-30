import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
  name: "skills",
  initialState: { skills: ["power", "dexterity", "intelligence"] },
  reducers: {
    addSkill(state, action) {
      state.skills.push(action.payload);
    },
  },
});

export default skillsSlice.reducer;
export const { addSkill } = skillsSlice.actions;
