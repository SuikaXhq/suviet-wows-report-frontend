<script setup lang="ts">
import { RouterView } from 'vue-router';
import PageHeader from '@/components/PageHeader.vue';
import { useDarkModeStore } from '@/core/store/darkMode.store';

const darkModeStore = useDarkModeStore();
</script>

<template>
    <div :class="darkModeStore.isDarkMode ? 'dark' : ''">
        <div class="bg-gray-50 dark:bg-zinc-900">
            <div
                class="text-textMain dark:text-textMainDark relative mx-auto flex min-h-screen max-w-5xl flex-col bg-white shadow-lg dark:bg-slate-800"
            >
                <PageHeader />
                <RouterView v-slot="{ Component }">
                    <Transition name="fade" mode="out-in">
                        <component :is="Component" />
                    </Transition>
                </RouterView>
            </div>
        </div>
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
