import {defineStore} from "pinia";
import {ref} from "vue";
// import {useAuthStore} from "@/Features/auth/model/loginStore.ts";
import {fetchData} from "@/Shared/api.ts";
import type {User} from "@/Widgets/profile/model/userTypes.ts";
import {useLoaderStore} from "@/Shared/loader/model/loaderStore.ts";



export const useUserStore = defineStore("UserStore", () => {
    const data = ref<User>({} as User)
    const points = ref<Record<string, number>>({} as Record<string, number>)
    const feedback = ref<Record<string, number>>({} as Record<string, number>)
    const loader = useLoaderStore();
    // const authStore = useAuthStore()
    async function getData(userName = localStorage.getItem("peerName")) {
        if(!data) loader.show()
        try {
            data.value = await fetchData(`/participants/${userName}`)
            points.value = await fetchData(`/participants/${userName}/points`)
            feedback.value = await fetchData(`/participants/${userName}/feedback`)
        } catch (error) {
            console.error(error)
        } finally {
            if(!data) loader.hide()
        }
    }
    return {
        data, getData, points, feedback
    }
})