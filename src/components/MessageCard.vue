<template>
    <q-card class="message-card">
      <!-- Kullanıcı Bilgileri (Avatar ve İsim) -->
      <q-card-section>
        <div class="message-header">
          <q-avatar size="40px" rounded>
   
          </q-avatar>
          <div class="message-info">
            <q-item-label class="message-username">{{ username }}</q-item-label>
            <q-chip square outline class="message-timestamp">
              {{ timestamp }}
            </q-chip>
          </div>
        </div>
      </q-card-section>
  
      <!-- Mesaj İçeriği -->
      <q-card-section class="message-content">
        <q-toolbar>
          <q-toolbar-title>
            <span>{{ message }}</span>
          </q-toolbar-title>
        </q-toolbar>
      </q-card-section>
    </q-card>
  </template>
  
  <script>
  export default {
    name: "MessageCard",
    props: {
      username: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
      timestamp: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .message-card {
    margin-bottom: 10px;
    max-width: 400px;
  }
  
  .message-header {
    display: flex;
    align-items: center;
  }
  
  .message-info {
    margin-left: 10px;
  }
  
  .message-username {
    font-weight: bold;
    margin-right: 5px;
  }
  
  .message-timestamp {
    font-size: 12px;
    color: gray;
  }
  
  .message-content {
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 8px;
  }
  </style>
  