import {defineStore} from "pinia";
import {computed, ref} from "vue";
// import {useAuthStore} from "@/Features/auth/model/loginStore.ts";
import {fetchData} from "@/Shared/api.ts";
import type {User} from "@/Entities/Profile/model/userTypes.ts";
import {useLoaderStore} from "@/Shared/loader/model/loaderStore.ts";



export const useUserStore = defineStore("UserStore", () => {
    const data = ref<User>({} as User)
    const points = ref<Record<string, number>>({} as Record<string, number>)
    const feedback = ref<Record<string, number>>({} as Record<string, number>)
    const loader = useLoaderStore()
    const workstation = ref<Record<string, number>>({} as Record<string, number>)
    const currentUser = computed( () => {
        const name = localStorage.getItem('peerName')
        return name ? name : 'shootspi'
    })
    // const authStore = useAuthStore()
    async function getData(userName = currentUser.value) {
        loader.show()
        try {
            data.value = await fetchData(`/participants/${userName}`)
            points.value = await fetchData(`/participants/${userName}/points`)
            feedback.value = await fetchData(`/participants/${userName}/feedback`)
            workstation.value = await fetchData(`/participants/${userName}/workstation`)
        } catch (error) {
            console.error(error)
        } finally {
            loader.hide()
        }
    }
    return {
        data, getData, points, feedback, currentUser, workstation
    }
})