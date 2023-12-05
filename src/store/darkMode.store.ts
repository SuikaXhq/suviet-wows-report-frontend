import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore('darkMode', {
    state: () => ({ isDarkMode: true }),
    actions: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
        },
    },
});
