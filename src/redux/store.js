import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth-slice";
import eventReducer from "./event-slice";
import userReducer from "./user-slice";
import filterReducer from "./filter-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    event: eventReducer,
    filter: filterReducer
  }
});
