<template>
    <div>
      <h2>Socket.IO Bağlantısı</h2>
      <p>Bağlantı durumu: {{ connected ? "Bağlı" : "Bağlı değil" }}</p>
      <input v-model="inputMessage" placeholder="Mesaj yazın" />
      <button @click="sendMessage">Mesaj Gönder</button>
      <ul>
        <li v-for="message in messages" :key="message">{{ message }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { io } from "socket.io-client";
  
  export default {
    data() {
      return {
        socket: null,
        connected: false,
        messages: [],
        inputMessage: ""
      };
    },
    mounted() {
      // Eğer sunucu ve istemci farklı domainlerde çalışıyorsa buraya sunucunun adresini girin
      this.socket = io("http://localhost:8083");  // Sunucuya bağlanma
  
      // Bağlantı kurulduğunda
      this.socket.on("connect", () => {
        this.connected = true;
        console.log("Sunucuya bağlanıldı:", this.socket.id);
      });
  
      // Bağlantı kesildiğinde
      this.socket.on("disconnect", () => {
        this.connected = false;
        console.log("Sunucudan bağlantı kesildi.");
      });
  
      // Sunucudan gelen mesajları dinle
      this.socket.on("chatMessage", (msg) => {
        this.messages.push(msg);
      });
    },
    methods: {
      sendMessage() {
        if (this.inputMessage.trim()) {
          this.socket.emit("chatMessage", this.inputMessage);  // Mesajı sunucuya gönder
          this.inputMessage = "";
        }
      }
    },
    beforeDestroy() {
      this.socket.disconnect();  // Bileşen yok olduğunda bağlantıyı kes
    }
  };
  </script>
  
  <style scoped>
  h2 {
    color: #42b983;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 5px;
    background-color: #f0f0f0;
    margin: 5px 0;
    border-radius: 5px;
  }
  </style>
  