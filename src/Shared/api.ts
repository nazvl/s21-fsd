//@ts-nocheck
import {useAuthStore} from "@/Features/auth/model/loginStore.ts";
const baseURL = import.meta.env.VITE_BASE_URL;
type allowedMethods = 'GET' | 'POST'


export async function fetchData(route:string, data?, method: allowedMethods = 'GET'){
    const authStore = useAuthStore();
    const token = authStore.token.access_token;
    try {
        const response = await fetch(baseURL + route, {
            method,
            mode: 'cors',
            body: data,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return await response.json()
    } catch (e) {
        switch (e.code) {
            case 401: console.error('Unauthorized'); break;
            case 403: console.error('Access denied'); break;
            case 404: console.error('Access denied'); break;
            case 200:case 201: return null;
        }
    }
}