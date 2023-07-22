import { createSlice } from "@reduxjs/toolkit";


const sidebar = createSlice({
    name: 'sidebar',
    initialState: {
        show: true
    },
    reducers:{
        toggleSidebar: (state) => {
            state.show = !state.show;
        },
        closeSidebar: (state) => {
            state.show = false;
        }
    }
});

export const { toggleSidebar, closeSidebar } = sidebar.actions;

export default sidebar.reducer;