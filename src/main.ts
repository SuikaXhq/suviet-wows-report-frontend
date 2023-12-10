import './css/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './core/router';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';
import { useDarkModeStore } from './core/store/darkMode.store';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);

app.use(router).use(pinia);

const darkModeStore = useDarkModeStore();
darkModeStore.$subscribe(() => {
    darkModeStore.updateHtml();
});

app.mount('#app');
