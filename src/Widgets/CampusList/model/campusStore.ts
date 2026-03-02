import {defineStore} from "pinia";
import type {Campus} from "@/Entities/Campus/model/campusType.ts";
import {ref} from "vue";
import {fetchCampuses} from "@/Widgets/CampusList/api/campusApi.ts";

export const useCampusStore = defineStore("Campus", () => {
    const campusList = ref<Campus[]>([])

    async function fetchCampusList() {
        try {
            campusList.value = await fetchCampuses()
        } catch (error) {
            console.error(error)
        } finally {
        }
    }
    return { campusList, fetchCampusList }
})