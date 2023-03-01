import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth-slice";
import eventSlice from "./event-slice";
import userReducer from "./user-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    event: eventSlice
  }
});
