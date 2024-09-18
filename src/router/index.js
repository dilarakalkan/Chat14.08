import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AuthPage from '@/components/AuthPage.vue';
import Register from '@/views/auth/Register.vue';
import TeamPage from '@/views/TeamPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import SettingsPage from '@/views/SettingsPage.vue';
import ChatsUser from '@/components/ChatsUser.vue';

import Socket from '@/components/Socket.vue';


const routes = [
  { path: '/', name: 'Home', component: () => import("../components/ChatsPage.vue") },
  { 
    path: '/chats', 
    name: 'ChatsPage', 
    component: () => import("../components/ChatsPage.vue"),
    meta: { requiresAuth: true }
  },
  { 
    path: '/auth', name: 'Auth', component: AuthPage, meta: { requiresAuth: false },
    children: [{ path: 'register', name: 'Register', component: Register }]
  },
  { path: '/team', name: 'Team', component: TeamPage, meta: { requiresAuth: true } },
  { path: '/contact', name: 'Contact', component: ContactPage, meta: { requiresAuth: true } },
  { path: '/settings', name: 'Settings', component: SettingsPage, meta: { requiresAuth: true } },
  { path: '/chatuser/:userId', name: 'ChatUser',component: ChatsUser, meta: { requiresAuth: true } },
   // Socket yönlendirmesi burada eklenir
   { path: '/socket', name: 'Socket', component: Socket, meta: { requiresAuth: true } }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user'); // Kullanıcı bilgilerini localStorage'dan al

  if (!user && to.name !== 'Auth') {
    // Eğer kullanıcı oturumu yoksa ve hedef sayfa Auth değilse, Auth sayfasına yönlendir
    next({ name: 'Auth' });
  } else if (user && to.name === 'Auth') {
    // Eğer kullanıcı oturumu varsa ve hedef sayfa Auth ise, ChatsPage'e yönlendir
    next({ name: 'ChatsPage' });
  } else {
    // Diğer tüm durumlarda yönlendirmeyi olduğu gibi devam ettir
    next();
  }
});

export default router;
