<script setup lang="ts"></script>
<template>
    <div
        class="flex items-center justify-around p-10 text-3xl text-gray-500 dark:text-gray-400"
    >
        <RouterLink
            to="/"
            title="主页"
            class="flex items-center justify-center transition hover:text-blue-500"
        >
            <i class="eva eva-home h-8 w-8 text-center"></i>
        </RouterLink>
        <RouterLink
            to="/account"
            title="帐号"
            class="flex items-center justify-center transition hover:text-blue-500"
        >
            <i class="eva eva-person h-8 w-8 text-center"></i>
        </RouterLink>
        <RouterLink
            to="/group"
            title="群组"
            class="flex items-center justify-center transition hover:text-blue-500"
        >
            <i class="eva eva-people h-8 w-8 text-center"></i>
        </RouterLink>
    </div>
</template>
