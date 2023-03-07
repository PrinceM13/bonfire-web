import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import socket from "../config/socket";
import InsertPhotoIcon from "../assets/icons/InsertPhotoIcon";
import { useSelector } from "react-redux";

export default function ChatPage() {
  const socketId = useSelector((state) => state.chat.socketId);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { eventId: 999, socketId: 1, message: "dummy_msg_1" },
    { eventId: 999, socketId: 2, message: "dummy_msg_2" },
    { eventId: 999, socketId: 2, message: "dummy_msg_3" }
  ]);

  const param = useParams();
  const eventId = param.eventId;

  const navigate = useNavigate();

  useEffect(() => {
    socket.emit("joinRoom", eventId);
    return () => socket.emit("leaveRoom", eventId);
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    return () => socket.off("message");
  }, [socket]);

  const handleSend = (e) => {
    e.preventDefault();
    socket.emit("message", { eventId, socketId, message: input });
    setInput("");
  };
  const handleOnInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div>{socket?.id}</div>
      <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-2 rounded-full font-bold text-white">
        Yes, I will go
      </button>
      <button
        onClick={() => {
          navigate("/chatroom");
        }}
        className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-2 rounded-full font-bold text-white"
      >
        bye
      </button>
      <div className="w-full bg-blue-200 p-4 rounded-lg">
        {messages.map((msg, idx) => (
          <div
            className={`
            ${msg.socketId === socketId ? "text-right" : ""}
            ${msg.socketId === "connect" ? "text-center text-green-700" : ""}
            ${msg.socketId === "disconnect" ? "text-center text-red-700" : ""}
            `}
            key={idx}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend}>
        <div className="flex justify-between items-center bg-white h-[8vh] px-4 bottom-[-1px] right-0 fixed w-full shadow-lg">
          <div className="flex gap-4 w-full ">
            <div className="flex items-center">
              <InsertPhotoIcon />
            </div>
            <div className="flex border-[2px] items-center grow py-2 px-4 relative bg-white  border-gray-500 rounded-full">
              <input className="w-full" onChange={handleOnInputChange} value={input} />
              <div className=" right-2 top-2">
                <button className="font-bold">Send</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
