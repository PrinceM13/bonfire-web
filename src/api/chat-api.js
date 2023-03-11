import axios from "../config/axios";

export const getAllChatByEventId = (eventId) => axios.get("/chats/" + eventId);
