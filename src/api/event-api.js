import axios from "../config/axios";

export const createEvent = (input) => axios.post("/events", input);
