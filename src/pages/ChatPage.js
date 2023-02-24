import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import io from "socket.io-client";
import InsertPhotoIcon from "../assets/icons/InsertPhotoIcon";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);
  const [clientId, setClientId] = useState();
  const [messages, setMessages] = useState([
    { eventId: 999, user: 1, content: "dummy_msg_1" },
    { eventId: 999, user: 2, content: "dummy_msg_2" },
    { eventId: 999, user: 2, content: "dummy_msg_3" }
  ]);

  const param = useParams();
  const room = param.eventId;

  const navigate = useNavigate();

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_ENDPOINT_URL);
    newSocket.emit("joinRoom", room);
    setSocket(newSocket);
    return () => newSocket.disconnect();
  }, []);

  // get client id from socket
  socket?.on("connect", () => setClientId(socket?.id));

  useEffect(() => {
    if (!socket) return;
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    return () => socket.off("message");
  }, [socket]);

  const handleSend = (e) => {
    e.preventDefault();
    socket.emit("message", { eventId: room, user: clientId, content: input });
    setInput("");
  };
  const handleOnInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-2 rounded-full font-bold text-white">
        Yes, I will go
      </button>
      <button
        onClick={() => {
          socket.emit("leaveRoom", room);
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
            ${msg.user === clientId ? "text-right" : ""}
            ${msg.user === "connect" ? "text-center text-green-700" : ""}
            ${msg.user === "disconnect" ? "text-center text-red-700" : ""}
            `}
            key={idx}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend}>
        <div className="flex justify-between items-center bg-white h-[8vh] px-4 bottom-0 right-0 fixed w-full shadow-lg">
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
