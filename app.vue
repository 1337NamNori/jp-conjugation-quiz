<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup lang="ts">
const { darkMode } = useAppStore()
onMounted(() => {
  if (darkMode) {
    document.documentElement.classList.add('p-app-dark')
  }
})
</script>
