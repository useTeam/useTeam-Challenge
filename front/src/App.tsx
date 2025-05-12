import { useEffect, useState } from "react";
import "./App.css";
import { io, Socket } from "socket.io-client";
import Board from "./components/board/Board";

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socket = io(import.meta.env.VITE_API_BASE_URL, {});
    setSocket(socket);
  }, []);

  return (
    <div className="flex flex-col h-screen w-full bg-[#1f2c52] ">
      <header className="  text-white text-center mt-10">
        <h1 className="text-4xl font-extrabold font-serif">TASKS MANAGER</h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <Board socket={socket} />
      </main>
    </div>
  );
}

export default App;

