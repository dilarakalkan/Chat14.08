<template>
  <div class="login-page">
    <div class="card">
      <form @submit.prevent="login">
        <div class="title">Login</div>
        <input placeholder="Username" type="text" v-model="loginUsername" required />
        <br />
        <input placeholder="Password" type="password" v-model="loginPassword" required />
        <br />
        <button @click="login" type="submit">Login</button>
      </form>
      <div v-if="errorMessage">
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

// State tanımlamaları
const loginUsername = ref("");
const loginPassword = ref("");
const errorMessage = ref("");

// Login fonksiyonu
const login = async () => {
  try {
    const response = await axios.post('http://localhost:8083/login', {
      username: loginUsername.value,
      password: loginPassword.value
    });

    if (response.status === 200) {
      // Başarılı giriş
      window.location.href = '/home'; // Route kullanmak yerine doğrudan yönlendirme
      alert("Giriş başarılı");
    } else {
      errorMessage.value = 'Invalid username or password';
    }
  } catch (error) {
    alert("Bir hata oluştu");
    console.error('Error during login:', error);
    errorMessage.value = 'An error occurred during login.';
  }
};
</script>
