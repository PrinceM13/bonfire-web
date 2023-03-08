import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import socket from "../config/socket";
import * as eventApi from "../api/event-api";
import { Link, useNavigate } from "react-router-dom";

export default function NotificationBox() {
  const [isNotification, setIsNotification] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const eventFromId = useSelector((state) => state.event.eventFromId);
  const messageNoification = ` send a new message.`;
  const joinEventNoification = ` joined your event.`;

  const [link, setLink] = useState("");
  const [timeoutId, setTimeoutId] = useState();
  const navigate = useNavigate();

  const handleClick = () => {
    clearTimeout(timeoutId);
    setIsNotification(false);
    setTimeout(() => {
      navigate(link);
    }, 150);
  };

  useEffect(() => {
    if (!socket) return;
    let thisEvent;
    const fetchEventById = async (eventId) => {
      const res = await eventApi.getEventsById(eventId);
      thisEvent = res.data.event;
    };

    socket.on("notification", async (noti) => {
      const eventId = noti.data.eventId;
      const username = noti.data.username;

      thisEvent = eventFromId[eventId];
      if (!thisEvent) {
        await fetchEventById(eventId);
      }
      setTitle(thisEvent.title);

      if (noti.type === "TYPE_MESSAGE") {
        setLink("/chat/" + eventId);
        setDetail(username + messageNoification);
      } else if (noti.type === "TYPE_JOIN_ROOM") {
        setLink("/events/" + eventId);
        setDetail(username + joinEventNoification);
      }

      setIsNotification(true);
      const id = setTimeout(() => {
        setIsNotification(false);
      }, 3000);
      setTimeoutId(id);
    });
    return () => {
      clearTimeout(timeoutId);
      socket.off("notification");
    };
  }, [socket, eventFromId]);

  return (
    <>
      {isNotification && (
        <div className="fixed top-[5vh] w-full text-center px-[2vh] z-50">
          {/* <Link to={link}> */}
          <div onClick={handleClick} className="rounded-lg drop-shadow-md">
            <div className="px-4 py-2 bg-[#E5E5E5] border-b-2 border-[#AAAAAA] flex justify-between rounded-t-lg text-xs font-bold">
              <div>Event: {title}</div>
            </div>
            <div className="flex justify-between items-center bg-white rounded-b-lg p-4">
              <div>{detail}</div>
            </div>
          </div>
          {/* </Link> */}
          {/* <div className="rounded-lg drop-shadow-md">
            <div className="px-4 py-2 bg-[#E5E5E5] border-b-2 border-[#AAAAAA] flex justify-between rounded-t-lg text-xs font-bold">
              <div>Event: เหงาจังอยากกินหม่าล่า @Mint tower</div>
              <div className="text-xs">4m</div>
            </div>
            <div className="flex justify-between items-center bg-white rounded-b-lg p-4">
              <div>Parames send a new message</div>
              <div className="bg-[#EB4E53] rounded-full w-2 h-2"></div>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
}
