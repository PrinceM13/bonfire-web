import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../src/App.css";
import socket from "./config/socket";
import { setUser } from "./redux/auth-slice";
import { setSocketId } from "./redux/chat-slice";
import Router from "./routes/Router";
import * as userApi from "./api/user-api";

function App() {
  const dispatch = useDispatch();
  const authenticatedUser = useSelector((state) => state.auth.authenticatedUser);

  useEffect(() => {
    if (authenticatedUser) {
      // connect socket-io with server
      socket.connect();
      socket.on("connect", () => dispatch(setSocketId(socket.id)));
      socket.emit("login", { userId: authenticatedUser.id });
      console.log(`userId: ${authenticatedUser.id} connected to server`);

      // fetch & update authenticated data when refresh
      const fetchProfile = async () => {
        try {
          const res = await userApi.getMyProfile();
          dispatch(setUser(res.data.myProfile));
        } catch (err) {
          console.log(err);
        }
      };
      fetchProfile();
    }
    return () => socket.disconnect(); // disconnect connection when leave chat room
  }, []);

  return <Router />;
}

export default App;
