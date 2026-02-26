<script setup lang="ts">
import UserProfile from "@/Widgets/profile/ui/UserProfile.vue";
import CustomButton from "@/Shared/CustomButton.vue";
</script>

<template>
<user-profile></user-profile>
  <div class="w-full flex justify-center items-center mb-8">
    <custom-button severity="danger" class="" label="Выход"/>
  </div>
</template>

<style scoped>

</style>