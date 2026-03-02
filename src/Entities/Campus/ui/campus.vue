<script setup lang="ts">
import type {Campus} from "@/Entities/Campus/model/campusType.ts";
import {computed} from "vue";

const props = defineProps<Campus>()
const activeStyle = computed(() => {
  return props.active ? 'bg-green-400' : 'text-gray-400'
})
</script>

<template>
  <div class="flex px-4" :class="activeStyle">
    <div class="w-full h-3">{{props.shortName}}</div><div> > </div>
  </div>
</template>

<style scoped>

</style>