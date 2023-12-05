<script setup lang="ts">
import { RouterView } from 'vue-router';
import PageHeader from './components/PageHeader.vue';
import { useDarkModeStore } from './store/darkMode.store';

const darkModeStore = useDarkModeStore();
</script>

<template>
    <div :class="darkModeStore.isDarkMode ? 'dark' : ''">
        <div class="bg-white dark:bg-zinc-900">
            <div
                class="relative mx-auto flex min-h-screen max-w-5xl flex-col divide-y-2 divide-gray-500 bg-white text-black shadow-lg dark:divide-gray-600 dark:bg-slate-800 dark:text-white"
            >
                <PageHeader />
                <RouterView />
            </div>
        </div>
    </div>
</template>
