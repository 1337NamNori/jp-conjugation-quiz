<template>
  <div>
    <header class="block">
      <div class="flex justify-between w-full">
        <p-tabs :value="currentTab">
          <p-tab-list>
            <p-tab v-for="menu in menus" :key="menu.route" :value="menu.route">
              <nuxt-link :to="menu.route">{{ menu.title }}</nuxt-link>
            </p-tab>
          </p-tab-list>
        </p-tabs>

        <app-button @click="toggleDarkMode" variant="text">
          {{ darkModeRef ? 'Light Mode' : 'Dark Mode' }}
        </app-button>
      </div>
    </header>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const menus = [
  {
    title: 'Verb',
    route: '/jp/conjugation/verb',
  },
  {
    title: 'Adjective',
    route: '/jp/conjugation/adjective',
  },
]
const route = useRoute()
const { toggleDarkMode } = useAppStore()
const darkModeRef = toRef(useAppStore(), 'darkMode')

const currentTab = ref(route.path)
</script>
