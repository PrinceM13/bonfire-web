import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ChatRoom from "../components/chat/ChatRoom";
import * as userApi from "../api/user-api";

export default function ChatRoomPage() {
  const [eventUsers, setEventUsers] = useState([]);

  useEffect(() => {
    const fetchMyEventUsers = async () => {
      const res = await userApi.getMyEventUsers();
      setEventUsers(res.data.eventUsers);
    };
    fetchMyEventUsers();
  }, []);

  return (
    <>
      <div className="flex bg-[#ffffffbb] py-4  px-[4vh]  text-xl font-bold">Chat room</div>
      {eventUsers?.map((event) => (
        <Link key={event.id} className="w-[60%]" to={`/chat/${event.Event.id}`}>
          <ChatRoom event={event} />
        </Link>
      ))}
    </>
  );
}
