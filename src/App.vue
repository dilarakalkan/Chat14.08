<template>
  <div id="app" class="app-container">
    <Navbar v-if="isAuthenticated" class="navbar" />
    <div class="content-container">
      <Sidebar v-if="user" class="sidebar" />
      <div class="main-content">
        <router-view />
        <!-- WebSocket bileşenini ekliyoruz -->
        <WebSocket />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import WebSocket from './components/WebSocket.vue';

const user = ref(null);
const router = useRouter();
const isAuthenticated = computed(() => !!user.value);

// Sayfa yenilendiğinde kullanıcının oturum bilgilerini kontrol edin
onMounted(() => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    user.value = storedUser;
  } else {
    router.push('/auth');
  }
});
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}

body, html {
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
}

.navbar {
  flex: 0 0 auto;
}

.content-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}

.sidebar {
  flex: 0 0 250px; /* Sidebar genişliği */
  height: 100vh;
  background-color: #34495e; /* Sidebar arka plan rengi */
  color: white;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  overflow: auto;
  background-color: #ecf0f1; /* Ana içerik arka plan rengi */
}
</style>