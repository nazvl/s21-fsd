import {defineStore} from "pinia";
import type {Campus} from "@/Entities/Campus/model/campusType.ts";
import {ref} from "vue";
import {fetchCampuses} from "@/Widgets/CampusList/api/campusApi.ts";
import {useLoaderStore} from "@/Shared/loader/model/loaderStore.ts";

export const useCampusStore = defineStore("Campus", () => {
    const campusList = ref<Campus[]>([])
    const loader = useLoaderStore()

    async function fetchCampusList() {
        if(!campusList.value)  loader.show()
        try {
            campusList.value = await fetchCampuses()
        } catch (error) {
            console.error(error)
        } finally {
            loader.hide()
        }
    }
    return { campusList, fetchCampusList }
})