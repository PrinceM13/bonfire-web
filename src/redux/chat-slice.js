import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: { socketId: "" },
  reducers: {
    setSocketId: (state, action) => {
      state.socketId = action.payload;
    }
  }
});

export const { setSocketId } = chatSlice.actions;

export default chatSlice.reducer;
