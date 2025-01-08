<template>
  <p-button v-bind="props">
    <slot />
  </p-button>
</template>

<script lang="ts" setup>
import type { ButtonProps } from 'primevue'

interface Props extends /* @vue-ignore */ ButtonProps {}

const props = defineProps<Props>()
</script>
