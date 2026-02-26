<script setup lang="ts">

import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const nameOfPage = computed(() => {
  const routeName:string = route.name as string;
  if (!routeName) return ''
  switch (routeName) {
    case "": return "Home";
    default: return routeName[0].toUpperCase() + routeName.slice(1);
  }
})
</script>ы

<template>
  <div class="w-full p-2 fixed top-0">
    <div class="h-10 z-100 w-full bg-gray-800 rounded-2xl flex items-center justify-center" v-if="route.name !== 'login'">
      <h2>{{ nameOfPage }}</h2>
    </div>
  </div>

</template>

<style scoped>

</style>