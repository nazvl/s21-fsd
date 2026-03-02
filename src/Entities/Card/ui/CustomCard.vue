<script setup lang="ts">
import type { Props} from "@/Entities/Card/model/CardTypes.ts";
import {Card} from "primevue";
const props = defineProps<Props>()
</script>

<template>
  <Card style="width: 25rem; overflow: hidden">
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
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Cancel" severity="secondary" variant="outlined" class="w-full" />
        <Button label="Save" class="w-full" />
      </div>
    </template>
  </Card>
</template>
