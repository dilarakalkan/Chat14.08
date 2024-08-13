import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';  
import ChatsPage from '@/components/ChatsPage.vue';
import AuthPage from '@/components/AuthPage.vue';
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
import AboutPage from '@/views/AboutPage.vue';
import TeamPage from '@/views/TeamPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import SettingsPage from '@/views/SettingsPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/chats', name: 'Chats', component: ChatsPage, meta: { requiresAuth: true } },
  { 
    path: '/auth', name: 'Auth', component: AuthPage,
    children: [
      { path: 'login', name: 'Login', component: Login },
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

// Route Guard ekleme
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('user-token'); // Örnek olarak token kontrolü
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' }); // Giriş yapılmamışsa Login sayfasına yönlendir
  } else {
    next(); // Giriş yapılmışsa yönlendirmeyi devam ettir
  }
});

export default router;
