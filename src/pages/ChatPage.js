import { useEffect, useState } from "react";
import io from "socket.io-client";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState(["dummy_msg_1", "dummy_msg_2"]);

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_ENDPOINT_URL);
    console.log(process.env.REACT_APP_ENDPOINT_URL);
    setSocket(newSocket);
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
    socket.emit("message", input);
    setInput("");
  };
  const handleOnInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-2 rounded-full font-bold text-white">
          Yes, I will go
        </button>
      </div>
      <div>
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <form onSubmit={handleSend}>
        <div className="flex">
          <input
            className="px-2 py-1 border border-blue-500 rounded-lg"
            onChange={handleOnInputChange}
            value={input}
          />
          <button className="px-2 py-1 border border-blue-500 rounded-lg">SEND</button>
        </div>
      </form>
    </div>
  );
}
