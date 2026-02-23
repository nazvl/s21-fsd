<script setup lang="ts">
import InputText from 'primevue/inputtext'

const model = defineModel<string>()

interface Props {
  type?: 'text' | 'password' | 'email' | 'number'
  label?: string
  style?: string
}

const props = withDefaults(
    defineProps<Props>(),
    {
      type: 'text',
      label: ''
    }
)
</script>

<template>
  <div class="flex flex-col">
    <label v-if="props.label" class="text-xs text-gray-400">{{ props.label }}</label>
    <InputText
        v-model="model"
        :type="props.type"
    />
  </div>
</template>

<style scoped>

</style>
