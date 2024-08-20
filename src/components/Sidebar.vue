<template>
  <b-sidebar v-model="isSidebarOpen" id="sidebar-1" shadow class="custom-sidebar">
    <div class="sidebar-header">
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chat-app-icon-logo-design-template-770ca6add87165646ba67d1a36dfee4e_screen.jpg?ts=1600190289" alt="Vue Logo" class="vue-logo" />
      <div>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2"></div>
    </b-sidebar>
  </div>
    </div>
    
    <b-nav vertical class="sidebar-nav">
      <b-nav-item 
        @click="navigateTo('Home')" 
        :class="['sidebar-item', { active: isActiveRoute('Home') }]"
      >
        <i class="fas fa-home"></i> Home
      </b-nav-item>
      <b-nav-item 
        @click="navigateTo('About')" 
        :class="['sidebar-item', { active: isActiveRoute('About') }]"
      >
        <i class="fas fa-info-circle"></i> About
      </b-nav-item>
      <b-nav-item 
        @click="navigateTo('Team')" 
        :class="['sidebar-item', { active: isActiveRoute('Team') }]"
      >
        <i class="fas fa-users"></i> Team
      </b-nav-item>
      <b-nav-item 
        @click="navigateTo('Contact')" 
        :class="['sidebar-item', { active: isActiveRoute('Contact') }]"
      >
        <i class="fas fa-envelope"></i> Contact
      </b-nav-item>
      <b-nav-item 
        @click="navigateTo('Settings')" 
        :class="['sidebar-item', { active: isActiveRoute('Settings') }]"
      >
        <i class="fas fa-cog"></i> Settings
      </b-nav-item>
    </b-nav>
  </b-sidebar>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const isSidebarOpen = ref(true);

function navigateTo(page) {
  isSidebarOpen.value = false; // Navigasyon sonrası sidebar'ı kapatır (Mobil için)
  router.push({ name: page });
}

function isActiveRoute(routeName) {
  return route.name === routeName;
}
</script>

<style scoped>

.custom-sidebar {
  background-color: #4d5071;
  color: #ecf0f1;
  width: 250px;
}

/* Aktif olan sayfa için stil */
.sidebar-item.active {
  background-color: #26a6e7;
  font-weight: bold;
}

.vue-logo {
  width: 50px;
  margin: 20px auto;
  display: block;
  border-radius: 50px; /* Görselin kenarlarını yuvarlar */
}

.sidebar-header {
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid #34495e;
}

.sidebar-title {
  font-size: 14px;
  color: #7f8c8d;
}

.sidebar-nav {
  margin-top: 20px;
}

.sidebar-item {
  padding: 15px 20px;
  color: #ecf0f1;
  display: flex;
  align-items: center;
}

.sidebar-item i {
  margin-right: 10px;
}

.sidebar-item:hover {
  background-color: #34495e;
}

/* Responsive için medya sorgusu */
@media (max-width: 768px) {
  .custom-sidebar {
    position: fixed;
    width: 200px;
    left: -200px;
    transition: left 0.3s ease;
    z-index: 1000; /* Üstte kalması için */
  }
  .custom-sidebar.open {
    left: 0;
  }
}
</style>
