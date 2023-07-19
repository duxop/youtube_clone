import { createSlice } from "@reduxjs/toolkit";


const sidebar = createSlice({
    name: 'sidebar',
    initialState: {
        show: true
    },
    reducers:{
        toggleSidebar: (state) => {
            state.show = !state.show;
        }
    }
});

export const {toggleSidebar} = sidebar.actions;

export default sidebar.reducer;