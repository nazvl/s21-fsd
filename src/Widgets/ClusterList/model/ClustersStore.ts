import {defineStore} from "pinia";
import type { Cluster} from "@/Entities/Cluster/model/ClusterTypes.ts";
import {ref} from "vue";
import {fetchClusters} from "@/Widgets/ClusterList/api/clusters.ts";
import {useLoaderStore} from "@/Shared/loader/model/loaderStore.ts";
import {useUserStore} from "@/Widgets/Profile/model/userStore.ts";


export const useClustersStore = defineStore("ClustersStore", () => {
    const clusters = ref<Cluster[]>([]);
    const loader = useLoaderStore();
    const choosenCampus = ref<string>();
    const getClusters = async () => {
        await useUserStore().getData()
        choosenCampus.value = choosenCampus.value ? choosenCampus.value : useUserStore().data.campus.id;
        if(!clusters) loader.show()
        try {
            clusters.value = await fetchClusters(choosenCampus.value);
        } catch (error) {
            console.error(error)
        } finally {
            loader.hide()
        }
    }
    // @ts-ignore
    return { clusters, getClusters };
})