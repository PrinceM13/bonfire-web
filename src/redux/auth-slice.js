import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { authenticatedUser: null },
  reducers: {
    login: (state, action) => {
      state.authenticatedUser = action.payload;
    }
  }
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
