<script setup lang="ts">

import CustomInput from "@/Shared/CustomInput.vue";
import {useAuthStore} from "@/Features/auth/model/login.ts"

const store = useAuthStore()
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold">Login</h2>
    <custom-input type="text" label="Login" v-model="store.loginData.login"/>
    <custom-input type="password" label="Password" v-model="store.loginData.password"/>
  </div>
</template>

<style scoped>

</style>