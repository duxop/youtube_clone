import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import searchCacheSlice from "./searchCacheSlice";
import videoListSlice from "./videoListSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    seachCache :searchCacheSlice,
    videoList : videoListSlice,
  },
});

export default store;
