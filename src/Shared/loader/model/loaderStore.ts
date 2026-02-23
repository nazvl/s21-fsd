import {defineStore} from "pinia";
import {ref} from "vue";




export const useLoaderStore = defineStore("loaderStore", () => {

    const status = ref<boolean>(false);
    const show = () => status.value = true;
    const hide = () => status.value = false;

    return {
        hide, show, status
    }
})