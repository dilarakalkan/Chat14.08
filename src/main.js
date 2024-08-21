import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@fortawesome/fontawesome-free/css/all.css';
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/en-US' // Tercihinize göre dil paketi
import 'quasar/dist/quasar.css' // Quasar'ın ana stil dosyası


const app = createApp(App);
app.use(Quasar, {
    plugins: {}, // Eğer Quasar pluginleri kullanacaksanız burada belirtin
    lang: quasarLang,
  })


app.use(store);
app.use(router);
app.mount('#app');
