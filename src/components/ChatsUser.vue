<template>
    <div class="q-pa-md" style="max-width: 350px">
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-toolbar-title>Contacts</q-toolbar-title>
      </q-toolbar>
  
      <q-list bordered>
        <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              {{ contact.letter }}
            </q-avatar>
          </q-item-section>
  
          <q-item-section>
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
          </q-item-section>
  
          <q-item-section side>
            <q-icon name="chat_bubble" color="green" />
          </q-item-section>
        </q-item>
  
        <q-separator />
        <q-item-label header>Offline</q-item-label>
  
        <q-item v-for="contact in offline" :key="contact.id" class="q-mb-sm" clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
            </q-avatar>
          </q-item-section>
  
          <q-item-section>
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
          </q-item-section>
  
          <q-item-section side>
            <q-icon name="chat_bubble" color="grey" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </template>
  
  
    <script>
  const contacts = [ {
    id: 1,
    name: 'ozan',
    email: 'ozan@gmail.com',
    letter: 'O'
  }, {
    id: 2,
    name: 'Evşen',
    email: 'evsen@gmail.com',
    letter: 'E'
  }, {
    id: 3,
    name: 'bahar',
    email: 'bahar@gmail.com',
    letter: 'B'
  }, {
    id: 4,
    name: 'nur',
    email: 'nur@gmail.com',
    letter: 'N'
  } ]
  
  const offline = [ {
    id: 5,
    name: 'Fatma',
    email: 'fatma@gmail.com',
    avatar: 'avatar2.jpg'
  }, {
    id: 6,
    name: 'Zeynep',
    email: 'zeynep@gmail.com',
    avatar: 'avatar6.jpg'
  } ]
  
  export default {
    setup () {
      return {
        contacts,
        offline
      }
    }
  }
  </script>