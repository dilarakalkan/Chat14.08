<template>
  <div class="settings-page q-pa-md">
    <!-- Sekmeler -->
    <q-tabs v-model="selectedTab" class="text-primary" align="left">
      <q-tab name="profile" label="Profile" icon="person" />
      <q-tab name="privacy" label="Privacy" icon="lock" />
      <q-tab name="notifications" label="Notifications" icon="notifications" />
    </q-tabs>

    <q-separator />

    <!-- Profil Ayarları -->
    <div v-if="selectedTab === 'profile'">
      <ProfileSettings />
    </div>

    <!-- Diğer ayar sekmeleri burada olabilir -->
  </div>
</template>

<script>

import ProfileSettings from '../components/ProfileSettings.vue';


export default {
  name: 'SettingsPage',
  components: {
    ProfileSettings
  },
  data() {
    return {
      selectedTab: 'profile' // Varsayılan olarak profil sekmesi seçili
    };
  }
}
</script>

<style scoped>
.settings-page {
  max-width: 600px;
  margin: auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
</style>
