<template>
    <div class="chat-list">
      <ul>
        <li 
          v-for="chat in chats" 
          :key="chat.id" 
          @click="selectChat(chat.id)"
          :class="{'active': chat.id === selectedChatId}"
        >
          {{ chat.name }}
          <p>{{ chat.lastMessage }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatList',
    props: {
      chats: {
        type: Array,
        required: true
      },
      selectedChatId: {
        type: Number,
        required: true
      }
    },
    methods: {
      selectChat(chatId) {
        this.$emit('chatSelected', chatId);
      }
    }
  }
  </script>
  
  <style scoped>
  .chat-list {
    background-color: rgb(57, 198, 41);
    color: white;
    padding: 10px;
  }
  
  .chat-list ul {
    list-style-type: none;
    padding: 0;
  }
  
  .chat-list li {
    padding: 10px;
    cursor: pointer;
  }
  
  .chat-list li.active {
    background-color: #1e90ff;
  }
  </style>
  