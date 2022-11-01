import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
  name: "skills",
  initialState: { skills: ["power", "dexterity", "intelligence"] },
  reducers: {
    addSkillToArr(state, action) {
      state.skills.push(action.payload);
    },
  },
});

export default skillsSlice.reducer;
export const { addSkillToArr } = skillsSlice.actions;
