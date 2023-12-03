import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProjectDetailsOpen: false,
  projectDetails: {},
};
export const projectDetailsSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openProjectDetails: (
      state: {
        projectDetails: {};
        isProjectDetailsOpen: boolean;
      },
      action
    ) => {
      state.isProjectDetailsOpen = true;
      state.projectDetails = action.payload;
    },
    closeProjectDetails: (state: { isProjectDetailsOpen: boolean }) => {
      state.isProjectDetailsOpen = false;
    },
  },
});

export const { openProjectDetails, closeProjectDetails } =
  projectDetailsSlice.actions;
export default projectDetailsSlice.reducer;
