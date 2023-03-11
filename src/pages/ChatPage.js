import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../config/socket";
import InsertPhotoIcon from "../assets/icons/InsertPhotoIcon";
import { useDispatch, useSelector } from "react-redux";
import Message from "../features/chat/Message";
import { getAllChatByEventId } from "../api/chat-api";
import useScrollTo from "../hook/useScrollTo";
import { setCurrentChatRoom } from "../redux/chat-slice";

export default function ChatPage() {
  const authenticatedUser = useSelector((state) => state.auth.authenticatedUser);
  const eventFromId = useSelector((state) => state.event.eventFromId);
  const currentChatRoom = useSelector((state) => state.chat.currentChatRoom);
  const [isDummyFooter, setIsDummyFooter] = useState(true);
  const setDummyOn = () => setIsDummyFooter(true);
  const setDummyOff = () => setIsDummyFooter(false);
  const scrollTo = useScrollTo(setDummyOff);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const param = useParams();
  const eventId = param.eventId;

  let isChatFromSameUser;
  let previousUserId;

  const timeOption = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentChatRoom(eventId));
    return () => dispatch(setCurrentChatRoom(""));
  }, [eventFromId, currentChatRoom]);

  useEffect(() => {
    const fetchChatByEventId = async () => {
      const res = await getAllChatByEventId(eventId);
      const chats = res.data.chats;

      const dbChat = chats.map((chat) => {
        const time = new Date(chat.createdAt).toLocaleTimeString("en-US", timeOption);
        return {
          ...chat,
          username: eventFromId[eventId]?.EventUsers.filter((el) => el.userId === chat.userId)[0]
            ?.User.username,
          profileImage: eventFromId[eventId]?.EventUsers.filter(
            (el) => el.userId === chat.userId
          )[0]?.User.profileImage,
          time
        };
      });
      setMessages(dbChat);
    };
    fetchChatByEventId();
  }, [eventFromId]);

  useEffect(() => {
    scrollTo.action();
    setTimeout(() => {
      setDummyOff();
    }, 1500);
  }, [messages, eventFromId]);

  useEffect(() => {
    if (!socket) return;
    socket.on("message", (data) => {
      const time = new Date(data.createdAt).toLocaleTimeString("en-US", timeOption);
      data.eventId === eventId &&
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            ...data,
            username: eventFromId[eventId]?.EventUsers.filter((el) => el.userId === data.userId)[0]
              ?.User.username,
            profileImage: eventFromId[eventId]?.EventUsers.filter(
              (el) => el.userId === data.userId
            )[0]?.User.profileImage,
            time
          }
        ]);
      setDummyOn();
      setTimeout(() => {
        scrollTo.action();
      }, 500);
      setInput("");
    });
    return () => socket.off("message");
  }, [socket, eventFromId]);

  const handleSend = (e) => {
    e.preventDefault();
    socket.emit("message", {
      eventId,
      userId: authenticatedUser.id,
      message: input
    });
    setDummyOn();
    setTimeout(() => {
      scrollTo.action();
    }, 500);
    setInput("");
  };
  const handleOnInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <>
        <div className="flex flex-col items-center">
          {authenticatedUser?.id !== eventFromId[eventId]?.userId && (
            <button
              onClick={() =>
                socket.emit("joinEvent", {
                  eventId,
                  userId: authenticatedUser.id,
                  username: authenticatedUser.username
                })
              }
              className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-2 rounded-full font-bold text-white mt-[3vh]"
            >
              Yes, I will go
            </button>
          )}
          <div className="w-full p-4 rounded-lg">
            {messages.map((msg, idx) => {
              isChatFromSameUser = msg.userId === previousUserId;
              previousUserId = msg.userId;
              return (
                <Message
                  key={idx}
                  isMyMessage={msg.userId === authenticatedUser.id}
                  username={isChatFromSameUser ? "" : msg.username}
                  profileImage={msg.profileImage}
                  message={msg.message}
                  time={msg.time}
                />
              );
            })}
          </div>
        </div>
        <div ref={scrollTo.ref} className={` ${isDummyFooter ? "" : "hidden"}`}></div>
      </>
      <form onSubmit={handleSend}>
        <div className="flex justify-between items-center bg-white h-[8vh] px-4 bottom-[-1px] right-0 fixed w-full shadow-lg">
          <div className="flex gap-4 w-full ">
            <div className="flex items-center">
              <InsertPhotoIcon />
            </div>
            <div className="bg-gradient-to-b from-[#6A6A6A] to-[#D4D4D4] p-[1.5px] w-full rounded-full flex justify-between">
              <div className="flex w-full h-full items-center justify-center bg-white rounded-full p-1 px-2 ">
                <input
                  className="w-full outline-none"
                  onChange={handleOnInputChange}
                  value={input}
                />
                <div className=" right-2 top-2">
                  <button className="font-bold">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
