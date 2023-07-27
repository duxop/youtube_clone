import { createSlice } from "@reduxjs/toolkit";


const searchCache = createSlice({
  name: "searchCache",
  initialState: {
    cache: [],
  },
  reducers: {
    cacheSuggestions: (state, actions) => {
      state.cache.push({
        "key" : actions.payload.key,
        "val" : actions.payload.val
      });
    },
  },
});

export const { cacheSuggestions } = searchCache.actions;
export default searchCache.reducer;