import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/App/router.ts';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia'

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app');