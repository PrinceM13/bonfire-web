import axios from "../config/axios";

export const getMyProfile = () => axios.get("/user/profile");
export const getProfileById = (userId) => axios.get("/user/profile/" + userId);
export const editMyProfile = (input) => axios.patch("/user/profile", input);

export const getMyEventUsers = () => axios.get("/user/event-users");
