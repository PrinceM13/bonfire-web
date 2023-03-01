import axios from "../config/axios";

export const getMyProfile = () => axios.get("/user/profile");
