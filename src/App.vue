<script setup lang="ts">
import { RouterView } from 'vue-router';
import PageHeader from './components/PageHeader.vue';
</script>

<template>
    <div
        class="relative mx-auto flex min-h-screen max-w-5xl flex-col divide-y-2 divide-gray-500 bg-white text-black shadow-lg dark:divide-gray-600 dark:bg-slate-800 dark:text-white"
    >
        <PageHeader />
        <RouterView />
    </div>
</template>
