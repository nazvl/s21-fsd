import {defineStore} from "pinia";
import {ref} from "vue";




export const useLoaderStore = defineStore("loaderStore", () => {

    const status = ref<boolean>(false);
    const show = () => {
        status.value = true
        window.scrollTo(0, 0)
        document.body.style.overflow = 'hidden';
    };
    const hide = () => {
        status.value = false
        document.body.style.overflow = '';
    };

    return {
        hide, show, status
    }
})