import { defineStore } from 'pinia';

function updateHtml() {
    const darkModeStore = useDarkModeStore();
    if (darkModeStore.isDarkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

export const useDarkModeStore = defineStore('darkMode', {
    state: () => ({ isDarkMode: false }),
    actions: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
        },
        updateHtml,
    },
    persist: {
        afterRestore: (ctx) => {
            updateHtml();
        },
    },
});
