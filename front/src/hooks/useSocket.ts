import { useEffect } from "react"
import { Socket } from "socket.io-client"
import { SUBSCRIBE } from "../interfaces/services/socket/subscribe"

export const useSocket = (socket: Socket | null, refetchColumns: () => void) => {
 useEffect(() => {
  if (!socket) return 
  
  const handleUpdate = () => refetchColumns()

  socket.on(SUBSCRIBE.CARD_COLUMN_UPDATED, handleUpdate);
  socket.on(SUBSCRIBE.COLUMN_CREATED, handleUpdate);
  socket.on(SUBSCRIBE.CARD_CREATED, handleUpdate);

  return () => {
    socket.off(SUBSCRIBE.CARD_COLUMN_UPDATED, handleUpdate);
    socket.off(SUBSCRIBE.COLUMN_CREATED, handleUpdate);
    socket.off(SUBSCRIBE.CARD_CREATED, handleUpdate);
  };

 }, [socket, refetchColumns])
}