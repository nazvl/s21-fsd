<script setup lang="ts">
import Loader from "@/Shared/loader/ui/loader.vue";
import Header from "@/Widgets/Header/ui/Header.vue";
</script>

<template>
  <Header/>
  <RouterView class="mt-14"/>
  <loader/>
</template>

<style scoped>

</style>
