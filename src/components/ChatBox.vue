<template>
  <div class="chat-container">
    <!-- ChatList Bileşeni Kullanılıyor -->
    <ChatList
      :chats="chats"
      :selectedChatId="selectedChatId"
      @chatSelected="selectChat"
    />
    <div class="chat-box">
      <ul>
        <li v-for="msg in messages" :key="msg.id">
          <strong>{{ msg.sender }}:</strong> {{ msg.content }}
        </li>
      </ul>
    </div>
    <form @submit.prevent="onSubmit">
      <input v-model="text" placeholder="Type a message..." />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import ChatList from './ChatList.vue';  // ChatList bileşenini içe aktarın

export default {
  name: 'ChatBox',
  components: {
    ChatList,
  },
  data() {
    return {
      ws: null, // WebSocket bağlantısı
      text: '',
      messages: [],
      chats: [
        // Örnek sohbet nesneleri
        { id: 1, name: 'Chat 1', lastMessage: 'Hello', messages: [] },
        { id: 2, name: 'Chat 2', lastMessage: 'Hi there', messages: [] },
      ],
      selectedChatId: null,
      username: 'a', // Güncel kullanıcı adınızı girin
    };
  },
  created() {
    // this.connectToWebSocket(); // WebSocket bağlantısını oluşturma kısmı devre dışı
  },
  methods: {
    connectToWebSocket() {
      // WebSocket bağlantısını başlat
      this.ws = new WebSocket('ws://localhost:8085/ws');

      this.ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        const chat = this.chats.find(chat => chat.id === message.chatId);
        if (chat) {
          chat.messages.push(message);
          if (chat.id === this.selectedChatId) {
            this.messages.push(message);
          }
        }
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket Error: ', error);
      };
    },
    onSubmit() {
      if (this.text !== '' && this.selectedChatId) {
        const chatMessage = {
          sender: this.username,
          content: this.text,
          chatId: this.selectedChatId, // chatId'yi ekledik
        };
        // this.ws.send(JSON.stringify(chatMessage)); // Mesaj gönderme kısmı devre dışı
        this.text = '';
      }
    },
    selectChat(chatId) {
      this.selectedChatId = chatId;
      const selectedChat = this.chats.find(chat => chat.id === chatId);
      this.messages = selectedChat ? selectedChat.messages : [];
    },
  },
  beforeDestroy() {
    // if (this.ws) {
    //   this.ws.close();
    // }
  },
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.chat-box {
  flex-grow: 1;
  overflow-y: auto;
}

form {
  display: flex;
  margin-top: 10px;
}

input {
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
