import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import socket from "../config/socket";

export default function NotificationBox() {
  const [isNotification, setIsNotification] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const eventFromId = useSelector((state) => state.event.eventFromId);
  const messageNoification = `Palm send a new message.`;
  const joinEventNoification = `Palm joined your event.`;

  useEffect(() => {
    if (!socket) return;
    socket.on("notification", (noti) => {
      setTitle(eventFromId[noti.data.eventId].title);
      if (noti.type === "TYPE_MESSAGE") {
        setDetail(messageNoification);
      } else if (noti.type === "TYPE_JOIN_ROOM") {
        setDetail(joinEventNoification);
      }
      setIsNotification(true);
      setTimeout(() => {
        setIsNotification(false);
      }, 2000);
    });
    return () => {
      socket.off("notification");
    };
  }, [socket, eventFromId]);

  return (
    <>
      {isNotification && (
        <div className="fixed top-[5vh] w-full text-center px-[2vh] z-50">
          <div className="rounded-lg drop-shadow-md">
            <div className="px-4 py-2 bg-[#E5E5E5] border-b-2 border-[#AAAAAA] flex justify-between rounded-t-lg text-xs font-bold">
              <div>Event: {title}</div>
              <div className="text-xs">4m</div>
            </div>
            <div className="flex justify-between items-center bg-white rounded-b-lg p-4">
              <div>{detail}</div>
              <div className="bg-[#EB4E53] rounded-full w-2 h-2"></div>
            </div>
          </div>
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
