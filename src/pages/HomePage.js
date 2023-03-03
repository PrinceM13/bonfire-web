import { useEffect } from "react";

import socket from "../config/socket";
import PostEventHome from "../features/post/PostEventHome";

export default function HomePage() {
  const userName = "Momo";

  useEffect(() => {
    socket.connect();
    socket.emit("login", { userName });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <PostEventHome />
    </div>
  );
}
