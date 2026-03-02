import {defineStore} from "pinia";
import type { Cluster} from "@/Entities/Cluster/model/ClusterTypes.ts";
import {ref} from "vue";
import {fetchClusters} from "@/Widgets/Clusters/api/clusters.ts";
import {useLoaderStore} from "@/Shared/loader/model/loaderStore.ts";


export const useClustersStore = defineStore("ClustersStore", () => {
    const clusters = ref<Cluster[]>([]);
    const loader = useLoaderStore();
    const getClusters = async () => {
        try {
            clusters.value = await fetchClusters()
        } catch (error) {
            console.error(error)
        } finally {
            loader.hide()
        }
    }
    // @ts-ignore
    return { clusters, getClusters };
})