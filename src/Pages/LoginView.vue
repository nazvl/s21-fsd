<script setup lang="ts">

import CustomInput from "@/Shared/CustomInput.vue";





</script>

<template>
  <div>
    <h2 class="text-3xl font-bold">Login</h2>
    <custom-input type="text" label="Login" v-model="loginData.login"/>
    <custom-input type="password" label="Password" v-model="loginData.password"/>
  </div>
</template>

<style scoped>

</style>