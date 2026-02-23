<script setup lang="ts">
import {useUserStore} from "@/Widgets/profile/model/userStore.ts";
import {onMounted} from "vue";
import Avatar from "@/Widgets/profile/ui/Avatar.vue";
const store = useUserStore();

onMounted(async () => {
  await store.getData()
})
</script>

<template>
  <div class="container flex flex-col gap-4 items-center justify-center p-5">
    <Avatar class="hover:border-b-green-800 hover:shadow-green-600 hover:shadow-2xl transition"></Avatar>
    <div class="flex flex-col gap-2 text-center">
      <p class="font-bold text-xl">{{store.data.login}}</p>
      <p class="font-semibold">{{store.data.parallelName}} - {{store.data.className}}</p>
    </div>

  </div>
{{ store.data }}
</template>

<style scoped>

</style>