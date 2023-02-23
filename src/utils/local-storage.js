export const ACCESS_TOKEN = "ACCESS_TOKEN";

// manage access token
export const setAccessToken = (accessToken) => localStorage.setItem(ACCESS_TOKEN, accessToken);
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
