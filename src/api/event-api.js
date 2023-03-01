import axios from "../config/axios";

export const getAllEvents = () => axios.get("/events");
export const createEvent = (input) => axios.post("/events", input);
