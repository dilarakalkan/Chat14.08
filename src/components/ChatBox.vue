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
      // ws: null, // WebSocket bağlantısı şimdilik devre dışı
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
    // this.connectToWebSocket(); // WebSocket bağlantısını şimdilik devre dışı
  },
  methods: {
    connectToWebSocket() {
      // WebSocket bağlantısını geçici olarak yorum satırına alıyoruz
      // this.ws = new WebSocket('ws://localhost:8085/ws');
      // this.ws.onmessage = (event) => {
      //   const message = JSON.parse(event.data);
      //   const chat = this.chats.find(chat => chat.id === message.chatId);
      //   if (chat) {
      //     chat.messages.push(message);
      //     if (chat.id === this.selectedChatId) {
      //       this.messages.push(message);
      //     }
      //   }
      // };

      // this.ws.onerror = (error) => {
      //   console.error('WebSocket Error: ', error);
      // };
    },
    onSubmit() {
      if (this.text !== '' && this.selectedChatId) {
        const chatMessage = {
          sender: this.username,
          content: this.text,
          chatId: this.selectedChatId, // chatId'yi ekledik
        };
        // this.ws.send(JSON.stringify(chatMessage)); // Mesaj gönderme şimdilik devre dışı
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
