import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

import * as authApi from "../api/auth-api";
import { getAccessToken, setAccessToken, removeAccessToken } from "../utils/local-storage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticatedUser: getAccessToken() ? jwtDecode(getAccessToken()) : null,
    needMoreInfo: false,
    googleInfo: {}
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.authenticatedUser = action.payload;
    },
    setNeedMoreInfo: (state, action) => {
      state.needMoreInfo = action.payload;
    },
    setGoogleInfo: (state, action) => {
      state.googleInfo = action.payload;
    },
    setUser: (state, action) => {
      state.authenticatedUser = action.payload;
    }
  }
});

export const { loginSuccess, setNeedMoreInfo, setGoogleInfo, addGoogleInfo, setUser } =
  authSlice.actions;

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

export const loginWithGoogle = (email, googleId, firstName, lastName) => async (dispatch) => {
  try {
    const res = await authApi.loginWithGoogle({
      email,
      googleId,
      firstName,
      lastName,
      password: "google_login"
    });
    // check if need phone && birthdate for registeration
    if (res.data?.needMoreInfo) {
      dispatch(setGoogleInfo(res.data));
      dispatch(setNeedMoreInfo(true));
    }
    if (res?.data?.accessToken) {
      setAccessToken(res.data.accessToken);
      dispatch(loginSuccess(jwtDecode(res.data.accessToken)));
    }
  } catch (err) {
    console.error(err);
  }
};

export const registerWithGoogle = (data) => async (dispatch) => {
  try {
    const res = await authApi.registerWithGoogle(data);
    const accessToken = res.data.accessToken;
    setAccessToken(accessToken);
    dispatch(loginSuccess(jwtDecode(accessToken)));
    dispatch(setNeedMoreInfo(false));
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => (dispatch) => {
  removeAccessToken();
  dispatch(setUser(null));
};

export default authSlice.reducer;
