<template>
  <q-layout view="hHh lpR fFf">
    <!-- Ana İçerik -->
     
    <q-page-container>
      <q-page class="app-container">
       
        
        <!-- ChatsUser (Contacts) bileşeni -->
        <div class="contacts-container">
          <KeepAlive>
          <ChatsUser @selectUser="selectUser" />
          </KeepAlive>
        </div>
        
        <!-- We remove the right container (chat-window) -->
         
        
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import ChatsUser from '@/components/ChatsUser.vue';



const message = ref('');
const selectedUser = ref('');

const selectUser = (userName) => {
  selectedUser.value = userName;
};

const sendMessage = () => {
  console.log('Message sent:', message.value);
  message.value = '';
};


const disconnect = () => {
  console.log('Disconnected');
};
</script>

<style scoped>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
}

.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* Adjust contacts-container to fill the space if needed */
.contacts-container {
  width: 100%; /* Change to 100% to fill the available space */
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Remove the .chat-window styles */
</style>

<style scoped>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
}

.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgb(255, 255, 255);
}

.chat-container {
  display: flex;
  height: 90vh;
  width: 100%;
  justify-content: space-between;

}

.contacts-container {
  width: 75%; 
  height: 100%;
  margin-right: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.chat-window {
  flex-grow: 1;
  height: 90vh;
  background: #ffffff;
  background-color: purple;
  color: #333333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  position: relative;
}

.chat-header {
  width: 100%;
  height: 20%;
  background-color: #3f51b5;
  border-radius: 10px;
  margin-bottom: 10px;
  color: white;
  text-align: center;
  padding: 10px 0;
  font-size: 10px;
}

.messages {
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.q-input-target {
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid #cccccc;
}

.q-btn {
  flex-shrink: 0;
  white-space: nowrap;
  background-color: #3f51b5;
  color: white;
  border-radius: 20px;
  padding: 5px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.q-btn:hover {
  background-color: #303f9f;
}

.chat-footer {
  width: 100%;
  height: 15%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #3f51b5;
  border-radius: 0 0 10px 10px;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
