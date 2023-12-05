<script setup lang="ts">
import { RouterLink } from 'vue-router';

const navList = [
    {
        name: '主页',
        path: 'home',
        icon: 'eva-home',
    },
    {
        name: '帐号',
        path: 'account',
        icon: 'eva-person',
    },
    {
        name: '群组',
        path: 'groupList',
        icon: 'eva-people',
    },
];
</script>
<template>
    <div
        class="flex items-center justify-around p-8 text-3xl text-gray-500 dark:text-gray-400"
    >
        <template v-for="nav in navList">
            <RouterLink
                :to="{ name: nav.path }"
                :title="nav.name"
                class="relative flex items-center justify-center transition hover:text-blue-500"
            >
                <i :class="`eva ${nav.icon} h-8 w-8 text-center`"></i>
            </RouterLink>
        </template>
    </div>
</template>
<style scoped>
.router-link-active {
    color: #fafafa;
}
.router-link-active::before {
    transform: scale(1.6);
    opacity: 1;
}
a::before {
    content: '';
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 100%;
    opacity: 0;
    background-color: #3b82f6;
    transition-property: all;
    transition-duration: 300ms;
    transform: scale(0);
}
</style>
