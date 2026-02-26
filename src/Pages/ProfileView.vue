<script setup lang="ts">
import UserProfile from "@/Widgets/profile/ui/UserProfile.vue";
import CustomButton from "@/Shared/CustomButton.vue";
import {useAuthStore} from "@/Features/auth/model/loginStore.ts";
const store = useAuthStore()
</script>

<template>
<user-profile></user-profile>
  <div class="w-full flex justify-center items-center mb-8 px-6 container">
    <custom-button severity="danger" class="w-full max-w-xs" label="Выход" @click.stop="store.logout"/>
  </div>
</template>

<style scoped>

</style>