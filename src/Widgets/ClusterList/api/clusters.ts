import {fetchData} from "@/Shared/api.ts";
import type {Cluster} from "@/Entities/Cluster/model/ClusterTypes.ts";
import {useUserStore} from "@/Widgets/Profile/model/userStore.ts";

// @ts-ignore
export async function fetchClusters(campus: string = null): Promise<Cluster[]> {
    const userStore = useUserStore();
    await userStore.getData()
    if(!campus) campus = useUserStore().data.campus.id
    try {
        const res = await fetchData(`/campuses/${campus}/clusters`);
        return res.clusters;
    } catch(e) {
        console.error(e);
    }

}