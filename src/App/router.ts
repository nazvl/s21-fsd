import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/Pages/LoginView.vue'
import {useAuthStore} from "@/Features/auth/model/loginStore.ts";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
    ],
})
router.beforeEach(async (to, _from, next) => {
    const authStore = useAuthStore(); // Получаем экземпляр стор-а
    const token = authStore.token; // Проверяем токен

    if (!token && to.path !== '/login') {
        next('/login'); // Переходим на страницу входа, если токена нет и цель не страница входа
    } else {
        next(); // Продолжаем переход
    }
});
export default router
