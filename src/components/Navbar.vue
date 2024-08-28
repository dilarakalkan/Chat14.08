<template>
  <q-toolbar class="navbar" elevated>
    <q-toolbar-title>
      <q-btn
        flat
        icon="home"
        label="Home"
        to="/"
        class="navbar-home-btn"
      />
    </q-toolbar-title>
    

    <q-space />

  </q-toolbar>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'Navbar',
  setup() {
 
  },
};
</script>

<style scoped>
.navbar {
  background: linear-gradient(90deg, rgba(58,123,213,1) 0%, rgb(119, 181, 202) 100%);
  border-bottom: 2px solid rgb(103, 193, 246);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
}

.navbar-home-btn {
  font-weight: bold;
  color: white;
  font-size: 1.25rem;
  text-transform: uppercase;
}

.navbar-buttons .navbar-btn {
  font-weight: bold;
  margin-left: 15px;
  padding: 10px 20px;
  border-radius: 4px; /* Köşeler keskinleştirildi */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.navbar-buttons .navbar-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.signup-btn {
  background-color: #ff5722;
  color: white;
  border-radius: 4px; /* Köşeler keskinleştirildi */
}

.signup-btn:hover {
  background-color: #dce619;
}

.q-toolbar-title {
  font-size: 1.75rem;
  font-weight: bold;
  color: white;
}

.q-space {
  flex-grow: 1;
}
</style>