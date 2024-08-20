<template>
  <div class="container">
    <div class="title">Sign Up</div>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <input type="text" v-model="firstName" placeholder="First name" />
      <input type="text" v-model="lastName" placeholder="Last name" />
      <button type="submit">Sign Up</button>
    </form>
    <div class="switch-link" @click="switchToLogin">
      Already have an account? Login
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    };
  },
  methods: {
    ...mapActions(['register']),
    async submitForm() {
      try {
        await this.register({
          username: this.username,
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName
        });
        this.$router.push('/chats');
      } catch (error) {
        console.error('Registration failed:', error);
      }
    },
    switchToLogin() {
      this.$router.push('/auth/login');
    }
  }
};
</script>

