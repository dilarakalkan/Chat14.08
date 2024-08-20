<template>
  <div id="app" class="app-container">
    <Navbar v-if="isAuthenticated" class="navbar" />
    <div class="content-container">
      <Sidebar v-if="user" class="sidebar" />
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';

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
  background: linear-gradient(
    180deg,
    rgba(117, 84, 160, 1) 7%,
    rgba(117, 84, 160, 1) 17%,
    rgba(106, 95, 168, 1) 29%,
    rgba(99, 103, 174, 1) 44%,
    rgba(87, 116, 184, 1) 66%,
    rgba(70, 135, 198, 1) 83%,
    rgba(44, 163, 219, 1) 96%,
    rgba(22, 188, 237, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
  flex: 0 0 250px; /* Sabit genişlik */
  height: 100%; /* Tam yükseklik */
}

.main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: auto;
}
</style>
