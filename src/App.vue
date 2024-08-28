<template>
  <!--<div id="app" class="app-container">
    <Navbar v-if="isAuthenticated" class="navbar" />
    <div class="content-container">
      <Sidebar v-if="user" class="sidebar" />
      <div class="main-content">
        <router-view />
        <WebSocket />
      </div>
    </div>
  </div>-->
 
  <q-layout view="hHh lpR fFf">
      <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>CHATSAPP</q-toolbar-title>
        </q-toolbar>
        <q-btn label="Logout" color="negative" @click="logout" class="logout-btn" />
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatarü>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <KeepAlive>
        <q-page padding>
          <router-view />
        <WebSocket />
        
        </q-page>
        </KeepAlive>
      </q-page-container>
    </q-layout>
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
const menuList = [
  {
    icon: 'home',
    label: 'Home',
    separator: true
  },
  {
    icon: 'team',
    label: 'Team',
    separator: false
  },
  
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  
  {
    icon: 'contact',
    iconColor: 'primary',
    label: 'Contact',
    separator: false
  }
]
const drawer = ref(false)
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
  background-color: #8ce558; /* Sidebar arka plan rengi */
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