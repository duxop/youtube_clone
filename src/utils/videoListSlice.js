import { createSlice } from "@reduxjs/toolkit";

const videoList = createSlice({
  name: "videoList",
  initialState: {
    list: [],
  },
  reducers: {
    setVideoList: (state, actions) => {
        state.list = actions.payload
    },
  },
});

export const { setVideoList } = videoList.actions;
export default videoList.reducer;
