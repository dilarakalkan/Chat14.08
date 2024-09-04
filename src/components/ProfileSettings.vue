<template>
    <div class="profile-settings q-pa-md">
      <!-- Profil Fotoğrafı -->
      <div class="q-pa-md row justify-center">
        <q-avatar size="150px">
          <img :src="profileImage" alt="Profile Picture">
        </q-avatar>
        <q-btn
          fab-mini
          color="green"
          icon="photo_camera"
          @click="uploadPhoto"
          style="position: absolute; bottom: 20px; right: 100px;"
        />
      </div>
  
      <!-- İsim Düzenleme -->
      <q-item>
        <q-item-section avatar>
          <q-icon name="person" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Ad</q-item-label>
          <q-input filled v-model="userName" />
        </q-item-section>
        <q-item-section side>
          <q-btn flat icon="edit" @click="saveChanges" />
        </q-item-section>
      </q-item>
  
      <!-- Hakkında Düzenleme -->
      <q-item>
        <q-item-section avatar>
          <q-icon name="info" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Hakkımda</q-item-label>
          <q-input filled v-model="about" />
        </q-item-section>
        <q-item-section side>
          <q-btn flat icon="edit" @click="saveChanges" />
        </q-item-section>
      </q-item>
  
      <!-- Telefon Numarası -->
      <q-item>
        <q-item-section avatar>
          <q-icon name="phone" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Telefon</q-item-label>
          <q-item-label>{{ phoneNumber }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useQuasar } from 'quasar';
  
  const $q = useQuasar();
  const profileImage = ref('https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png');
  const userName = ref('Dilara');
  const about = ref('Bu benim hakkımda alanım.');
  const phoneNumber = ref('+90 534 617 94 72');
  
  const uploadPhoto = () => {
    // Fotoğraf yükleme işlemi
  };
  
  const saveChanges = () => {
    $q.notify({
      message: 'Changes saved successfully!',
      color: 'positive',
      position: 'top-right'
    });
  };
  </script>
  
  <style scoped>
  .profile-settings {
    max-width: 400px;
    margin: auto;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  </style>
  