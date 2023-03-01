import { createSlice } from "@reduxjs/toolkit";

import * as eventApi from "../api/event-api";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: []
  },
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    }
  }
});

export const { setEvents } = eventSlice.actions;

export const getAllEvents = () => async (dispatch) => {
  try {
    const res = await eventApi.getAllEvents();
    const allEvents = res.data.events;
    console.log(allEvents);
    dispatch(setEvents(allEvents));
  } catch (err) {
    console.log(err);
  }
};

export default eventSlice.reducer;
