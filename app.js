
const appJs = ()=>{
    const socketio = require("socket.io");
    const express = require('express');
    const http = require('http');
    const app = express();
    const PORT=process.env.PORT ||8083
    
    const server = http.createServer(app);
    const io = new Server(server, {
      cors: {
        origin: "*",  // Vue.js istemcisinin çalıştığı adres
        methods: ["GET", "POST","OPTIONS"]
      },
    });
    
    //olayı dinlemek istediğimizde on ,tetiklemek istediğimizde emit
    server.listen(8083, () => {
        io.on('connection', socket => {
            console.log("Bir kullanıcı sunucuya bağlandı")
            console.log(socket.id);
            socket.emit("WELCOME,MESSAGE",'hosgeldin ${}')
     
    })
      }); 
    
      console.log('Socket ${PORT} üzerinde çalışıyor');
    return{
       
        
    }
}
export default appJs

