import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

import * as authApi from "../api/auth-api";
import { getAccessToken, setAccessToken } from "../utils/local-storage";

const authSlice = createSlice({
  name: "auth",
  initialState: { authenticatedUser: getAccessToken() ? jwtDecode(getAccessToken()) : null },
  reducers: {
    loginSuccess: (state, action) => {
      state.authenticatedUser = action.payload;
    }
  }
});

export const { loginSuccess } = authSlice.actions;

// thunk middleware
export const login = (email, password) => async (dispatch) => {
  try {
    const res = await authApi.login({ email, password });
    const accessToken = res.data.accessToken;
    setAccessToken(accessToken);
    dispatch(loginSuccess(jwtDecode(accessToken)));
  } catch (err) {
    console.error(err);
  }
};

export default authSlice.reducer;
