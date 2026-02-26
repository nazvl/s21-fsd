<script setup lang="ts">
import Loader from "@/Shared/loader/ui/loader.vue";
import Header from "@/Widgets/Header/ui/Header.vue";
import Footer from "@/Widgets/Footer/ui/Footer.vue";
</script>

<template>
  <Header/>
  <RouterView class="mt-14"/>
  <loader/>
  <Footer/>
</template>

<style scoped>

</style>
