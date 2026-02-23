import { defineStore } from 'pinia';

import {ref} from "vue";
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
    const token = ref<string | null>(null);
    const authServer = 'http://localhost:3000/auth'
    async function auth() {
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

            token.value = await response.json();
            console.log(response)
        } catch (error) {
            console.log(error);
        } finally {
            // TODO: включение/отключение лоадера
        }
    }

    return {
        loginData, auth
    }
})