<template>
 
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
// import SockJS from 'sockjs-client';
// import { Stomp } from '@stomp/stompjs';

// STOMP Client ve mesajları tutacak reaktif değişkenler
// const stompClient = ref(null);
const message = ref('');
const messages = ref([]);

// WebSocket bağlantısını kurma fonksiyonu
/*
const connect = () => {
  stompClient.value = Stomp.over(() => new SockJS('http://localhost:8083/websocket'));

  stompClient.value.connect({}, (frame) => {
    console.log('Connected: ' + frame);
    stompClient.value.subscribe('/topic/chat', (msg) => {
      showMessage(JSON.parse(msg.body).content);
    });
  }, (error) => {
    console.error('WebSocket connection error:', error);
  });
};
*/

// WebSocket bağlantısını kesme fonksiyonu
/*
const disconnect = () => {
  if (stompClient.value) {
    stompClient.value.disconnect(() => {
      console.log('Disconnected');
    });
  }
};
*/

// Mesaj gönderme fonksiyonu
const sendMessage = () => {
  /*
  if (stompClient.value && stompClient.value.connected && message.value.trim() !== '') {
    stompClient.value.send('/app/chat', {}, JSON.stringify({ content: message.value }));
    showMessage(message.value);  // Gönderilen mesajı hemen göster
    message.value = '';  // Mesaj alanını temizle
  } else {
    console.error('WebSocket connection is not established or message is empty.');
  }
  */
  // Without WebSocket, you might simply push the message to the array:
  if (message.value.trim() !== '') {
    showMessage(message.value);
    message.value = '';
  }
};

// Gelen mesajları ekranda göstermek için
const showMessage = (msg) => {
  messages.value.push(msg);  // Mesajı array'e ekle
};

// Component yüklendiğinde WebSocket bağlantısını kur
/*
onMounted(() => {
  connect();
});
*/

// Component kaldırılmadan önce WebSocket bağlantısını kes
/*
onBeforeUnmount(() => {
  disconnect();
});
*/
</script>

