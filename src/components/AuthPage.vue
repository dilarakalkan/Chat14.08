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
      </form>
    </div>
  </div>
</template>

<script>
import { loginRest, signupRest } from "./api.js"; 

export default {
  data() {
    return {
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
    async login() {
      try {
        const response = await loginRest(this.loginUsername, this.loginPassword);
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
