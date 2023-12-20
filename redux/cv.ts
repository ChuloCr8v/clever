import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCvOpen: false,
};
export const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    openCv: (state: { isCvOpen: boolean }) => {
      state.isCvOpen = true;
    },
    closeCv: (state: { isCvOpen: boolean }) => {
      state.isCvOpen = false;
    },
  },
});

export const { openCv, closeCv } = cvSlice.actions;
export default cvSlice.reducer;
