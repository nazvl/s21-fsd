import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/Pages/LoginView.vue'
import {useAuthStore} from "@/Features/auth/model/loginStore.ts";
import ProfileView from "@/Pages/ProfileView.vue";
import HomeView from "@/Pages/HomeView.vue";
import CalendarView from "@/Pages/CalendarView.vue";
import FindView from "@/Pages/FindView.vue";
import ProjectsView from "@/Pages/ProjectsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: CalendarView,
        },
        {
            path: "/find",
            name: 'find',
            component: FindView
        }
        ,
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView,
        }
        ,
        {
            path: '/profile',
            name: 'profile',
            component: ProfileView,
        },
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
