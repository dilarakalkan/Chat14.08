
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
      avatar: 'https://cdn.quasar.dev/img/avatar.png',
      email: 'dilara@example.com',
      phone: '0531 777 88'
    },
    {
      name: 'Arda Güler',
      role: 'Lead Developer',
      avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
      email: 'arda@example.com',
      phone: '0505 333 27 22'
    },
    {
      name: 'Mauro İcardi',
      role: 'UI/UX Designer',
      avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
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
    max-width: 800px;
    margin: auto;
  }
  
  .team-card {
    width: 300px;
    margin: 15px;
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  