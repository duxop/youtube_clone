import { createSlice } from "@reduxjs/toolkit";

const liveChat = createSlice({
  name: "liveChat",
  initialState: {
    chats: [
      {
        name: "Shivam",
        message: "This Chat",
      },
    ],
  },
  reducers: {
    autoLiveChat: (state, actions) => {
      if (state.chats.length >= 30) state.chats.shift();
      state.chats.push(actions.payload);
    },
    clearLiveChat: (state) => {
      state.chats = [
        {
          name: "Shivam",
          message: "This Chat",
        },
      ];
    }
  },
});

export const { autoLiveChat, clearLiveChat } = liveChat.actions;

export default liveChat.reducer;
