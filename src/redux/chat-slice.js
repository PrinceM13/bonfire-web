import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: { socketId: "", currentChatRoom: "" },
  reducers: {
    setSocketId: (state, action) => {
      state.socketId = action.payload;
    },
    setCurrentChatRoom: (state, action) => {
      state.currentChatRoom = action.payload;
    }
  }
});

export const { setSocketId, setCurrentChatRoom } = chatSlice.actions;

export default chatSlice.reducer;
