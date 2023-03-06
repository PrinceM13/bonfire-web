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
    updateEvent: (state, action) => {
      state.events = state.events.filter((event) => event.id !== +action.payload);
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
    },
    updateEventFromId: (state) => {
      state.eventFromId = state.events.reduce((acc, event) => {
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

export const { setEvents, setEventFromId, updateEvent, updateEventFromId } = eventSlice.actions;

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

export const getEventsById = (eventId) => async (dispatch) => {
  try {
    const res = await eventApi.getEventsById(eventId);
    const thisEvent = res.data.event;
    dispatch(setEvents([thisEvent]));
    dispatch(updateEventFromId());
  } catch (err) {
    console.log(err);
  }
};

export const deleteEvent = (eventId) => async (dispatch) => {
  try {
    await eventApi.deleteEvent(eventId);
    dispatch(updateEvent(eventId));
    dispatch(updateEventFromId());
  } catch (err) {
    console.log(err);
  }
};

export default eventSlice.reducer;
