import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ChatEngineCore from 'chat-engine';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

const ChatEngine = ChatEngineCore.create({
  publishKey: 'your-publish-key',
  subscribeKey: 'your-subscribe-key'
}, {
  globalChannel: 'chat-engine-demo'
});

const app = createApp(App);

app.config.globalProperties.$chatEngine = ChatEngine;

app.use(store);
app.use(router);
app.mount('#app');
