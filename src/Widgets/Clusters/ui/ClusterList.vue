<script setup lang="ts">

import Cluster from "@/Entities/Cluster/ui/Cluster.vue";
import {useClustersStore} from "@/Widgets/Clusters/model/ClustersStore.ts";
import {onMounted} from "vue";

const clustersStore = useClustersStore()
onMounted(() => {
  clustersStore.getClusters()
})
</script>

<template>
  <div class="flex flex-wrap justify-between p-2">
    <div v-for="cluster in clustersStore.clusters" :key="cluster.id" class="rounded-md grow min-w-[40%]">
      <Cluster :id="cluster.id" :name="cluster.name" :capacity="cluster.capacity" :available-capacity="cluster.availableCapacity" :floor="cluster.floor"/>
    </div>
  </div>

</template>

<style scoped>

</style>