import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import searchCacheSlice from "./searchCacheSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    seachCache: searchCacheSlice,
  },
});

export default store;
