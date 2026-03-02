<script setup lang="ts">
import type { Props} from "@/Shared/Card/model/CardTypes.ts";
import {Card} from "primevue";
const props = defineProps<Props>()
</script>

<template>
  <Card class="h-auto pr-5 bg-green-800" style="background-color: #293831">
    <template #header v-if="props.image">
      <img alt="user header" :src="props.image" />
    </template>
    <template #title v-if="props.title">{{ props.title }}</template>
    <template #subtitle v-if="props.subtitle">{{ props.subtitle }}</template>
    <template #content v-if="props.content">
      <p class="m-0">
        {{ props.content }}
      </p>
    </template>
  </Card>
</template>
