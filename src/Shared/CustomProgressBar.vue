<script setup lang="ts">
import {ProgressBar} from "primevue";
const props = defineProps({
  start: String,
  end: String,
  value: Number,
})
</script>

<template>
    <div>
      <div class="flex justify-between px-0.5 font-light">
        <p>{{props.start}}</p>
        <p>{{props.end}}</p>
      </div>
      <ProgressBar :value="props.value"/>
    </div>
</template>

<style scoped>

</style>