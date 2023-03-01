import axios from "../config/axios";

export const getAllEvents = () => axios.get("/events");
