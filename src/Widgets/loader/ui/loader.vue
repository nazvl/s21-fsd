<script setup lang="ts">

import {useLoaderStore} from "@/Widgets/loader/model/loaderStore.ts";

const store = useLoaderStore()
</script>

<template>

  <div class="h-full w-full z-1000 absolute top-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900" v-if="store.status">
    <svg class="mr-3 size-10 animate-spin bg-green-700 ..." viewBox="0 0 24 24"></svg>

  </div>
</template>

<style scoped>

</style>