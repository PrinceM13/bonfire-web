import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../src/App.css";
import socket from "./config/socket";
import { setSocketId } from "./redux/chat-slice";
import Router from "./routes/Router";

function App() {
  const dispatch = useDispatch();
  const authenticatedUser = useSelector((state) => state.auth.authenticatedUser);

  useEffect(() => {
    if (authenticatedUser) {
      socket.connect();
      socket.on("connect", () => dispatch(setSocketId(socket.id)));
      socket.emit("login", { userId: authenticatedUser.id });
      console.log(`userId: ${authenticatedUser.id} connected to server`);
    }
    return () => socket.disconnect(); // disconnect connection when leave chat room
  }, [authenticatedUser]);

  return <Router />;
}

export default App;
