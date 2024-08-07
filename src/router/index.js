import { createRouter, createWebHistory } from 'vue-router';
import AuthPage from '../components/AuthPage.vue';
import ChatsPage from '../components/ChatsPage.vue';
import HomePage from '../components/HomePage.vue';



const routes = [
  {
    path: '/',
    redirect: '/home', 
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage,
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatsPage,
  },
  

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
