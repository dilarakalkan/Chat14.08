<template>
  <q-page class="q-pa-md">
    <div class="team-page q-gutter-md row justify-center">
      
      <!-- Takım Üyesi Kartları -->
      <q-card v-for="member in teamMembers" :key="member.name" class="team-card">
        <q-card-section>
          <div class="text-center">
            <q-avatar size="100px" :src="member.avatar" />
          </div>
          <div class="text-h6 text-center q-mt-md">{{ member.name }}</div>
          <div class="text-subtitle1 text-center">{{ member.role }}</div>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn flat icon="email" @click="sendEmail(member.email)" />
          <q-btn flat icon="phone" @click="makeCall(member.phone)" />
        </q-card-actions>
      </q-card>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const teamMembers = ref([
  {
    name: 'Dilara Kalkan',
    role: 'Project Manager',
    email: 'dilara@example.com',
    phone: '0531 777 88'
  },
  {
    name: 'Bill Gates',
    role: 'Lead Developer',
    avatar:'',
    
    email: 'bill@example.com',
    phone: '0505 333 27 22'
  },
  {
    name: 'Melisa Sezgin',
    role: 'UI Designer',
    avatar: '', // Use a real image URL or path
    email: 'mauro@example.com',
    phone: '0507 222 74 77'
  }
]);

const sendEmail = (email) => {
  window.location.href = `mailto:${email}`;
};

const makeCall = (phone) => {
  window.location.href = `tel:${phone}`;
};
</script>

<style scoped>
.team-page {
  max-width: 1000px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.team-card {
  width: 300px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-center {
  text-align: center;
}
</style>
