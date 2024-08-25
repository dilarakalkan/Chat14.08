<template>
  <q-page>
<div class="app-container">
  <div class="chat-window">
    <div id="chat" class="messages">
    </div>
  </div>
</div>
</q-page>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';

const stompClient = ref(null);
const message = ref('');

const connect = () => {
const socket = new SockJS('/http://localhost:808/websocket');
stompClient.value = Stomp.over(socket);

stompClient.value.connect({}, (frame) => {
  console.log('Connected: ' + frame);
  stompClient.value.subscribe('/topic/chat', (message) => {
    showMessage(JSON.parse(message.body).content);
  });
});
};

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
p.appendChild(document.createTextNode(msg));
chatDiv.appendChild(p);
};

onMounted(() => {
connect();
});

onBeforeUnmount(() => {
disconnect();
});
</script>
