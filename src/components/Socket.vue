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
  <div class="socket"></div>
</template>

<script>


export default {
  data() {
    return {
      socket: null,
      connected: false,
      messages: '',
      inputMessage: ""
      
    };
  },
  mounted() {
    // Socket.IO bağlantısını başlat
    this.socket = io("http://localhost:3000");
  

    // Bağlantı kurulduğunda tetiklenen olay
    this.socket.on("connect", () => {
      this.connected = true;
      console.log("Sunucuya bağlanıldı:", this.socket.id);
    });

    // Bağlantı koptuğunda tetiklenen olay
    this.socket.on("disconnect", () => {
      this.connected = false;
      console.log("Sunucudan bağlantı kesildi.");
    });

    // Sunucudan gelen "message" olayını dinle
    this.socket.on("message", (msg) => {
      this.messages.push(msg);
    });
  },
  methods: {
    sendMessage() {
      if (this.inputMessage.trim()) {
        // "message" olayını tetikle
        this.socket.emit("message", this.inputMessage);
        this.inputMessage = "";
      }
    }
  },
  beforeUnmount() {
    this.socket.disconnect(); 
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
