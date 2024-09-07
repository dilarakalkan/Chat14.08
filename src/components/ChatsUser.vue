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
          <h5>{{ selectedUserName || 'ChatApp' }}</h5>
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
import { ref } from "vue";

export default {
  setup() {
    const selectedUser = ref(null);
    const selectedUserName = ref("");
    const messages = ref([]);
    const messageInput = ref("");

    // Unique avatars for each contact
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
          { name: "Ali", text: ["nasılsın?"] }
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

    const sendMessage = () => {
      if (messageInput.value !== "") {
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
}

.contacts-container {
  width: 30%;
  padding: 10px;
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
}

.chat-content {
  width: 70%; /* Adjusted to maintain proportional width */
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.chat-window {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.chat-header {
  background-color: #3f51b5;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 8px 8px 0 0;
}

.messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
}

.chat-footer {
  background-color: #3f51b5;
  color: white;
  padding: 10px;
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
}

.chat-footer q-input {
  flex-grow: 1;
}
</style>
