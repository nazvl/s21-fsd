<script setup lang="ts">

import CustomInput from "@/Shared/CustomInput.vue";
import CustomButton from "@/Shared/CustomButton.vue";
import UserProfile from "@/Entities/Profile/ui/UserProfile.vue";
import {useUserStore} from "@/Entities/Profile/model/userStore.ts";
import {ref} from "vue";

const name = ref<string>("");
const userStore = useUserStore();
function handleSearch() {
  if (name.value === "" || name.value.length < 4) return null;
  userStore.getData(name.value)
}
</script>

<template>
  <div class="flex p-4 gap-2">
    <CustomInput class="w-full" :placeholder="userStore.currentUser" v-model="name"/><CustomButton @click="handleSearch()" label="search" />
  </div>
<user-profile/>
</template>

<style scoped>

</style>