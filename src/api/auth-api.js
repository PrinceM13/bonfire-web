import axios from "../config/axios";

export const register = (input) => axios.post("/auth/register", input);
export const login = (input) => axios.post("/auth/login", input);
export const loginWithGoogle = (input) => axios.post("/auth/login-with-google", input);
export const registerWithGoogle = (input) => axios.post("/auth//register-with-google", input);
