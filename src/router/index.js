// index.js dosyanız
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import ChatsPage from '@/components/ChatsPage.vue';
import AuthPage from '@/components/AuthPage.vue';
import Register from '@/views/auth/Register.vue';
import AboutPage from '@/views/AboutPage.vue';
import TeamPage from '@/views/TeamPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import SettingsPage from '@/views/SettingsPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/chats', name: 'ChatsPage', component: ChatsPage },
  { path: '/auth', name: 'Auth', component: AuthPage, 
    children: [
      { path: 'register', name: 'Register', component: Register }
    ] 
  },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/team', name: 'Team', component: TeamPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/settings', name: 'Settings', component: SettingsPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Burada router'ı varsayılan olarak dışa aktarmalısınız
export default router;
