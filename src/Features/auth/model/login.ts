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

    return {
        loginData,
    }
})