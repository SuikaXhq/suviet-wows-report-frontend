<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import PageHeader from './components/PageHeader.vue';
</script>

<template>
    <div
        class="relative mx-auto max-w-4xl divide-y-2 divide-gray-500 bg-white text-black shadow-lg dark:divide-gray-600 dark:bg-slate-800 dark:text-white"
    >
        <PageHeader />
        <RouterView />
    </div>
</template>
