import { io } from "socket.io-client";

const socket = io("http://localhost:8083", {
  transports: ["websocket"],
  withCredentials: true
});
socket.on("connect", () => {
  console.log("Sunucuya bağlanıldı: ", socket.id);
});

socket.on("WELCOME,MESSAGE", (data) => {
  console.log("Sunucudan gelen mesaj: ", data);
});

export default socket;

