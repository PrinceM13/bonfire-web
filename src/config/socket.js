import io from "socket.io-client";

const socket = io(process.env.REACT_APP_ENDPOINT_URL, { autoConnect: false });

export default socket;
