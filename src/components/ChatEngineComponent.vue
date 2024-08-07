<template>
    <div>
      <chat-engine
        :project-id="projectID"
        :user-name="userName"
        :user-secret="userSecret"
      />
    </div>
  </template>
  
  <script>
  import { ChatEngine } from 'vue-chat-engine';
  
  export default {
    components: {
      ChatEngine
    },
    props: {
      projectID: String,
      userName: String,
      userSecret: String,
    }
  };
  </script>
  
  <style>
 
  </style>
  