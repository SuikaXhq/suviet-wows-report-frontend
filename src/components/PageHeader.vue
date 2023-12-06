<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useDarkModeStore } from '@/core/store/darkMode.store';

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

const darkModeStore = useDarkModeStore();
</script>
<template>
    <div
        class="relative flex h-full items-center justify-around border-b-2 border-b-gray-200 p-8 text-3xl text-gray-500 dark:border-b-gray-600 dark:text-gray-400"
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
        <button
            type="button"
            class="absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center"
            :title="
                darkModeStore.isDarkMode ? '切换到明亮模式' : '切换到夜间模式'
            "
            @click="darkModeStore.toggleDarkMode()"
        >
            <i
                :class="`eva ${
                    darkModeStore.isDarkMode ? 'eva-sun' : 'eva-moon'
                } block text-center text-2xl`"
            />
        </button>
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
