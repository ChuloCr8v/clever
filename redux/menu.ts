import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
};
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state: { isMenuOpen: boolean }) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state: { isMenuOpen: boolean }) => {
      state.isMenuOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
