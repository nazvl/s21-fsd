import {defineStore} from "pinia";
import {ref} from "vue";




export const useLoaderStore = defineStore("loaderStore", () => {

    const status = ref<boolean>(false);
    const show = () => {
        status.value = true
        window.scrollTo(0, 0)
    };
    const hide = () => status.value = false;

    return {
        hide, show, status
    }
})