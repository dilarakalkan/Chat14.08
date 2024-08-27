<template>
  <q-layout view="hHh lpR fFf">
    <!-- Ana İçerik -->
    <q-page-container>
      <q-page class="app-container">
        <div class="chat-container">
          <!-- ChatsUser (Contacts) bileşeni -->
          <div class="contacts-container">
            <ChatsUser @selectUser="selectUser" />
          </div>
          
          <!-- Chat Penceresi -->
          <div class="chat-window">
            
            <!-- Dinamik Başlık -->
            <div class="chat-header">
              <h5>{{ selectedUser || 'ChatApp' }}</h5>
            </div>
            <div class="q-pa-md column col justify-end"></div>
            <div class="messages">
              
              <q-chat-message
                name="Me"
                :text="['Hey, how are you?']"
                sent
              />
              <q-chat-message
                name="Jane"
                :text="['Doing fine, how are you?']"
              />
            </div>

            <!-- Mesaj Gönderme Bölümü -->
            <q-footer elevated class="chat-footer">
              <q-toolbar>
                <q-input bottom-slots v-model="message" placeholder="Type your message..." filled dense outlined class="q-input-target">
                  <template v-slot:before>
                    <q-avatar>
                      <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                    </q-avatar>
                  </template>

                  <template v-slot:append>
                    <q-icon v-if="message !== ''" name="close" @click="message = ''" class="cursor-pointer" />
                    <q-icon name="schedule" />
                  </template>

                  <template v-slot:hint>
                    Field hint
                  </template>

                  <template v-slot:after>
                    <q-btn round dense flat icon="send" @click="sendMessage" />
                  </template>
                </q-input>
                <q-btn label="Disconnect" color="primary" @click="disconnect" />
              </q-toolbar>
            </q-footer>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { useRouter } from 'vue-router';
import ChatsUser from '@/components/ChatsUser.vue'; // ChatsUser bileşenini içe aktarın

const stompClient = ref(null);
const message = ref('');
const selectedUser = ref(''); // Seçilen kullanıcıyı izlemek için
const router = useRouter();
const connected = ref(false); // Bağlantı durumunu izlemek için

const connect = () => {
  const socket = new SockJS('http://localhost:8083/websocket');
  
  stompClient.value = Stomp.over(socket);

  stompClient.value.connect({}, (frame) => {
    console.log('Connected: ' + frame);
    connected.value = true; // Bağlantı başarılı
    stompClient.value.subscribe('/topic/chat', (message) => {
      showMessage(JSON.parse(message.body).content);
    });
  }, (error) => {
    console.error('WebSocket connection error:', error);
    connected.value = false; // Bağlantı hatalı
  });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("user-token");
  router.push("/auth");
};

const disconnect = () => {
  if (stompClient.value) {
    stompClient.value.disconnect(() => {
      console.log('Disconnected');
      connected.value = false;
    });
  }
};

const sendMessage = () => {
  if (connected.value && message.value.trim() !== '') {
    stompClient.value.send('/app/chat', {}, JSON.stringify({ content: message.value }));
    message.value = '';
  } else if (!connected.value) {
    console.error('WebSocket connection is not established.');
  } else {
    console.warn('Boş mesaj gönderilemez.');
  }
};

const showMessage = (msg) => {
  // Mesajları ekranda göstermek için bu fonksiyonu kullan
  console.log('Received message:', msg);
};

const selectUser = (userName) => {
  selectedUser.value = userName;
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
  background-color: #f5f5f5; /* Daha soft bir arka plan rengi */
  font-family: 'Roboto', sans-serif; /* Modern bir font ailesi */
}

.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.chat-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}

.contacts-container {
  width: 25%;
  height: 100%;
  margin-right: 20px;
  background-color: #ffffff; /* Beyaz bir arka plan */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Hafif bir gölgelendirme */
  overflow: hidden;
}

.chat-window {
  flex-grow: 1;
  height: 80vh;
  background: #ffffff; /* Beyaz bir arka plan */
  color: #333333; /* Siyah metin rengi */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Hafif bir gölgelendirme */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  position: relative;
}

.chat-header {
  width: 100%;
  background-color: #3f51b5; /* Mavi bir arka plan rengi */
  border-radius: 10px;
  margin-bottom: 10px;
  color: white;
  text-align: center;
  padding: 10px 0;
  font-size: 18px;
}

.messages {
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  background-color: #f1f1f1; /* Soft bir gri arka plan rengi */
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.q-input-target {
  flex-grow: 1;
  background-color: #ffffff; /* Beyaz bir arka plan */
  border-radius: 20px; /* Yuvarlatılmış köşeler */
  padding: 10px;
  border: 1px solid #cccccc; /* Hafif bir çerçeve */
}

.q-btn {
  flex-shrink: 0;
  white-space: nowrap;
  background-color: #3f51b5; /* Mavi buton */
  color: white;
  border-radius: 20px; /* Yuvarlatılmış köşeler */
  padding: 5px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Buton gölgesi */
}

.q-btn:hover {
  background-color: #303f9f; /* Hover durumunda daha koyu mavi */
}

.chat-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #3f51b5; /* Mavi arka plan rengi */
  border-radius: 0 0 10px 10px;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px; /* Elemanlar arasındaki boşluk */
}
</style>