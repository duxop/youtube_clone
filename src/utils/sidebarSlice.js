import { createSlice } from "@reduxjs/toolkit";


const sidebar = createSlice({
  name: "sidebar",
  initialState: {
    show: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.show = !state.show;
    },
    closeSidebar: (state) => {
      state.show = false;
    },
    openSidebar: (state) => {
      state.show = true;
    },
  },
});

export const { toggleSidebar, closeSidebar, openSidebar } = sidebar.actions;

export default sidebar.reducer;