export const useAppStore = defineStore(
  'appStore',
  () => {
    const darkMode = ref(false)

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value
      document.documentElement.classList.toggle('p-app-dark', darkMode.value)
    }

    return {
      darkMode,
      toggleDarkMode,
    }
  },
  { persist: { paths: ['darkMode'] } }
)
