import { useEffect } from "react";

import "../src/App.css";
import socket from "./config/socket";
import Router from "./routes/Router";

function App() {
  useEffect(() => {
    return () => socket.disconnect(); // disconnect connection when leave chat room
  }, []);

  return <Router />;
}

export default App;
