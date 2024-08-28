<template>
  <div>
    <h1>Home</h1>
    <p>merhaba</p>
    <!-- Yönlendirme butonu -->
    <q-btn label="Go to Chats" color="primary" @click="goToChatsPage" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'Home',
  setup() {
    const router = useRouter();

    const goToChatsPage = () => {
      router.push({ name: 'ChatsPage' });
    };

    return {
      goToChatsPage,
    };
  },
};
</script>
