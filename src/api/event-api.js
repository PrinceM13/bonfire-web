import axios from "../config/axios";

export const getAllEvents = () => axios.get("/events");
export const getEventsById = (eventId) => axios.get("/events/" + eventId);
export const createEvent = (formData) => axios.post("/events", formData);
export const deleteEvent = (eventId) => axios.delete("/events/" + eventId);

export const createEventUser = (input) => axios.post("/events/event-users", input);
export const updateEvents = (eventId, formData) => axios.patch("/events/" + eventId, formData);
