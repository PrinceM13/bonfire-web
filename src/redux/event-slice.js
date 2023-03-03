import { createSlice } from "@reduxjs/toolkit";

import * as eventApi from "../api/event-api";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: [],
    eventFromId: {}
  },
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setEventFromId: (state, action) => {
      state.eventFromId = action.payload.reduce((acc, event) => {
        acc[event.id] = {
          title: event.title,
          userId: event.userId,
          EventDetail: event.EventDetail,
          EventUsers: event.EventUsers,
          User: event.User
        };
        return acc;
      }, {});
    }
  }
});

export const { setEvents, setEventFromId } = eventSlice.actions;

export const getAllEvents = () => async (dispatch) => {
  try {
    const res = await eventApi.getAllEvents();
    const allEvents = res.data.events;
    dispatch(setEvents(allEvents));
    dispatch(setEventFromId(allEvents));
  } catch (err) {
    console.log(err);
  }
};

export default eventSlice.reducer;
