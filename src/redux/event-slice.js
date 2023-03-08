import { createSlice } from "@reduxjs/toolkit";

import * as eventApi from "../api/event-api";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: [], // [{}, {}, {}] ---> [[{},{},{}]
    eventFromId: {}
  },
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    deleteEventById: (state, action) => {
      state.events = state.events.filter((event) => event.id !== +action.payload);
    },
    updateEvents: (state, action) => {
      state.events[action.payload.idx].EventDetail = {
        ...state.events[action.payload.idx].EventDetail,
        ...action.payload.subEvent
      }; // action.payload = {idx: 1, event: {fg} }
    },
    // -------------------------------------------------------------
    setEventFromId: (state, action) => {
      state.eventFromId = action.payload.reduce((acc, event, idx) => {
        acc[event.id] = {
          title: event.title,
          userId: event.userId,
          EventDetail: event.EventDetail,
          EventUsers: event.EventUsers,
          User: event.User,
          idx,
          createdAt: event.createdAt,
          updatedAt: event.updatedAt
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
          User: event.User,
          idx: event.idx,
          createdAt: event.createdAt,
          updatedAt: event.updatedAt
        };
        return acc;
      }, {});
    }
  }
});

export const { setEvents, deleteEventById, updateEvents, setEventFromId, updateEventFromId } =
  eventSlice.actions;

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
    dispatch(deleteEventById(eventId));
    dispatch(updateEventFromId());
  } catch (err) {
    console.log(err);
  }
};

export default eventSlice.reducer;
