<script setup lang="ts">
import {useUserStore} from "@/Entities/user/model/userStore.ts";
import {onMounted} from "vue";

const store = useUserStore();

onMounted(async () => {
  await store.getData()
})
</script>

<template>
{{ store.data }}
</template>

<style scoped>

</style>