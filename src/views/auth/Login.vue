<template>
    <div class="login-page">
      <div class="card">
        <form @submit.prevent="login">
          <div class="title">Login</div>
          <input placeholder="Username" type="text" v-model="loginUsername" />
          <br />
          <input placeholder="Password" type="password" v-model="loginPassword" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { loginRest } from "../../components/api.js"; // Doğru import ifadesi
  
  export default {
    data() {
      return {
        loginUsername: "",
        loginPassword: "",
      };
    },
    methods: {
      async login() {
        try {
          const response = await loginRest(this.loginUsername, this.loginPassword);
          console.log('Login successful', response.data);
          this.$emit("onAuth", { ...response.data, secret: this.loginPassword });
        } catch (error) {
          console.log("Login error", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .card {
    padding: 20px;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
  </style>
  