<template>
  <div class="login-page">
    <div class="card">
      <div v-if="isSignUp">
        <form @submit.prevent="signup">
          <div class="title">Sign Up</div>
          <input placeholder="Username" type="text" v-model="signupUsername" />
          <br />
          <input placeholder="Password" type="password" v-model="signupPassword" />
          <br />
          <input placeholder="Email" type="text" v-model="signupEmail" />
          <br />
          <input placeholder="First name" type="text" v-model="signupFirstName" />
          <br />
          <input placeholder="Last name" type="text" v-model="signupLastName" />
          <br />
          <button type="submit">Sign Up</button>
          <button type="button" @click="toggleForm">Back to Login</button>
        </form>
      </div>
      <div v-else>
        <form @submit.prevent="login">
          <div class="title">Login</div>
          <input placeholder="Username" type="text" v-model="loginUsername" />
          <br />
          <input placeholder="Password" type="password" v-model="loginPassword" />
          <br />
          <button type="submit">Login</button>
        </form>
        <button type="button" @click="toggleForm">Sign in</button>
      </div>
    </div>
  </div>
</template>

<script>
import { loginRest, signupRest } from "./api.js"; 
import axios from 'axios';

export default {
  data() {
    return {
      isSignUp: false, // Başlangıçta login formu gösterilir
      loginUsername: "",
      loginPassword: "",
      signupUsername: "",
      signupPassword: "",
      signupEmail: "",
      signupFirstName: "",
      signupLastName: "",
    };
  },
  methods: {
    toggleForm() {
      this.isSignUp = !this.isSignUp;
    },
    async login() {
      try {
        const response = await axios.post('http://localhost:8083/login', {
        username: this.loginUsername,
        password: this.loginPassword
      });
        console.log('Login successful', response.data);
        this.$emit("onAuth", { ...response.data, secret: this.loginPassword });
      } catch (error) {
        console.log("Login error", error);
      }
    },
    async signup() {
      try {
        const response = await signupRest(
          this.signupUsername,
          this.signupPassword,
          this.signupEmail,
          this.signupFirstName,
          this.signupLastName
        );
        console.log('Signup successful', response.data);
        this.$emit("onAuth", { ...response.data, secret: this.signupPassword });
      } catch (error) {
        console.log("Sign up error", error);
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
  min-height: 100vh;
  background: #ffffff;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 1rem;
  color: #333;
}

input {
  width: 100%;
  margin-top: 10px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
}

button {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #2980b9;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.switch-link {
  text-align: center;
  margin-top: 10px;
  color: #3498db;
  cursor: pointer;
  font-size: 14px;
}

.switch-link:hover {
  text-decoration: underline;
}
</style>
