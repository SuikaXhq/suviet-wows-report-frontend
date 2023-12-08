<script setup lang="ts">
import { RouterLink, type RouteLocationRaw } from 'vue-router';
const props = defineProps<{
    to: RouteLocationRaw;
}>();
</script>

<template>
    <RouterLink
        :to="props.to"
        class="rounded-2xl border-2 border-gray-300 shadow-lg transition duration-300 hover:scale-[1.02] hover:border-gray-500 active:scale-[0.98] dark:border-gray-500 dark:bg-slate-600 hover:dark:border-gray-400"
    >
        <slot></slot>
    </RouterLink>
</template>
