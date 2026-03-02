import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/App/router.ts';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia'
import {socket} from "@/App/webSocket.ts";
import {useUserStore} from "@/Entities/Profile/model/userStore.ts";

// const ws = new WebSocket('wss://platform.21-school.ru/s21/connection/websocket');

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app');

socket.onopen = () => {
    const userStore = useUserStore()
    console.log('Соединение установлено');
    socket.send(JSON.stringify({
        connected: {
            login: userStore.currentUser ? userStore.currentUser : null,
            campus: userStore.data?.campus?.shortName,
        }
    }));
};