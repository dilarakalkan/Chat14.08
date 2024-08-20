<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section>
        <q-input filled v-model="username" label="Username" />
        <q-input filled v-model="password" type="password" label="Password" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Login" color="primary" @click="login" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    function login() {
      // Burada kimlik doğrulama işlemini gerçekleştirin
      // kimlik doğrulama başarılı olduğunda
      if (username.value === 'user' && password.value === 'pass') {
        router.push({ name: 'ChatsPage' });
      } else {
        alert('Invalid credentials');
      }
    }

    return {
      username,
      password,
      login,
    };
  },
};
</script>