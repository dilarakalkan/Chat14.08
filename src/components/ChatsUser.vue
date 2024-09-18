<template>
  <div class="chat-app-container">
    <!-- Contact List -->
    <div class="contacts-container">
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-toolbar-title>Chats</q-toolbar-title>
      </q-toolbar>

      <!-- Input with "+" button on the right -->
      <div class="q-my-md row items-center no-wrap">
        <q-input
          filled
          rounded
          placeholder="Add new chat"
          prepend-inner-icon="search"
          class="col"
        />
        <q-btn
          round
          icon="add"
          color="primary"
          @click="addNewChat"
          class="q-ml-sm"
        />
      </div>

      <q-list bordered>
        <q-item
          v-for="contact in contacts"
          :key="contact.id"
          class="q-my-sm"
          clickable
          v-ripple
          @click="selectUser(contact.id)"
        >
          <q-item-section avatar>
            <q-avatar>
              <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chat_bubble" color="green" />
          </q-item-section>
        </q-item>

        <q-separator />
        <q-item-label header>Offline</q-item-label>

        <q-item
          v-for="contact in offline"
          :key="contact.id"
          class="q-mb-sm"
          clickable
          v-ripple
          @click="selectUser(contact.id)"
        >
          <q-item-section avatar>
            <q-avatar>
              <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chat_bubble" color="grey" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <!-- Chat Window -->
    <div class="chat-content">
      <div class="chat-window">
        <div class="chat-header">
          <h6>{{ selectedUserName || 'ChatApp' }}</h6>
        </div>

        <q-card-section class="text-center">Yesterday</q-card-section>

        <div class="messages">
          <keep-alive>
            <q-chat-message
              v-for="(message, index) in messages"
              :key="index"
              :name="message.name"
              avatar="https://cdn.quasar.dev/img/avatar2.jpg"
              :text="message.text"
              :sent="message.sent"
              
            />
          </keep-alive>
        </div>

        <!-- Chat Input -->
        <div class="chat-footer">
          <q-input
            filled
            v-model="messageInput"
            placeholder="Type a message..."
            @keyup.enter="sendMessage"
          />
          <q-btn round dense flat icon="send" @click="sendMessage" />
          <q-btn label="Disconnect" color="primary" @click="disconnect" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref ,onMounted,onBeforeUnmount} from "vue";
import Socket from "./Socket.vue";

import { io } from 'socket.io-client';

export default {
  components: {
    Socket, 
  },
  setup() {
    const selectedUser = ref();
    const selectedUserName = ref("");
    const messages = ref([]);
    const messageInput = ref("");
    const socket = io('ws://localhost:3000');

    
    const contacts = [
      { id: "ali", name: "Ali", avatar: "avatar1.jpg" },
      { id: "medipol", name: "Medipol 4.sınıf", avatar: "avatar5.jpg" }
    ];

    const offline = [
      { id: "zeynep", name: "Zeynep", avatar: "avatar6.jpg" }
    ];

    const selectUser = (userId) => {
      selectedUser.value = userId;

      if (userId === "ali") {
        selectedUserName.value = "Ali";
        messages.value = [
          { name: "Me", text: ["Merhaba"], sent: true },
          { name: "Ali", text: ["merhaba?"] },
     
        ];
      } else if (userId === "medipol") {
        selectedUserName.value = "Medipol 4.sınıf";
        messages.value = [
          { name: "Me", text: ["Hi!"], sent: true },
          { name: "Medipol", text: ["Hi, how are you?"] }
        ];
      } else if (userId === "zeynep") {
        selectedUserName.value = "Zeynep";
        messages.value = [
          { name: "Me", text: ["Merhaba Zeynep"], sent: true },
          { name: "Zeynep", text: ["Merhaba!"] }
        ];
      }
    };

 // Mesaj gönderme fonksiyonu
    const sendMessage = () => {
      console.log("Here!");
      debugger;
      if (messageInput.value !== "") {
        // Mesajı Socket.IO sunucusuna gönder
        socket.emit("message", {
      name: "Me",
      text: messageInput.value
    });

        messages.value.push({
          name: "Me",
          text: [messageInput.value],
          sent: true
        });
        messageInput.value = "";
      }
    };
    

    const addNewChat = () => {
      console.log("New chat button clicked");
    };

    const disconnect = () => {
      console.log("Disconnected");
    };

    onMounted(() => {
      socket.value = io("ws://localhost:3000"); // Sunucu adresini belirleyin

      // Gelen mesajları dinle
      socket.value.on("message", (message) => {
        messages.value.push({
          name: message.name,
          text: message.text,
          sent: false
        });
      });
    });


    onBeforeUnmount(() => {
      if (socket.value) {
        socket.value.disconnect();
      }
    });

    return {
      contacts,
      offline,
      selectedUser,
      selectedUserName,
      messages,
      messageInput,
      selectUser,
      sendMessage,
      addNewChat,
      disconnect
    };
  }
};
</script>

<style scoped>
.chat-app-container {
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
}

.contacts-container {
  width: 30%;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  padding: 0;
}

.q-toolbar {
  background-color: #3f51b5;
}

.chat-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #e9e9ef;
  padding: 0;
}

.chat-window {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.chat-header {
  padding: 16px;
  background-color: #3f51b5;
  color: white;
  border-radius: 8px 8px 0 0;
  text-align: center;
}

.messages {
  flex: 1;
  margin: 16px 0;
  overflow-y: auto;
}

.chat-footer {
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #f7f7f7;
  border-top: 1px solid #ddd;
}

.q-input {
  flex: 1;
  margin-right: 8px;
}

.q-btn {
  margin-left: 8px;
}

.q-list {
  flex: 1;
  overflow-y: auto;
  padding: 0 16px;
}

.q-item {
  border-radius: 8px;
  padding: 12px;
  transition: background-color 0.3s ease;
}

.q-item:hover {
  background-color: #e0e0e0;
}

.q-avatar {
  width: 48px;
  height: 48px;
}

.q-item-section[side] {
  display: flex;
  align-items: center;
}

.q-separator {
  margin: 16px 0;
}

.q-item-label[header] {
  color: #9e9e9e;
  font-weight: bold;
}

.chat-footer .q-btn {
  background-color: #3f51b5;
  color: white;
}

@media (max-width: 768px) {
  .contacts-container {
    width: 100%;
    height: 50%;
  }

  .chat-content {
    height: 50%;
  }
}

</style>
