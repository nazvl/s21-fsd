<script setup lang="ts">

import CustomInput from "@/Shared/CustomInput.vue";
import {useAuthStore} from "@/Features/auth/model/loginStore.ts"
import CustomButton from "@/Shared/CustomButton.vue";

const store = useAuthStore()
</script>

<template>
  <div class="p-3 flex flex-col gap-6 px-6">
    <h2 class="text-3xl font-bold text-center">Login</h2>
    <div class="flex flex-col gap-6">
      <custom-input type="text" label="Login" v-model="store.loginData.login"/>
      <custom-input type="password" label="Password" v-model="store.loginData.password"/>
    </div>
    <CustomButton type="submit" label="Log in" @click="store.auth"/>
  </div>
</template>

<style scoped>

</style>