<template>
    <div class="app-container">
      <div class="chat-window">
        <div id="chat" class="messages">
        </div>
        <form @submit.prevent="sendMessage">
          <input v-model="message" placeholder="Type your message..." />
          <q-btn label="Send" color="red" ></q-btn>
          <button type="button" @click="disconnect">Disconnect</button>
          <button type="button" @click="logout">çıkış</button>
        
        </form>
      </div>
    </div>
    
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { useRouter } from 'vue-router';

const stompClient = ref(null);
const message = ref('');
const router = useRouter();

const connect = () => {
  const socket = new SockJS('http://localhost:8083/websocket');

  stompClient.value = Stomp.over(socket);

  stompClient.value.connect({}, (frame) => {
    console.log('Connected: ' + frame);
    stompClient.value.subscribe('/topic/chat', (message) => {
      showMessage(JSON.parse(message.body).content);
    });
  });
};
const logout = ()=>{
  localStorage.removeItem("user")
  localStorage.removeItem("user-token")
  router.go("/auth")
}
const disconnect = () => {
  if (stompClient.value) {
    stompClient.value.disconnect();
  }
  console.log('Disconnected');
};

const sendMessage = () => {
  if (message.value && stompClient.value && stompClient.value.connected) {
    stompClient.value.send('/app/chat', {}, JSON.stringify({ content: message.value }));
    message.value = '';
  } else {
    console.error('WebSocket connection is not established.');
  }
};

const showMessage = (msg) => {
  const chatDiv = document.getElementById('chat');
  const p = document.createElement('p');
  p.textContent = msg;
  chatDiv.appendChild(p);
  chatDiv.scrollTop = chatDiv.scrollHeight; // Yeni mesaj geldiğinde otomatik olarak en sona kaydır
};

onMounted(() => {
  connect();
});

onBeforeUnmount(() => {
  disconnect();
});

</script>

<style scoped>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chat-window {
  width: 400px;
  height: 80vh; 
  background: #34495e;
  color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: flex-start;
  box-sizing: border-box;
}

.messages {
  flex-grow: 1;
  overflow-y: auto;
  width: 100%;
  background-color: #2c3e50;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.chat-window .emoji {
  font-size: 14px; 
}

form {
  display: flex;
  flex-direction: row;
  width: 100%;
}

input {
  flex-grow: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #2980b9;
}
</style>
