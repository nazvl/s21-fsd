import {defineStore} from "pinia";
import {ref} from "vue";
// import {useAuthStore} from "@/Features/auth/model/loginStore.ts";
import {fetchData} from "@/Shared/api.ts";
import type {User} from "@/Widgets/profile/model/userTypes.ts";
import {useLoaderStore} from "@/Shared/loader/model/loaderStore.ts";



export const useUserStore = defineStore("UserStore", () => {
    const data = ref<User>({} as User)
    const loader = useLoaderStore();
    // const authStore = useAuthStore()
    async function getData(userName = localStorage.getItem("peerName")) {
        loader.show()
        try {
            data.value = await fetchData(`/participants/${userName}`,)
        } catch (error) {
            console.error(error)
        } finally {
            loader.hide()
        }
    }
    return {
        data, getData
    }
})