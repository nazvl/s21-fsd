<script setup lang="ts">
import type {Cluster} from "@/Entities/Cluster/model/ClusterTypes.ts";
import CustomCard from "@/Shared/Card/ui/CustomCard.vue";
import {computed} from "vue";

const props = defineProps<Cluster>()

const description = computed(() => {
  if(props.capacity && props.availableCapacity) return `${props.availableCapacity} / ${props.capacity}`
  else return ""
})
</script>

<template>
  <div class="p-2">
    <CustomCard :title="props.name" :subtitle="description"/>

  </div>
</template>

<style scoped>

</style>