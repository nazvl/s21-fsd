<script setup lang="ts">
import {Button} from "primevue";

interface Props {
  severity?: "success" | "warning" | "danger";
}
const props = defineProps<Props>();
</script>

<template>
<Button :severity="props.severity"></Button>
</template>

<style scoped>

</style>