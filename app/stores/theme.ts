import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'light'
  }),
  getters: {
    getTheme: (state) => state.theme
  },
  actions: {
    setTheme(theme: string) {
      this.theme = theme
    }
  }
})