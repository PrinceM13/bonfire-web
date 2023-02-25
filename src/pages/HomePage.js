import { useEffect } from "react";

import socket from "../config/socket";
import Post from "../features/post/Post";

export default function HomePage() {
  const userName = "Momo";

  useEffect(() => {
    socket.connect();
    socket.emit("login", { userName });
  }, []);

  return (
    <>
      <div>
        <h1>HomePage</h1>
      </div>
      <Post />
      <Post />
    </>
  );
}
