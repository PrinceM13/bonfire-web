import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import socket from "../config/socket";
import * as eventApi from "../api/event-api";
import { useNavigate } from "react-router-dom";
import { getAllEvents } from "../redux/event-slice";

export default function NotificationBox() {
  const [isNotification, setIsNotification] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const eventFromId = useSelector((state) => state.event.eventFromId);
  const currentChatRoom = useSelector((state) => state.chat.currentChatRoom);
  const messageNoification = ` send a new message.`;
  const joinEventNoification = ` joined your event.`;

  const [link, setLink] = useState("");
  const [timeoutId, setTimeoutId] = useState();
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
      let username = eventFromId[eventId]?.EventUsers.filter(
        (el) => el.userId === +noti.data.userId
      )[0]?.User.username;

      // new member
      if (!username) {
        dispatch(getAllEvents());
        username = "new user";
      }

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

      if (+currentChatRoom !== +eventId) {
        setIsNotification(true);
        const id = setTimeout(() => {
          setIsNotification(false);
        }, 3000);
        setTimeoutId(id);
      }
    });
    return () => {
      clearTimeout(timeoutId);
      socket.off("notification");
    };
  }, [socket, eventFromId, currentChatRoom]);

  return (
    <>
      {isNotification && (
        <div className="fixed top-[5vh] w-full text-center px-[2vh] z-50 cursor-pointer">
          <div onClick={handleClick} className="rounded-lg drop-shadow-md">
            <div className="px-4 py-2 bg-[#E5E5E5] border-b-2 border-[#AAAAAA] flex justify-between rounded-t-lg text-xs font-bold">
              <div>Event: {title}</div>
            </div>
            <div className="flex justify-between items-center bg-white rounded-b-lg p-4">
              <div>{detail}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
