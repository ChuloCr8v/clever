import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSkillsOpen: false,
};
export const skillsSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openSkills: (state: { isSkillsOpen: boolean }) => {
      state.isSkillsOpen = true;
    },
    closeSkills: (state: { isSkillsOpen: boolean }) => {
      state.isSkillsOpen = false;
    },
  },
});

export const { openSkills, closeSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
