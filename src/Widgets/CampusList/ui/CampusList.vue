<script setup lang="ts">

import Campus from "@/Entities/Campus/ui/campus.vue";
import {useCampusStore} from "@/Widgets/CampusList/model/campusStore.ts";
import {onMounted} from "vue";
const campusStore = useCampusStore();
onMounted(() => {
  campusStore.fetchCampusList();
})

function handleCampusClick() {

}
</script>

<template>
  <div v-for="campus in campusStore.campusList">
    <Campus :id="campus.id" :short-name="campus.shortName" :full-name="campus.fullName" @click="handleCampusClick"/>
  </div>

</template>

<style scoped>

</style>