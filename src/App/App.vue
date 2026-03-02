<script setup lang="ts">
import Loader from "@/Shared/loader/ui/loader.vue";
import Header from "@/Widgets/Header/ui/Header.vue";
import Footer from "@/Widgets/Footer/ui/Footer.vue";
import {useRoute} from "vue-router";
const route = useRoute();

</script>

<template>
  <Header/>
  <div class="mt-14 mb-26">
    <RouterView/>
  </div>
  <loader/>
  <Footer v-if="route.name !== 'login'"/>
</template>

<style scoped>

</style>
