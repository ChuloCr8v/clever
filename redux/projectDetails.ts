import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProjectDetailsOpen: false,
};
export const projectDetailsSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openProjectDetails: (state: { isProjectDetailsOpen: boolean }) => {
      state.isProjectDetailsOpen = true;
    },
    closeProjectDetails: (state: { isProjectDetailsOpen: boolean }) => {
      state.isProjectDetailsOpen = false;
    },
  },
});

export const { openProjectDetails, closeProjectDetails } =
  projectDetailsSlice.actions;
export default projectDetailsSlice.reducer;
