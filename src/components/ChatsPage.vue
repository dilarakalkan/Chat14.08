<template>
  <q-page>
  <div class="app-container">
    <div class="container" style="width:100% !important;background-color: ">
      <div class="row" style="width:100%">
        <!-- Sağ Konteyner - Chat Window -->
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <PrettyChatWindow
            :projectId="projectId"
            :username="username"
            :secret="secret"
            class="chat-window"
          />
        </div>
      </div>
    </div>
  </div>
  <button @click="logout">cıkıs yap</button>
  </q-page>
</template>

<script>
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { applyReactInVue } from "veaury";
import ChatBox from '@/components/ChatBox.vue';

export default {
  setup() {
   
  },
  
  components: {
    PrettyChatWindow: applyReactInVue(PrettyChatWindow),
  },
  props: {
    username: {
      type: String,
      required: true,
    },
    secret: {
      type: String,
      required: true,
    },
  },
  methods: {
    logout(){
      localStorage.removeItem("user")
      this.$router.go("/auth")
    },
    goToAuthPage() {
      this.$router.push({ name: 'Auth' });
    },
    selectChat(chatId) {
      this.selectedChatId = chatId;
      // Seçilen sohbete göre işlem yapabilirsiniz.
      // Örneğin, PrettyChatWindow'a farklı parametreler gönderebilirsiniz.
    }
  }
};
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
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
}

/* Kapsayıcı Alan */
.container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 800px; 
  height: 500px; 
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  min-width: 0; 
  box-sizing: border-box; /* Padding ve border'ları içerik genişliğine dahil eder */
}


.sidebar {
  background: #2c3e50;
  color: white;
  flex: 0 0 250px; /* Fixed width */
  height: 100vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box; 
}

.chat-window {
  width: 100%;  /* Make the chat window take full width */
  height: 500px; 
  background: #34495e;
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin-left: 20px; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: flex-start;
  overflow-y: auto;
  height: 100%; 
  box-sizing: border-box;
}

.chat-window .emoji {
  font-size: 14px; /* Emoji boyutunu artırdım */
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 1rem;
  color: #333;
}

input {
  width: 100%;
  margin-top: 10px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
}

button {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
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

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.switch-link {
  text-align: center;
  margin-top: 10px;
  color: #3498db;
  cursor: pointer;
  font-size: 14px;
}

.switch-link:hover {
  text-decoration: underline;
}
</style>

