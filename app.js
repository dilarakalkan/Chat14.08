const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",  
    methods: ["GET", "POST","OPTIONS"]
  }
});

io.on('connection', (socket) => {
  console.log("Bir kullanıcı bağlandı: ", socket.id);

  // Kullanıcı bağlandığında hoşgeldin mesajı gönder
  socket.emit("WELCOME,MESSAGE", `Hoşgeldin, Kullanıcı ID: ${socket.id}`);

  // chatMessage olayını dinle ve diğer kullanıcılara gönder
  socket.on("chatMessage", (msg) => {
    console.log("Mesaj alındı: ", msg);
    io.emit("chatMessage", msg);  // Tüm bağlı kullanıcılara mesajı gönder
  });

  socket.on('disconnect', () => {
    console.log("Bir kullanıcı bağlantıyı kesti");
  });
});

server.listen(3000, () => {
  console.log(`Socket.IO sunucusu ${PORT} üzerinde çalışıyor`);
});
