import axios from "../config/axios";

export const getAllTags = () => axios.get(`/tag?${tagName}`);
