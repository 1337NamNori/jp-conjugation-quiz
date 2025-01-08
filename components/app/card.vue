<template>
  <p-card v-bind="props">
    <template #title>
      <slot name="title" v-if="$slots.title" />
      <template v-else-if="title">{{ title }}</template>
    </template>
    <template #content>
      <slot />
    </template>
  </p-card>
</template>

<script setup lang="ts">
import type { CardProps } from 'primevue'

const { title, ...props } = defineProps<
  {
    title?: string
  } & CardProps
>()
</script>
