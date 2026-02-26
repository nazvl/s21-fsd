import { defineStore } from 'pinia';

import {computed, ref} from "vue";
import router from "@/App/router.ts";
import {useLoaderStore} from "@/Shared/loader/model/loaderStore.ts";
interface LoginData {
    login: string;
    password: string;
}

export const useAuthStore = defineStore('auth', () => {
    const loginData = ref<LoginData>(
        {
            login: '',
            password: ''
        }
    );
    const loader = useLoaderStore()
    const token = computed(() => {
        const tokenStr = localStorage.getItem('token');
        if (!tokenStr) return null;
        return JSON.parse(tokenStr);
    });
    const logout = () => {
        localStorage.removeItem('token');
        loginData.value = {login: '', password: ''};
        router.push('/login');
    }
    const authServer = import.meta.env.VITE_AUTH_SERVER;
    async function auth() {
        loader.show()
        const data = new URLSearchParams({
            login: loginData.value.login,
            password: loginData.value.password,
        }).toString();
        try {
            const response = await fetch(authServer, {
                method: 'POST',
                body: data,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
            if(response.ok) {
                const token = await response.json();
                localStorage.setItem('token', JSON.stringify(token));
                localStorage.setItem('peerName', loginData.value.login);
                debugger;
                await router.push({name: 'profile', params: {}});
            }

            console.log(response)
        } catch (error) {
            console.log(error);
        } finally {
            loader.hide();
        }
    }

    return {
        loginData, auth, token, logout
    }
})