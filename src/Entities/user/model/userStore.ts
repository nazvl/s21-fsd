import {defineStore} from "pinia";
import {ref} from "vue";
// import {useAuthStore} from "@/Features/auth/model/loginStore.ts";
import {fetchData} from "@/Shared/api.ts";



export const useUserStore = defineStore("UserStore", () => {
    const data = ref()
    // const authStore = useAuthStore()
    async function getData(userName = localStorage.getItem("peerName")) {
        data.value = await fetchData(`/participants/${userName}`, )
    }
    return {
        data, getData
    }
})