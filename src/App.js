import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../src/App.css";
import socket from "./config/socket";
import { setUser } from "./redux/auth-slice";
import { setSocketId } from "./redux/chat-slice";
import Router from "./routes/Router";
import * as userApi from "./api/user-api";
import Notification from "./components/Notification";
import NotificationBox from "./components/NotificationBox";

function App() {
  const dispatch = useDispatch();
  const authenticatedUser = useSelector((state) => state.auth.authenticatedUser);

  const [isNotification, setIsNotification] = useState(false);

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

  // connect to subscribe room (joined events)
  useEffect(() => {
    authenticatedUser?.EventUsers.forEach((event) => socket.emit("joinRoom", `${event.eventId}`));
    return () => {
      authenticatedUser?.EventUsers.forEach((event) =>
        socket.emit("leaveRoom", `${event.eventId}`)
      );
    };
  }, [authenticatedUser]);

  useEffect(() => {
    if (!socket) return;
    socket.on("notification", (data) => {
      console.log("from noti ---> ", data);
      setIsNotification(true);
      setTimeout(() => {
        setIsNotification(false);
      }, 2000);
    });
    return () => {
      socket.off("notification");
    };
  }, [socket]);

  return (
    <>
      <Router />
      {isNotification && <NotificationBox />}
    </>
  );
}

export default App;
